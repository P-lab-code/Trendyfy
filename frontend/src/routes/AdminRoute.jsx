import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const AdminRoute = ({ children }) => {

    const { loading, isAuthenticated } = useAuth();

    if (loading) {
        return <Spinner />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    const role = localStorage.getItem("role");

    if (role !== "ADMIN") {
        return <Navigate to="/" />;
    }

    return children;
};

export default AdminRoute;