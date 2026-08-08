import ImageSlider from "./ImageSlider";

function ProductListHeader({ slideProducts }) {
    const src =
        "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80";

    return (
        <div className="bg-[#040203] text-rose-50 border-b border-rose-500/20 h-[100dvh] snap-start snap-always flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto w-full relative z-10">

                <div className="max-w-xl text-center lg:text-left space-y-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-[0.25em] uppercase shadow-md">
                        BLOOMSHOP COLLECTION
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-rose-200 via-rose-400 to-pink-600 bg-clip-text text-transparent">Product</span> List
                    </h1>
                    <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mx-auto lg:mx-0 my-2 shadow-sm" />
                    <p className="text-rose-100/70 text-base leading-relaxed font-light">
                        Explore our curated selection of premium products designed for comfort, style, and performance. Quality craftsmanship meets modern design.
                    </p>
                </div>

                <div className="w-full lg:w-auto rounded-2xl overflow-hidden shadow-2xl border border-rose-500/30 bg-[#120308]">
                    <ImageSlider src={src} slideProducts={slideProducts} />
                </div>
            </div>
        </div>
    );
}

export default ProductListHeader;