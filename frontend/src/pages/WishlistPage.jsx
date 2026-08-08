import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getWishlist, removeWishlist } from "../api/wishlist";

function WishlistPage() {
    const { isAuthenticated, token } = useAuth();
    const navigate = useNavigate();
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("WishlistPage Auth Status:", { isAuthenticated, hasToken: !!token });

        if (!isAuthenticated || !token) {
            navigate("/login");
            return;
        }

        fetchWishlistItems();
    }, [isAuthenticated, token, navigate]);

    const fetchWishlistItems = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log("Fetching wishlist from backend using axios...");

            const response = await getWishlist();

            console.log("Wishlist data received:", response.data);
            setWishlistItems(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            console.error("Error fetching wishlist:", err);
            setError(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    };

    const removeFromWishlistHandler = async (productId) => {
        try {
            await removeWishlist(productId);

            setWishlistItems((prev) =>
                prev.filter((item) => item.productId !== productId)
            );
        } catch (err) {
            alert(err.response?.data?.error || err.message);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#040203] text-white flex items-center justify-center pt-24">
                <div className="animate-spin text-rose-500 text-3xl">❖</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#040203] text-white flex flex-col items-center justify-center pt-24 px-4">
                <p className="text-red-400 mb-4">{error}</p>
                <button
                    onClick={fetchWishlistItems}
                    className="px-6 py-2 rounded-full border border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300 text-xs tracking-widest uppercase"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#040203] text-white pt-32 pb-16 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="border-b border-rose-500/20 pb-6 mb-8 flex justify-between items-center">
                    <h1 className="font-serif text-3xl font-bold tracking-wider">
                        My <span className="text-rose-500">Wishlist</span>
                    </h1>
                    <span className="text-xs tracking-[0.2em] text-rose-200/60 uppercase">
                        {wishlistItems.length} {wishlistItems.length === 1 ? "Item" : "Items"}
                    </span>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="text-center py-24 flex flex-col items-center justify-center space-y-6">
                        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-serif text-xl text-rose-100">Your wishlist is empty</h2>
                            <p className="text-xs tracking-wider text-rose-200/50 max-w-sm mx-auto">
                                Save your favorite pieces and styles to explore them anytime.
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="px-8 py-3 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold"
                        >
                            Explore Collections
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => {
                            const prodId = item.productId;
                            const prodName = item.name || "Product";
                            const prodPrice = item.price || 0;
                            const prodImage = item.imageUrl;

                            return (
                                <div
                                    key={item.id || prodId}
                                    className="bg-[#090507] border border-rose-500/20 rounded-xl overflow-hidden group flex flex-col justify-between shadow-xl transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <div>
                                        <div className="relative aspect-[3/4] overflow-hidden bg-rose-950/20">
                                            <img
                                                src={prodImage}
                                                alt={prodName}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <button
                                                onClick={() => removeFromWishlistHandler(prodId)}
                                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#040203]/80 border border-rose-500/30 flex items-center justify-center text-rose-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                                                title="Remove from wishlist"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <h3 className="font-serif text-sm font-bold text-white truncate">
                                                {prodName}
                                            </h3>
                                            <p className="text-rose-400 font-bold text-xs tracking-wider">
                                                ₹{prodPrice}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-4 pt-0">
                                        <Link
                                            to={`/product/${prodId}`}
                                            className="w-full py-2.5 rounded-lg border border-rose-500/40 text-rose-200 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 text-xs tracking-[0.15em] uppercase font-bold flex items-center justify-center text-center"
                                        >
                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default WishlistPage;