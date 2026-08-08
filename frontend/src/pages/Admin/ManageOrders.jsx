import { useState, useEffect } from "react";
import axios from "../../api/axios";
import AdminLayout from "../../components/Admin/AdminLayout";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("authToken");

    const fetchOrders = async () => {
        try {
            const res = await axios.get("/api/v1/orders", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("Orders API response:", res.data);

            if (Array.isArray(res.data)) {
                setOrders(res.data);
            } else if (Array.isArray(res.data.content)) {
                setOrders(res.data.content);
            } else if (Array.isArray(res.data.orders)) {
                setOrders(res.data.orders);
            } else {
                setOrders([]);
                console.error("Unexpected orders response:", res.data);
            }
        } catch (err) {
            console.error("Error fetching orders:", err);
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <AdminLayout>
            <div className="flex flex-col space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-white">
                            Manage Orders
                        </h1>

                        <p className="text-xs text-rose-200/60 uppercase tracking-wider">
                            Track and fulfill customer checkout orders
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-rose-200/50">
                            Total Orders
                        </p>

                        <p className="text-2xl font-bold text-rose-400">
                            {orders.length}
                        </p>
                    </div>
                </div>

                {/* Orders List */}
                <div className="bg-[#0c0608] border border-rose-500/20 rounded-2xl shadow-xl overflow-hidden p-6">

                    <h3 className="text-lg font-serif font-bold text-white mb-4">
                        Customer Orders
                    </h3>

                    {/* Loading */}
                    {loading ? (
                        <div className="py-10 text-center">
                            <p className="text-sm text-rose-200/60">
                                Loading orders...
                            </p>
                        </div>

                    ) : orders.length === 0 ? (

                        /* Empty */
                        <div className="py-10 text-center">
                            <p className="text-sm text-rose-200/60">
                                No customer orders found.
                            </p>
                        </div>

                    ) : (

                        /* Table */
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-rose-100">

                                <thead className="border-b border-rose-500/20 text-rose-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="py-3 px-4">
                                            Order ID
                                        </th>

                                        <th className="py-3 px-4">
                                            Customer
                                        </th>

                                        <th className="py-3 px-4">
                                            Email
                                        </th>

                                        <th className="py-3 px-4">
                                            Amount
                                        </th>

                                        <th className="py-3 px-4">
                                            Status
                                        </th>

                                        <th className="py-3 px-4">
                                            Order Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-rose-500/10">

                                    {orders.map((order) => (
                                        <tr
                                            key={order.id}
                                            className="hover:bg-rose-500/5 transition-colors"
                                        >

                                            {/* ID */}
                                            <td className="py-3 px-4 font-bold text-white">
                                                #{order.id}
                                            </td>

                                            {/* Customer */}
                                            <td className="py-3 px-4">
                                                {order.user?.username || "Unknown"}
                                            </td>

                                            {/* Email */}
                                            <td className="py-3 px-4">
                                                {order.user?.email || "N/A"}
                                            </td>

                                            {/* Amount */}
                                            <td className="py-3 px-4 text-rose-400 font-bold">
                                                ₹{order.totalAmount}
                                            </td>

                                            {/* Status */}
                                            <td className="py-3 px-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                                        order.status === "DELIVERED"
                                                            ? "bg-green-500/10 text-green-400"
                                                            : order.status === "CANCELLED"
                                                            ? "bg-red-500/10 text-red-400"
                                                            : "bg-yellow-500/10 text-yellow-400"
                                                    }`}
                                                >
                                                    {order.status}
                                                </span>
                                            </td>

                                            {/* Date */}
                                            <td className="py-3 px-4 text-rose-200/70">
                                                {order.orderDate
                                                    ? new Date(
                                                          order.orderDate
                                                      ).toLocaleString()
                                                    : "N/A"}
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageOrders;