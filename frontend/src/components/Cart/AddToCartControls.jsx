import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

function AddToCartControls({ id }) {

    const { cartItems, addCartItem, updateCartItemQuantity, removeCartItem } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const existingCartItem = cartItems.find(item => item.product.id === id);

    const [quantity, setQuantity] = useState(existingCartItem?.quantity || 0);

    useEffect(() => {
        if (existingCartItem) {
            setQuantity(existingCartItem.quantity);
        } else {
            setQuantity(0);
        }
    }, [existingCartItem]);

    const handleAddToCart = () => {

        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        addCartItem(id);
        setQuantity(1);
    };

    const decreaseQty = () => {

        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        if (!existingCartItem) return;

        if (quantity <= 1) {
            removeCartItem(existingCartItem.id);
            setQuantity(0);
            return;
        }

        updateCartItemQuantity(existingCartItem.id, quantity - 1);
        setQuantity(prev => prev - 1);
    };

    const increaseQty = () => {

        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        if (existingCartItem) {
            updateCartItemQuantity(existingCartItem.id, quantity + 1);
        } else {
            addCartItem(id);
        }

        setQuantity(prev => prev + 1);
    };

    return (
        <div className="h-10 flex justify-center items-center gap-1">
            {quantity > 0 ? (
                <div className="flex items-center">
                    <button
                        className="h-10 w-10 text-red-500 rounded-l hover:text-red-400 font-bold text-lg"
                        onClick={decreaseQty}
                    >
                        −
                    </button>

                    <span className="h-10 w-10 flex items-center justify-center">
                        {quantity}
                    </span>

                    <button
                        className="h-10 w-10 text-blue-500 rounded-r hover:text-blue-400 font-bold text-lg"
                        onClick={increaseQty}
                    >
                        +
                    </button>
                </div>
            ) : (
                <button
                    className="h-10 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export default AddToCartControls;