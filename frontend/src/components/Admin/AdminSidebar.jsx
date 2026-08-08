import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiX } from "react-icons/fi";

const AdminSidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { name: "Dashboard", path: "/admin/dashboard", icon: FiHome },
        { name: "Manage Products", path: "/admin/products", icon: FiBox },
        { name: "Manage Orders", path: "/admin/orders", icon: FiShoppingCart },
        { name: "Manage Users", path: "/admin/users", icon: FiUsers },
    ];

    const sidebarContent = (
        <div className="flex flex-col h-full bg-[#090507] border-r border-rose-500/25 w-64 p-6">
            <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center gap-2.5">
                    <span className="text-rose-500 text-lg animate-spin duration-1000">❖</span>
                    <span className="font-serif text-xl font-extrabold tracking-wider text-white">
                        TRENDY<span className="text-rose-500">FY</span>
                    </span>
                </Link>
                <button onClick={onClose} className="md:hidden text-rose-200 hover:text-rose-400">
                    <FiX className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-col space-y-2 flex-1">
                <span className="text-[10px] tracking-[0.2em] uppercase text-rose-300/40 font-bold mb-2">Navigation</span>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                                isActive
                                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                                    : "text-rose-200/70 hover:bg-rose-500/10 hover:text-rose-300"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="border-t border-rose-500/20 pt-4 mt-auto">
                <p className="text-[10px] text-rose-200/40 text-center tracking-widest uppercase">
                    Secure Management Hub
                </p>
            </div>
        </div>
    );

    return (
        <>
            <aside className="hidden md:block h-screen sticky top-0">{sidebarContent}</aside>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
                    <div className="relative z-10 flex-1 max-w-xs">{sidebarContent}</div>
                </div>
            )}
        </>
    );
};

export default AdminSidebar;