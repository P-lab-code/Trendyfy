import { useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut, FiUser } from "react-icons/fi";

const AdminNavbar = ({ onMenuClick }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("role");
        localStorage.removeItem("cart");
        navigate("/login");
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-[#090507] border-b border-rose-500/20 shadow-md z-10">
            <div className="flex items-center gap-4">
                <button onClick={onMenuClick} className="text-rose-200 hover:text-rose-400 md:hidden transition-colors">
                    <FiMenu className="w-6 h-6" />
                </button>
                <div className="font-serif text-lg font-bold tracking-wider text-white">
                    TRENDY<span className="text-rose-500">FY</span>
                    <span className="text-xs font-sans tracking-normal font-normal text-rose-300/60 ml-2 border border-rose-500/30 px-2 py-0.5 rounded">Admin Panel</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-[#0c0608] border border-rose-500/20 px-3 py-1.5 rounded-lg">
                    <FiUser className="text-rose-400 w-4 h-4" />
                    <span className="text-xs font-medium text-rose-200">Administrator</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 border border-red-500/30 px-3.5 py-2 rounded-lg transition-all duration-300"
                >
                    <FiLogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Logout</span>
                </button>
            </div>
        </header>
    );
};

export default AdminNavbar;