import { useState, useEffect } from "react";
import axios from "../../api/axios";
import DashboardCards from "../../components/Admin/DashboardCards";
import { FiTrendingUp, FiClock } from "react-icons/fi";

const DashboardHome = () => {
    const [stats, setStats] = useState({ revenue: "₹0", orders: 0, products: 0, users: 0 });
    const token = localStorage.getItem("authToken");

    useEffect(() => {
        // Example structure to fetch dashboard counters from backend if available
        // axios.get("/api/v1/admin/stats", { headers: { Authorization: `Bearer ${token}` } })
        //      .then(res => setStats(res.data))
        //      .catch(err => console.error(err));
    }, [token]);

    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl gap-4">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-white mb-1">
                        Welcome back, <span className="text-rose-500">Admin</span>!
                    </h1>
                    <p className="text-xs tracking-wider text-rose-200/60 uppercase">
                        Manage your e-commerce platform inventory, users, and orders seamlessly.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-4 py-2 rounded-xl text-xs font-bold text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Secure Admin Session Active
                </div>
            </div>

            <DashboardCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-500/10">
                        <h3 className="font-serif font-bold text-lg text-white flex items-center gap-2">
                            <FiTrendingUp className="text-rose-500 w-5 h-5" /> Platform Performance
                        </h3>
                    </div>
                    <div className="h-64 flex items-center justify-center border border-dashed border-rose-500/20 rounded-xl bg-[#040203]/50">
                        <p className="text-xs text-rose-200/40 uppercase tracking-widest">
                            System analytics operational and connected to backend API
                        </p>
                    </div>
                </div>

                <div className="bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl flex flex-col">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-500/10">
                        <h3 className="font-serif font-bold text-lg text-white flex items-center gap-2">
                            <FiClock className="text-rose-500 w-5 h-5" /> Quick Actions
                        </h3>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <a href="/admin/products" className="flex justify-between items-center p-3 bg-[#040203] border border-rose-500/10 hover:border-rose-500/40 rounded-xl transition-all">
                            <span className="text-xs text-rose-200/80 font-medium">Add / Modify Products</span>
                            <span className="text-xs font-bold text-rose-400">Manage →</span>
                        </a>
                        <a href="/admin/orders" className="flex justify-between items-center p-3 bg-[#040203] border border-rose-500/10 hover:border-rose-500/40 rounded-xl transition-all">
                            <span className="text-xs text-rose-200/80 font-medium">View Customer Orders</span>
                            <span className="text-xs font-bold text-rose-400">Inspect →</span>
                        </a>
                        <a href="/admin/users" className="flex justify-between items-center p-3 bg-[#040203] border border-rose-500/10 hover:border-rose-500/40 rounded-xl transition-all">
                            <span className="text-xs text-rose-200/80 font-medium">Manage System Users</span>
                            <span className="text-xs font-bold text-rose-400">View →</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;