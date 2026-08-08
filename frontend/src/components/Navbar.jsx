import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CartPopup from "./Cart/CartPopup";

function Navbar() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    // Check role from localStorage
    const role = localStorage.getItem("role");

    // Scroll state management for auto-hide
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            const currentScrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                e.target.scrollTop ||
                0;

            if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
                setShowNavbar(false);
            } else if (currentScrollTop < lastScrollTop) {
                setShowNavbar(true);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", handleScroll, { capture: true });
        };
    }, [lastScrollTop]);

    const handleLogout = () => {
        logout();
        localStorage.removeItem("authToken");
        localStorage.removeItem("role");
        localStorage.removeItem("cart");
        navigate("/");
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Dropdown state tracker for hover/click navigation
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpenSection, setMobileOpenSection] = useState(null);

    const handleCartClick = () => {
        if (!isAuthenticated) {
            navigate("/login");
        } else {
            setIsCartOpen(true);
        }
    };

    // Matched exact keys and subcategories with the backend API parameters (sub_category)
    const categoriesData = {
        Women: {
            Clothing: ["Tops", "Jeans", "Dresses", "Kurtis", "Sarees"],
            Footwear: ["Shoes", "Footwear"],
            Accessories: ["Watches", "Jewellery", "Bags"],
            Beauty: ["Lipstick", "Face Wash", "Skin Care", "Perfume"]
        },
        Men: {
            Clothing: ["T-Shirts", "Jeans", "Hoodies", "Shirts"],
            Footwear: ["Shoes"],
            Accessories: ["Watches", "Accessories"]
        },
        "Home & Kitchen": {
            Furniture: ["Furniture"],
            Kitchen: ["Kitchen", "Kitchen Appliances"],
            Appliances: ["Appliances"],
            Cleaning: ["Cleaning"],
            "Home Decor": ["Home Decor"],
            Lighting: ["Lighting"],
            Bedroom: ["Bedroom"],
            Storage: ["Storage"]
        }
    };

    const cartSvg = (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17a2 2 0 100 4 2 2 0 000-4zM9 19a2 2 0 11-4 0 2 2 0 014 0z"
            />
        </svg>
    );

    const heartSvg = (
        <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
            2 5.42 4.42 3 7.5 3
            c1.74 0 3.41.81 4.5 2.09
            C13.09 3.81 14.76 3 16.5 3
            19.58 3 22 5.42 22 8.5
            c0 3.78-3.4 6.86-8.55 11.54
            L12 21.35z"/>
        </svg>
    );

    const hamburgerSvg = (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );

    const closeSvg = (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            } bg-[#040203]/95 backdrop-blur-xl border-b border-rose-500/25 w-full shadow-2xl`}
        >
            {isCartOpen && (<CartPopup onClose={() => setIsCartOpen(false)} closeSvg={closeSvg}/>)}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-5">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                    <span className="text-rose-500 text-xl animate-spin duration-1000">❖</span>
                    <span className="font-serif text-2xl font-extrabold tracking-wider text-white">
                        TRENDY<span className="text-rose-500">FY</span>
                    </span>
                </Link>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Search */}
                    <div className="mt-1 md:mt-0">
                        <SearchBar />
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-[0.2em] uppercase text-rose-200/70">
                        <Link
                            to="/"
                            onClick={() => setSelectedCategory("")}
                            className="hover:text-rose-400 transition-colors"
                        >
                            Home
                        </Link>

                        {/* Dynamic Mega Dropdowns mapped with category and sub_category query parameters */}
                        {Object.keys(categoriesData).map((section) => (
                            <div
                                key={section}
                                className="relative py-2"
                                onMouseEnter={() => setActiveDropdown(section)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={`/products?category=${encodeURIComponent(section)}`}
                                    className="hover:text-rose-400 transition-colors flex items-center gap-1 focus:outline-none"
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    {section}
                                    <span className="text-[10px]">▼</span>
                                </Link>

                                {activeDropdown === section && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#090507] border border-rose-500/30 shadow-2xl p-6 grid grid-flow-col gap-8 auto-cols-max rounded-xl z-50 min-w-[max-content]">
                                        {Object.entries(categoriesData[section]).map(([groupName, items]) => (
                                            <div key={groupName} className="flex flex-col gap-2.5">
                                                <span className="text-rose-400 font-bold border-b border-rose-500/20 pb-1 text-[11px] tracking-wider">
                                                    {groupName}
                                                </span>
                                                {items.map((subItem) => (
                                                    <Link
                                                        key={subItem}
                                                        to={`/products?category=${encodeURIComponent(section)}&sub_category=${encodeURIComponent(subItem)}`}
                                                        className="text-rose-200/60 hover:text-white text-[11px] tracking-wider transition-colors whitespace-nowrap"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link to="/products" className="hover:text-rose-400 transition-colors">
                            Products
                        </Link>
                        <Link to="/image-search" className="hover:text-rose-400 transition-colors">
                            Image Search
                        </Link>

                        {/* Admin Dashboard Link */}
                        {role === "ADMIN" && (
                            <Link to="/admin/dashboard" className="text-rose-400 hover:text-rose-300 font-bold transition-colors">
                                Dashboard
                            </Link>
                        )}

                        {isAuthenticated && (
                            <Link
                                to="/wishlist"
                                className="w-6 h-6 text-rose-200/70 hover:text-pink-500 transition-colors flex items-center justify-center"
                            >
                                {heartSvg}
                            </Link>
                        )}
                        <button
                            onClick={handleCartClick}
                            className="w-6 h-6 text-rose-200/70 hover:text-rose-400 transition-colors flex items-center justify-center"
                        >
                            {cartSvg}
                        </button>
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-full border border-rose-500 text-rose-400 hover:bg-rose-500 hover:text-white transition-all duration-300"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            className="text-rose-200 hover:text-rose-400 transition-colors"
                        >
                            {isMobileMenuOpen ? closeSvg : hamburgerSvg}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-4/5 sm:w-2/3 bg-[#040203] border-l border-rose-500/20 shadow-2xl p-6 z-40 md:hidden flex flex-col justify-between overflow-y-auto">
                    <div className="flex flex-col space-y-6">
                        <div className="flex justify-between items-center border-b border-rose-500/10 pb-4">
                            <span className="font-serif font-bold text-lg text-white">Menu</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-rose-200 hover:text-rose-400 transition-colors"
                            >
                                {closeSvg}
                            </button>
                        </div>
                        <Link
                            to="/"
                            onClick={() => {
                                setSelectedCategory("");
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 hover:text-rose-400 transition-colors"
                        >
                            Home
                        </Link>

                        {/* Mobile Accordion Dropdowns */}
                        {Object.keys(categoriesData).map((section) => (
                            <div key={section} className="flex flex-col space-y-3">
                                <div className="flex justify-between items-center w-full">
                                    <Link
                                        to={`/products?category=${encodeURIComponent(section)}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 hover:text-rose-400 transition-colors"
                                    >
                                        {section}
                                    </Link>
                                    <button
                                        onClick={() => setMobileOpenSection(mobileOpenSection === section ? null : section)}
                                        className="text-xs font-bold text-rose-200/80 p-2"
                                    >
                                        <span>{mobileOpenSection === section ? "-" : "+"}</span>
                                    </button>
                                </div>
                                {mobileOpenSection === section && (
                                    <div className="pl-4 flex flex-col space-y-4 border-l border-rose-500/20 my-1">
                                        {Object.entries(categoriesData[section]).map(([groupName, items]) => (
                                            <div key={groupName} className="flex flex-col space-y-2">
                                                <span className="text-rose-400 font-bold text-[10px] tracking-wider uppercase">
                                                    {groupName}
                                                </span>
                                                {items.map((subItem) => (
                                                    <Link
                                                        key={subItem}
                                                        to={`/products?category=${encodeURIComponent(section)}&sub_category=${encodeURIComponent(subItem)}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-[11px] text-rose-200/60 hover:text-white uppercase tracking-wider"
                                                    >
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            to="/products"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 hover:text-rose-400 transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            to="/image-search"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 hover:text-rose-400 transition-colors"
                        >
                            Image Search
                        </Link>

                        {/* Mobile Admin Dashboard Link */}
                        {role === "ADMIN" && (
                            <Link
                                to="/admin/dashboard"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs font-bold tracking-[0.2em] uppercase text-rose-400 hover:text-rose-300 transition-colors"
                            >
                                Dashboard
                            </Link>
                        )}

                        {isAuthenticated && (
                            <Link
                                to="/wishlist"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 flex items-center space-x-3 hover:text-pink-500 transition-colors text-left"
                            >
                                {heartSvg}
                                <span>Wishlist</span>
                            </Link>
                        )}

                        {isAuthenticated ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 hover:text-red-500 transition-colors text-left"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 hover:text-rose-400 transition-colors"
                            >
                                Login
                            </Link>
                        )}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                handleCartClick();
                            }}
                            className="text-xs font-bold tracking-[0.2em] uppercase text-rose-200/80 flex items-center space-x-3 hover:text-rose-400 transition-colors text-left"
                        >
                            {cartSvg}
                            <span>Cart</span>
                        </button>
                    </div>

                    <div className="text-[10px] text-rose-100/40 tracking-widest uppercase border-t border-rose-500/10 pt-4 mt-6">
                        Trendyfy Haute Maison
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;