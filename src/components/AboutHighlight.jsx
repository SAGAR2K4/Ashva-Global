import { motion } from "framer-motion";

export default function AboutHighlight() {
  // Animation configuration for text blocks
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 bg-slate-950 overflow-hidden border-b border-slate-900">
      
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: BRAND STORY & CORE VALUES (Animated on Scroll) */}
        <div className="space-y-8">
          
          {/* 1. Animated Accent Line Badge */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="flex items-center gap-3 group"
          >
            <span className="h-0.5 w-12 bg-amber-500 transition-all duration-500 group-hover:w-20" />
            <span className="text-xs font-bold tracking-[0.3em] text-amber-500 uppercase">
              Our Legacy & Craft
            </span>
          </motion.div>

          {/* 2. Premium Weighted Heading */}
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight"
          >
            Weaving the Future of <br />
            <span className="bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              Global Textiles
            </span>
          </motion.h2>

          {/* 3. Narrative Paragraph 1 */}
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-slate-300 text-base md:text-lg leading-relaxed font-normal"
          >
            At ASHVA GLOBAL, texturing luxury isn't just a manufacturing process—it's an art form. 
            We engineer high-fidelity, premium fabrics meticulously designed to fulfill the shifting 
            demands of global fashion houses, luxury upholstery environments, and high-performance industrial standards.
          </motion.p>

          {/* 4. Narrative Paragraph 2 */}
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariant}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            By merging state-of-the-art weaving technologies with heritage craftsmanship, we guarantee every 
            spool and yard leaving our facilities boasts unprecedented structural durability, vibrant depth, and exceptional comfort.
          </motion.p>

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
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                Premium Pure Yarn
              </p>
            </div>
            <div className="group cursor-default">
              <h3 className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors duration-300">
                Global
              </h3>
              <p className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                Export Network
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE VISUAL CANVAS */}
        <div className="relative flex justify-center items-center lg:justify-end">
          <div className="absolute -inset-4 border border-slate-900/60 rounded-2xl pointer-events-none scale-95 transform -rotate-1" />
          
          <div className="relative group overflow-hidden rounded-2xl bg-slate-900 p-3 border border-slate-800/80 shadow-2xl max-w-lg transition-all duration-500 hover:border-amber-500/20 hover:shadow-amber-500/5">
            <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-slate-950">
              <img 
                src="/about_highlight.png" 
                alt="Ashva Global Luxury Flowing Fabric" 
                className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-amber-500/0 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <div className="absolute -bottom-3 -left-3 bg-slate-900/90 backdrop-blur-md px-5 py-3 rounded-xl border border-slate-800 shadow-xl flex items-center gap-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-200">
                Loom Precision Engineered
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}