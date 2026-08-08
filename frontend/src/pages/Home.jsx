import React from "react";

function Home() {
    return (
        <div className="bg-[#040203] text-rose-50 h-[100dvh] overflow-y-scroll scroll-smooth snap-y snap-mandatory selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative overflow-hidden h-[100dvh] snap-start snap-always flex items-center justify-center px-4 md:px-16 bg-gradient-to-b from-[#120308] via-[#040203] to-[#040203] border-b border-rose-500/20">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                    <div className="space-y-6 md:space-y-8 text-left animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold tracking-[0.3em] uppercase shadow-lg backdrop-blur-md">
                            <span>The Multi-Brand Luxury Conglomerate</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold tracking-tight leading-[1.08] text-white">
                            Redefining <br />
                            <span className="bg-gradient-to-r from-rose-200 via-rose-400 to-pink-600 bg-clip-text text-transparent">
                                Global Elegance
                            </span>
                        </h1>
                        <p className="text-base md:text-xl text-rose-100/70 max-w-xl font-light leading-relaxed">
                            Welcome to the crown sanctuary of Trendyfy. A multi-faceted maison housing world-class ateliers across ultra-luxury horology, bespoke haute couture, avant-garde streetwear, and artisan accessories.
                        </p>
                        <div className="flex flex-wrap gap-5 pt-2">
                            <a href="#maisons" className="px-9 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 font-bold text-white shadow-2xl shadow-rose-600/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300 tracking-wider text-sm">
                                Explore Our Brands
                            </a>
                            <a href="#bespoke" className="px-9 py-4 rounded-full bg-[#120308] hover:bg-rose-950/40 border border-rose-500/40 font-bold text-rose-200 hover:text-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 tracking-wider text-sm shadow-xl backdrop-blur-md">
                                Request Private Consultation
                            </a>
                        </div>
                    </div>

                    <div className="relative group hidden md:block">
                        <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-rose-600/30 to-pink-600/30 opacity-70 blur-3xl group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                        <div className="relative bg-[#120308] border border-rose-500/30 rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80"
                                alt="Trendyfy Flagship Portfolio"
                                className="w-full h-[540px] object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040203] via-[#040203]/40 to-transparent flex items-end p-8">
                                <div>
                                    <span className="text-xs font-bold text-rose-400 uppercase tracking-[0.3em]">Flagship Edition 2026</span>
                                    <h3 className="text-2xl font-serif font-bold text-white mt-1">The House of Grandeur</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Immersive Editorial Banner Showcase */}
            <section className="h-[100dvh] snap-start snap-always flex items-center justify-center px-4 md:px-16 max-w-7xl mx-auto">
                <div className="w-full relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-rose-500/30 bg-gradient-to-r from-[#120308] via-[#1a050c] to-[#120308] p-8 md:p-14 shadow-2xl group">
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                        <div className="space-y-5">
                            <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-extrabold animate-pulse">Editorial Spotlight</span>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                                The Autumn-Winter <br /> <span className="bg-gradient-to-r from-rose-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">Haute Collection</span>
                            </h3>
                            <p className="text-rose-100/70 text-sm md:text-base font-light leading-relaxed">
                                Unveiling limited-run pieces crafted meticulously by master artisans across our global ateliers in Paris, Milan, and Tokyo. Experience uncompromising elegance and timeless design.
                            </p>
                            <div className="pt-2">
                                <a href="#portfolio" className="inline-block px-8 py-3.5 rounded-full bg-rose-500/10 hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 text-rose-200 hover:text-white border border-rose-500/40 font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl hover:-translate-y-1">
                                    View Lookbook
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl group/img h-72 md:h-96">
                                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" alt="Lookbook 1" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040203]/80 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-xs font-serif font-bold text-white tracking-widest">Parisian Atelier</span>
                                </div>
                            </div>
                            <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 shadow-2xl group/img h-72 md:h-96 mt-6 md:mt-10">
                                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80" alt="Lookbook 2" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#040203]/80 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-xs font-serif font-bold text-white tracking-widest">Milan Runway</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Brand Portfolio Section */}
            <section id="maisons" className="h-[100dvh] snap-start snap-always flex flex-col justify-center px-4 md:px-16 max-w-7xl mx-auto py-12">
                <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-10">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-rose-400 font-extrabold animate-pulse">The House Portfolio</h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white">Our Distinctive Brand Houses</h3>
                    <p className="text-rose-100/60 text-sm md:text-base font-light max-w-xl mx-auto">
                        Discover the specialized pillars under the Trendyfy conglomerate, each representing an uncompromising dedication to distinct artistry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {[
                        {
                            code: "House I & II",
                            name: "Horology & Haute Couture",
                            subtitle: "Swiss Complications & Bespoke Runway",
                            desc: "Hand-assembled in Geneva alongside custom 18-kali lehengas, hand-woven Banarasi silks, and dramatic contemporary evening collections.",
                            img1: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
                            img2: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
                            tag: "Dual Ateliers"
                        },
                        {
                            code: "House III & IV",
                            name: "Footwear & Lifestyle Accents",
                            subtitle: "Italian Leather Stilettos & Executive Goods",
                            desc: "Exquisite Italian leather craftsmanship paired with full-grain Tuscan rose leather totes and handcrafted structural handbags.",
                            img1: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
                            img2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
                            tag: "Artisan Leathercraft"
                        }
                    ].map((brand, idx) => (
                        <div key={idx} className="bg-[#120308] border border-rose-500/20 rounded-[2.5rem] overflow-hidden hover:border-rose-500/60 hover:-translate-y-1 transition-all duration-500 flex flex-col group shadow-2xl p-6 md:p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden border border-rose-500/20">
                                    <img src={brand.img1} alt="House Preview 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden border border-rose-500/20">
                                    <img src={brand.img2} alt="House Preview 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-rose-400 font-bold">{brand.tag}</span>
                                    <span className="bg-[#040203] text-rose-300 font-bold text-[10px] px-3 py-1 rounded-full border border-rose-500/30 tracking-widest uppercase">
                                        {brand.code}
                                    </span>
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-white group-hover:text-rose-300 transition-colors">{brand.name}</h4>
                                <h5 className="text-xs font-medium text-rose-200/80">{brand.subtitle}</h5>
                                <p className="text-xs text-rose-100/60 font-light leading-relaxed">{brand.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Flagship Curations & Featured Showcase */}
            <section id="portfolio" className="h-[100dvh] snap-start snap-always flex flex-col justify-center px-4 md:px-16 bg-[#120308]/50 border-y border-rose-500/20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto w-full space-y-10 relative z-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-rose-400 font-extrabold animate-pulse">Exquisite Artifacts</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white">The Flagship Curations</h3>
                        <p className="text-sm text-rose-100/60 font-light">Hand-selected master artifacts showcased across dual executive previews.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                brand: "Maison RoseHorology & VelvetStride",
                                name: "The Geneva Chronograph & Stiletto Suite",
                                price: "$6,410.00",
                                desc: "Automatic 18k skeleton movement paired with Italian velvet sculpted footwear accented in matching rose gold plating.",
                                img1: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
                                img2: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                brand: "NovaGlow Lifestyle & Aura Couture",
                                name: "The Tuscan Grandé & Silk Ensemble",
                                price: "$4,230.00",
                                desc: "Full-grain supple calfskin executive handbag matched with hand-woven silk haute couture pieces.",
                                img1: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
                                img2: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#040203] border border-rose-500/20 rounded-[2.5rem] overflow-hidden hover:border-rose-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500 flex flex-col group p-6 md:p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-rose-500/20">
                                        <img src={item.img1} alt="Curation 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden border border-rose-500/20">
                                        <img src={item.img2} alt="Curation 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="flex flex-col flex-grow space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-rose-400 font-bold uppercase tracking-widest">{item.brand}</span>
                                        <span className="bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xl">
                                            {item.price}
                                        </span>
                                    </div>
                                    <h4 className="font-serif font-bold text-2xl text-white group-hover:text-rose-300 transition-colors">{item.name}</h4>
                                    <p className="text-xs text-rose-100/60 font-light leading-relaxed">{item.desc}</p>
                                    <button className="w-full py-3.5 rounded-full bg-rose-500/10 hover:bg-gradient-to-r hover:from-rose-600 hover:to-pink-600 text-rose-200 hover:text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 border border-rose-500/30 shadow-lg">
                                        Acquire Suite
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Heritage & Global Presence Section */}
            <section id="heritage" className="h-[100dvh] snap-start snap-always flex items-center justify-center px-4 md:px-16 max-w-7xl mx-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="space-y-6">
                        <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-extrabold animate-pulse">The Conglomerate Legacy</span>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                            A Tradition of Unrivaled Sophistication
                        </h3>
                        <p className="text-sm md:text-base text-rose-100/70 font-light leading-relaxed">
                            Founded on principles of extreme aesthetic precision, Trendyfy operates as a premier ecosystem for luxury brands. From our headquarters in New York to our specialized design studios across Paris, Milan, and Tokyo, our Houses set the global standard.
                        </p>
                        <div className="grid grid-cols-3 gap-6 pt-2 border-t border-rose-500/20">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">4</h4>
                                <p className="text-[10px] text-rose-400 uppercase tracking-widest mt-1">Luxury Houses</p>
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">18+</h4>
                                <p className="text-[10px] text-rose-400 uppercase tracking-widest mt-1">Global Ateliers</p>
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-serif font-bold text-white">100%</h4>
                                <p className="text-[10px] text-rose-400 uppercase tracking-widest mt-1">Artisan Crafted</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 h-72 md:h-[420px] shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80" alt="Heritage 1" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040203] via-transparent to-transparent flex items-end p-6">
                                <span className="text-xs font-serif font-bold text-white tracking-widest uppercase">New York Flagship</span>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 h-72 md:h-[420px] mt-8 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" alt="Heritage 2" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040203] via-transparent to-transparent flex items-end p-6">
                                <span className="text-xs font-serif font-bold text-white tracking-widest uppercase">Paris Vendôme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bespoke Private Consultation Section */}
            <section id="bespoke" className="h-[100dvh] snap-start snap-always flex items-center justify-center px-4 md:px-16 bg-gradient-to-b from-[#040203] via-[#120308] to-[#040203] border-t border-rose-500/20 text-center">
                <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 w-full animate-fade-in">
                    <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-extrabold animate-pulse">Private Client Concierge</span>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white">Begin Your Bespoke Journey</h3>
                    <p className="text-rose-100/70 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                        Engage directly with our master stylists and curators across our brand houses. Whether commissioning custom haute couture or private horological viewings, our concierge is at your service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                        <input
                            type="email"
                            placeholder="Enter your personal email address"
                            className="bg-[#040203] border border-rose-500/40 rounded-full px-8 py-4 text-xs text-rose-100 focus:outline-none focus:border-rose-400 placeholder:text-rose-100/30 w-full sm:w-96 shadow-inner transition-all duration-300"
                        />
                        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs tracking-widest uppercase shadow-xl hover:scale-105 transition-all duration-300">
                            Request Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* Professional Footer */}
            <footer className="h-[100dvh] snap-start snap-always flex flex-col justify-between bg-[#040203] border-t border-rose-500/20 pt-16 pb-8 px-4 md:px-16 text-rose-100/70 text-sm">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-rose-500/20 my-auto">
                    <div className="space-y-4">
                        <h3 className="text-white font-serif font-bold text-2xl flex items-center gap-2.5">
                            <span className="text-rose-500 animate-pulse">❖</span> Trendyfy Maison
                        </h3>
                        <p className="text-xs text-rose-100/60 font-light leading-relaxed">
                            742 Fifth Avenue, Luxury Tower Suite 500<br />
                            New York, NY 10022
                        </p>
                        <p className="text-xs text-rose-100/60">+1 (800) 555-LUXE-VIP</p>
                        <p className="text-xs text-rose-100/60">concierge@trendyfy.com</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase">Our Brand Houses</h4>
                        <ul className="space-y-2 text-xs font-light">
                            {["Maison RoseHorology", "Aura Couture & Silks", "VelvetStride Footwear", "NovaGlow Lifestyle", "Private Haute Vault", "Global Ateliers"].map((item, i) => (
                                <li key={i}><a href="#maisons" className="hover:text-rose-400 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase">Client Privilege</h4>
                        <ul className="space-y-2 text-xs font-light">
                            {["Private Appointments", "Global Flagship Locations", "Heritage & Craftsmanship", "Collector FAQs", "Concierge Direct"].map((item, i) => (
                                <li key={i}><a href="#heritage" className="hover:text-rose-400 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase">The Rosé Gazette</h4>
                        <p className="text-xs text-rose-100/60 font-light leading-relaxed">Subscribe for private invitations to seasonal runway unveilings and limited vault drops.</p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-[#120308] border border-rose-500/30 rounded-full px-5 py-3 text-xs text-rose-100 focus:outline-none focus:border-rose-400 placeholder:text-rose-100/30 shadow-inner"
                            />
                            <button className="w-full py-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs tracking-widest uppercase transition-all shadow-xl shadow-rose-600/20 hover:scale-[1.02]">
                                Join Private List
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto w-full pt-2 flex flex-col sm:flex-row justify-between items-center text-xs text-rose-100/40 gap-4 font-light">
                    <p>Copyright © 2026 Trendyfy Global Conglomerate Corporation. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-rose-400 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-rose-400 cursor-pointer transition-colors">Terms of Luxury Service</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;