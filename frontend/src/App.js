import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ProductDetailPage from "./pages/ProductDetailPage";
import Layout from "./components/Product/Layout";
import SearchResults from "./pages/SearchResults";
import CheckOut from "./pages/CheckOut";
import CheckOutResultPage from "./pages/CheckOutResultPage";
import Home from "./pages/Home";
import ImageSearch from "./pages/ImageSearch";
import WishlistPage from "./pages/WishlistPage";
import OrderSuccess from "./pages/OrderSuccess";

// 1. Saare Admin Pages yahan Import karein
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageProducts from "./pages/Admin/ManageProducts";
import ManageOrders from "./pages/Admin/ManageOrders";
import ManageUsers from "./pages/Admin/ManageUsers";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Routes with User Navbar Layout */}
                <Route element={<Layout />}>

                    {/* Public */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/image-search" element={<ImageSearch />} />
                    <Route path="/search" element={<SearchResults />} />

                    {/* Private User Routes */}
                    <Route
                        path="/cart"
                        element={
                            <PrivateRoute>
                                <Cart />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/wishlist"
                        element={
                            <PrivateRoute>
                                <WishlistPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/checkout"
                        element={
                            <PrivateRoute>
                                <CheckOut />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/ordersuccess"
                        element={
                            <PrivateRoute>
                                <OrderSuccess />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/success"
                        element={
                            <PrivateRoute>
                                <CheckOutResultPage success={true} />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/cancel"
                        element={
                            <PrivateRoute>
                                <CheckOutResultPage success={false} />
                            </PrivateRoute>
                        }
                    />

                </Route>

                {/* 2. Admin Routes (Protected by AdminRoute wrapper) */}
                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/products"
                    element={
                        <AdminRoute>
                            <ManageProducts />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/orders"
                    element={
                        <AdminRoute>
                            <ManageOrders />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/admin/users"
                    element={
                        <AdminRoute>
                            <ManageUsers />
                        </AdminRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;