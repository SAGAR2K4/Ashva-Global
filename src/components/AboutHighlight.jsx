import { motion } from "framer-motion";

export default function AboutHighlight() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 bg-slate-950 overflow-hidden border-b border-slate-900">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: PREMIUM BRAND STORY */}
        <div className="space-y-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="flex items-center gap-3 group"
          >
            <span className="h-0.5 w-12 bg-amber-500 transition-all duration-500 group-hover:w-20" />
            <span className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase">
              Premium Shirting Collections
            </span>
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Weaving the Future <br />
            <span className="bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              of Textiles
            </span>
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
          >
           Discover our collection of premium shirting fabrics, meticulously engineered from high-grade cotton, linen, 
           and fine fibers for ultimate breathability, softness, and durability. Designed for global fashion houses and 
           custom tailors, our textiles merge exquisite weaves with strict quality standards to bring unmatched structural 
           elegance and functional luxury to every garment.
          </motion.p>

          {/* <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Available in a comprehensive range of custom weaves, rich colorways, and bespoke finishes, 
            Ashva Global provides the perfect tactile canvas for formal corporate wear, luxury casual collections, 
            and precision-cut designer apparel. Backed by rigorous quality control and custom bulk configuration solutions, 
            we enhance every single garment from thread to stitch.
          </motion.p> */}

          {/* Grid Layout Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-slate-900"
          >
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Premium Spun Yarns</h4>
              <p className="text-xs text-slate-400 leading-relaxed">High-grade fibers optimized for unrivaled softness, breathability, and natural skin comfort.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Color Retention</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Advanced finishing technologies ensuring ultimate wash durability and rich saturation stability.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Versatile Utility</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Flawlessly suited for luxury bespoke suiting, formal wear, uniforms, or high-street casual lines.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Bespoke Scalability</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Fully flexible, tailorable pattern parameters and dedicated priority fulfillment logistics for bulk orders.</p>
            </div>
          </motion.div>

          {/* 5. Core Metric Highlights Layout */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-900"
          >
            <div className="group cursor-default">
              <h3 className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors duration-300">
                100%
              </h3>
              <p className="text-xs uppercase tracking-wider text-amber-400 mt-1 font-semibold">
                Premium Pure Yarn
              </p>
            </div>
            <div className="group cursor-default">
              <h3 className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors duration-300">
                Global
              </h3>
              <p className="text-xs uppercase tracking-wider text-amber-400 mt-1 font-semibold">
                Export Network
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: STRUCTURAL DUAL-IMAGE CANVAS */}
        <div className="relative w-full min-h-125 md:min-h-150 flex items-center justify-center">
          
          {/* Decorative Backing Frame Layer */}
          <div className="absolute inset-0 border border-slate-900/40 rounded-3xl pointer-events-none scale-95 transform rotate-2" />

          {/* IMAGE 1: Top-Right Background Card (Using curated layout image) */}
          <div className="absolute top-0 right-4 w-4/5 aspect-4/3 group overflow-hidden rounded-2xl bg-slate-900 p-2 border border-slate-800/80 shadow-2xl transition-all duration-500 hover:border-amber-500/10 z-10">
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-950">
              <img 
                src="/hero_bg.png" 
                alt="Ashva Global Curated Heritage Fabrics" 
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 filter brightness-90"
              />
            </div>
          </div>

          {/* IMAGE 2: Bottom-Left Foreground Overlapping Card (Using flowing texture image) */}
          <div className="absolute bottom-0 left-4 w-[70%] aspect-4/3 group overflow-hidden rounded-2xl bg-slate-900 p-2 border border-slate-800 shadow-2xl transition-all duration-500 hover:border-amber-500/30 hover:shadow-amber-500/5 z-20 transform translate-y-4 lg:translate-y-0">
            <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-950">
              <img 
                src="/about_highlight.png" 
                alt="Ashva Global Flowing Textile Macro Details" 
                className="w-full h-full object-cover opacity-95 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-amber-500/0 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Micro Floating Info Label Tag */}
            <div className="absolute -bottom-2 -left-2 bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800 shadow-xl flex items-center gap-2 transform group-hover:translate-x-1 transition-transform duration-500">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-200">
                Loom Precision
              </span>
            </div>
          </div>
        </div>
      </div>
       {/* Visible Elegant bottom gold accent divider line */}
      <div className="absolute bottom-0 left-0 w-full h-px mt-50 bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  );
}