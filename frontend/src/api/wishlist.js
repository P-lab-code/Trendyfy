import axios from "./axios";

export const addToWishlist = async (productId) => {
    const token = localStorage.getItem("authToken");

    return axios.post(
        `/api/v1/wishlist/${productId}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const removeWishlist = async (productId) => {
    const token = localStorage.getItem("authToken");

    return axios.delete(`/api/v1/wishlist/${productId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getWishlist = async () => {
    const token = localStorage.getItem("authToken");

    return axios.get("/api/v1/wishlist", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};