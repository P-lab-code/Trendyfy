import { useState, useEffect } from "react";
import axios from "../../api/axios";
import AdminLayout from "../../components/Admin/AdminLayout";
import { FiTrash2 } from "react-icons/fi";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("authToken");

    const fetchProducts = async () => {
        try {
            const res = await axios.get("/api/v1/products");

            console.log("Products API response:", res.data);

            // Backend paginated response handle karo
            if (Array.isArray(res.data)) {
                setProducts(res.data);
            } else if (Array.isArray(res.data.content)) {
                setProducts(res.data.content);
            } else if (Array.isArray(res.data.products)) {
                setProducts(res.data.products);
            } else {
                setProducts([]);
                console.error("Unexpected products response:", res.data);
            }
        } catch (err) {
            console.error("Error fetching products:", err);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            await axios.delete(`/api/v1/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Delete ke baad list se product hata do
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== id)
            );

            alert("Product deleted successfully!");
        } catch (err) {
            console.error("Delete product error:", err);
            alert(
                "Failed to delete product. Make sure you are logged in as ADMIN."
            );
        }
    };

    return (
        <AdminLayout>
            <div className="flex flex-col space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center bg-[#0c0608] border border-rose-500/20 p-6 rounded-2xl shadow-xl">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-white">
                            Manage Products
                        </h1>

                        <p className="text-xs text-rose-200/60 uppercase tracking-wider">
                            Add or remove catalog merchandise
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-rose-200/50">
                            Total Products
                        </p>

                        <p className="text-2xl font-bold text-rose-400">
                            {products.length}
                        </p>
                    </div>
                </div>

                {/* Product List */}
                <div className="bg-[#0c0608] border border-rose-500/20 rounded-2xl shadow-xl overflow-hidden p-6">

                    <h3 className="text-lg font-serif font-bold text-white mb-4">
                        Existing Inventory
                    </h3>

                    {/* Loading */}
                    {loading ? (
                        <div className="py-10 text-center">
                            <p className="text-sm text-rose-200/60">
                                Loading products...
                            </p>
                        </div>

                    ) : products.length === 0 ? (

                        /* Empty */
                        <div className="py-10 text-center">
                            <p className="text-sm text-rose-200/60">
                                No products found in database.
                            </p>
                        </div>

                    ) : (

                        /* Table */
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-rose-100">

                                <thead className="border-b border-rose-500/20 text-rose-400 uppercase tracking-wider">
                                    <tr>
                                        <th className="py-3 px-4">ID</th>
                                        <th className="py-3 px-4">Name</th>
                                        <th className="py-3 px-4">Price</th>
                                        <th className="py-3 px-4">Category</th>
                                        <th className="py-3 px-4">Quantity</th>
                                        <th className="py-3 px-4 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-rose-500/10">

                                    {products.map((p) => (
                                        <tr
                                            key={p.id}
                                            className="hover:bg-rose-500/5 transition-colors"
                                        >
                                            <td className="py-3 px-4">
                                                {p.id}
                                            </td>

                                            <td className="py-3 px-4 font-medium text-white">
                                                {p.name}
                                            </td>

                                            <td className="py-3 px-4 text-rose-400 font-bold">
                                                ₹{p.price}
                                            </td>

                                            <td className="py-3 px-4">
                                                {p.category}
                                            </td>

                                            <td className="py-3 px-4">
                                                {p.quantity}
                                            </td>

                                            <td className="py-3 px-4 text-right">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(p.id)
                                                    }
                                                    className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                                                    title="Delete Product"
                                                >
                                                    <FiTrash2 className="w-4 h-4" />
                                                </button>
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

export default ManageProducts;