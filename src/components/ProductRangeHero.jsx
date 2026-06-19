import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductRangeHero() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Decorative Subtle Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[12vw] font-black text-slate-200/40 uppercase tracking-widest pointer-events-none select-none z-0 whitespace-nowrap font-serif">
        Collections
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Component */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 mb-3">
            Curated Textile Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0A1F44] font-serif">
            Product <span className="font-sans font-semibold italic">Range</span>
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto mt-6"></div>
        </div>

        {/* 2. Main Luxury Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SEGMENT: SHIRTING LINK (Lg: Spans 3 columns) */}
          <div className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-right flex flex-col items-center lg:items-end justify-center h-full">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-2 block">
              01 / Premium Blends
            </span>
            <h3 className="text-2xl font-serif text-[#0A1F44] mb-4">
              Shirting Fabrics
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mb-6 lg:text-right">
              Explore Oxford, crisp micro stripes, structural white dobby, and intricate jacquards built for corporate durability.
            </p>
            <Link 
              to="/products?category=shirtingFabrics"
              className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1E3A8A] hover:text-amber-600 transition-colors duration-300"
            >
              <span>Explore Range</span>
              <span className="w-8 h-px bg-[#1E3A8A] group-hover:bg-amber-600 group-hover:w-12 transition-all duration-300"></span>
            </Link>
          </div>

          {/* CENTER SEGMENT: HIGH-FASHION VISUAL CORE (Lg: Spans 6 columns) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center relative px-4">
            
            {/* Artistic Geometric Abstract Backdrop frame */}
            <div className="absolute inset-0 bg-linear-to-tr from-[#0A1F44] to-[#1e293b] rounded-3xl rotate-2 scale-95 opacity-5 pointer-events-none"></div>
            <div className="absolute -bottom-6 w-[70%] h-12 bg-slate-900/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Premium Editorial Studio Model Image */}
            <div className="relative overflow-visible group">
              <img 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80" 
                alt="Executive Apparel Fabric Presentation"
                className="h-95 md:h-130 w-auto object-contain drop-shadow-[0_25px_40px_rgba(10,31,68,0.18)] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Subtle floating badge layout metric */}
              <div className="absolute bottom-16 -right-4 bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl p-4 rounded-xl hidden md:block">
                <span className="text-[9px] font-black text-amber-600 uppercase tracking-widest block mb-0.5">Crafted Fit</span>
                <span className="text-xs font-bold text-[#0A1F44]">100% Quality Certified</span>
              </div>
            </div>
          </div>

          {/* RIGHT SEGMENT: SUITING LINK (Lg: Spans 3 columns) */}
          <div className="lg:col-span-3 order-3 text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mb-2 block">
              02 / Structural Elite
            </span>
            <h3 className="text-2xl font-serif text-[#0A1F44] mb-4">
              Suiting Fabrics
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mb-6 lg:text-left">
              Engineered with premium Poly Viscose, executive stretch Lycra, and luxury weight wool matrices for tailored excellence.
            </p>
            <Link 
              to="/products?category=suitingFabrics"
              className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#1E3A8A] hover:text-amber-600 transition-colors duration-300"
            >
              <span>Explore Range</span>
              <span className="w-8 h-px bg-[#1E3A8A] group-hover:bg-amber-600 group-hover:w-12 transition-all duration-300"></span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}