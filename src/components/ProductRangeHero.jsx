import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductRangeHero() {
  // Scroll configuration for dynamic trigger cycles
  const scrollSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 }
  };

  // Central Image Animation Variant (lifts upward gently)
  const centerImageVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Left Column Animation Variant (Slides rightward from off-screen left)
  const leftColumnVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
    }
  };

  // Right Column Animation Variant (Slides leftward from off-screen right)
  const rightColumnVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
    }
  };

  // Header Animation Variant
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative w-full bg-slate-950 py-24 px-6 md:px-12 overflow-hidden border-b border-slate-900">
      
      {/* ─── FULL BACKGROUND IMAGE LAYER ─── */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero_bg.png')" }} // You can swap this path with your preferred background texture
      />
      {/* Vignette overlay to soften background edges and keep text readable */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />

      {/* Background Ambient Glows to break dark monotony */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[12vw] font-black text-slate-900/10 uppercase tracking-widest pointer-events-none select-none z-0 whitespace-nowrap font-serif">
        Collections
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Component */}
        <motion.div 
          {...scrollSettings}
          variants={headerVariant}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-3">
            Curated Textile Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white font-serif">
            Product <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent filter brightness-110">Range</span>
          </h2>
          <div className="w-16 h-px bg-slate-800 mx-auto mt-6"></div>
        </motion.div>

        {/* 2. Main Luxury Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SEGMENT: SHIRTING LINK */}
          <motion.div 
            {...scrollSettings}
            variants={leftColumnVariant}
            className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-right flex flex-col items-center lg:items-end justify-center h-full"
          >
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-2 block">
              01 / Premium Blends
            </span>
            <h3 className="text-2xl font-serif text-white mb-4">
              Shirting Fabrics
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-6 lg:text-right">
              Explore Oxford, crisp micro stripes, structural white dobby, and intricate jacquards built for corporate durability.
            </p>
            <Link 
              to="/products?category=shirtingFabrics"
              className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-amber-400 hover:text-white transition-colors duration-300"
            >
              <span>Explore Range</span>
              <span className="w-8 h-px bg-amber-400 group-hover:bg-white group-hover:w-12 transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* CENTER SEGMENT: HIGH-FASHION VISUAL CORE */}
          <motion.div 
            {...scrollSettings}
            variants={centerImageVariant}
            className="lg:col-span-6 order-1 lg:order-2 flex justify-center relative px-4"
          >
            <div className="absolute -bottom-6 w-[70%] h-12 bg-black/40 rounded-full blur-2xl pointer-events-none"></div>

            {/* Premium Editorial Studio Model Image */}
            <div className="relative overflow-visible group">
              <img 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80" 
                alt="Ashva Global Executive Apparel Fabric Presentation"
                className="h-95 md:h-130 w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03] filter brightness-95 contrast-105"
              />
              
              {/* Floating badge layout metric */}
              <div className="absolute bottom-16 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 shadow-2xl p-4 rounded-xl hidden md:block transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[9px] font-black text-amber-400 uppercase tracking-widest block mb-0.5">Crafted Fit</span>
                <span className="text-xs font-bold text-white">100% Quality Certified</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SEGMENT: SUITING LINK */}
          <motion.div 
            {...scrollSettings}
            variants={rightColumnVariant}
            className="lg:col-span-3 order-3 text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full"
          >
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-2 block">
              02 / Structural Elite
            </span>
            <h3 className="text-2xl font-serif text-white mb-4">
              Suiting Fabrics
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs mb-6 lg:text-left">
              Engineered with premium Poly Viscose, executive stretch Lycra, and luxury weight wool matrices for tailored excellence.
            </p>
            <Link 
              to="/products?category=suitingFabrics"
              className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-amber-400 hover:text-white transition-colors duration-300"
            >
              <span>Explore Range</span>
              <span className="w-8 h-px bg-amber-400 group-hover:bg-white group-hover:w-12 transition-all duration-300"></span>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}