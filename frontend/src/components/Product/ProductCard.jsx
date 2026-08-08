import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddToCartControls from "../Cart/AddToCartControls";
import { addToWishlist } from "../../api/wishlist";

function ProductCard({ id, img, description, name, price }) {

    const navigate = useNavigate();

    const [wishlisted, setWishlisted] = useState(false);

    const src =
        "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80";

    const handleWishlist = async (e) => {

        e.preventDefault();

        const token = localStorage.getItem("authToken");

        if (!token) {
            navigate("/login");
            return;
        }

        try {

            await addToWishlist(id);

            setWishlisted(true);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition duration-300 flex flex-col">

            <Link to={`/product/${id}`} className="block w-full flex-1">

                <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        className="absolute top-3 right-3 z-20 bg-white/95 backdrop-blur-sm rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={wishlisted ? "#BE185D" : "none"}
                            stroke={wishlisted ? "#BE185D" : "#6B7280"}
                            strokeWidth="2"
                            className="w-6 h-6 transition-all duration-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                        </svg>
                    </button>

                    <img
                        src={img || src}
                        alt={name}
                        className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />

                </div>

            </Link>

            <div className="p-4 sm:p-6 flex flex-col flex-1">

                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ${price}
                </p>

                <h2 className="text-lg font-bold text-gray-800 dark:text-white mt-1">
                    {name}
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {description}
                </p>

                <div className="mt-6">
                    <AddToCartControls id={id} />
                </div>

            </div>

        </div>
    );
}

export default ProductCard;