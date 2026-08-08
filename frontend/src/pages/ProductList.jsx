import ProductListHeader from "../components/Product/ProductListHeader";
import ProductGrid from "../components/Product/ProductGrid";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Example static categories with high-end images matching your database, updated for Home & Kitchen
const MAIN_CATEGORIES = [
    { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800" },
    { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800" },
    { id: 3, name: "Electronics", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" },
    { id: 4, name: "Beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800" },
    { id: 5, name: "Home & Kitchen", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
    { id: 6, name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800" },
];

function ProductList() {
    const [headerProducts, setHeaderProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    // Extract category and sub_category from URL parameters
    const category = searchParams.get("category");
    const subCategory = searchParams.get("sub_category");

    const onDataLoaded = useCallback((products) => {
        setHeaderProducts(products);
    }, []);

    // Handler when a user clicks a main category card
    const handleCategoryClick = (categoryName) => {
        setSearchParams({ category: categoryName });
    };

    // Handler to clear category and go back to main category selection view
    const handleResetView = () => {
        setSearchParams({});
    };

    return (
        <div className="w-full bg-[#040203] text-white min-h-screen">
            {/* Full-Screen Immersive Banner Frame with HD Model Backdrop */}
            <div className="w-full h-[60vh] md:h-screen relative overflow-hidden">
                {/* HD Model Image Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920"
                        alt="High Definition Fashion Model"
                        className="w-full h-full object-cover object-center opacity-45 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#040203]/50 via-transparent to-[#040203]"></div>
                </div>

                {/* Header Content Layer */}
                <div className="relative z-10 w-full h-full">
                    <ProductListHeader
                        slideProducts={headerProducts.length >= 5 ? headerProducts.slice(1, 5) : []}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* VIEW 1: No category selected -> Show all main Categories with bigger, more prominent banners */}
                {!category ? (
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
                            Explore Categories
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MAIN_CATEGORIES.map((cat) => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleCategoryClick(cat.name)}
                                    className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                                        <h3 className="text-2xl font-bold text-white tracking-wide">{cat.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* VIEW 2: Category selected -> Show subcategories/products flow */
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <button
                                onClick={handleResetView}
                                className="text-sm px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                ← Back to All Categories
                            </button>
                            <h2 className="text-2xl font-bold capitalize">
                                {category} {subCategory ? `/ ${subCategory}` : ""}
                            </h2>
                        </div>

                        {/* Pass category and subCategory down as props so ProductGrid can fetch filtered results */}
                        <ProductGrid
                            key={`${category}-${subCategory}`}
                            category={category}
                            subCategory={subCategory}
                            onDataLoaded={onDataLoaded}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList;