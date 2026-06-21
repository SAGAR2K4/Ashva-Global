import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const scrollSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.15 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-slate-950 text-slate-300 overflow-hidden font-sans">
      
      {/* ─── 1. MINIMAL STRIKING HERO ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 border-b border-slate-900">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-bold tracking-[0.4em] text-amber-400 uppercase block">
              The Heritage Premium
            </span>
            <h1 className="text-4xl sm:text-7xl font-serif font-light tracking-tight text-white leading-none">
              Engineering <br />
              Tactile <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-100 to-amber-500 bg-clip-text text-transparent">Distinction.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-xs text-slate-400 leading-relaxed border-l border-amber-500/30 pl-4">
              Ashva Global bridges structural material authority with modern weave customization, supplying global couture houses with certified textile perfection.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. THE EDITORIAL SPLIT SCREEN (WHO WE ARE) ─── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-slate-900">
        
        {/* Left Side: Massive Immersive Image Window */}
        <div className="relative min-h-100 lg:min-h-162.5 bg-slate-900 overflow-hidden group">
          <img
            src="/about-fabric-1.jpeg"
            alt="Ashva Global Textile Presentation"
            className="absolute inset-0 w-full h-full object-cover opacity-80 filter brightness-90 contrast-105 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60 lg:opacity-30" />
          
          <div className="absolute bottom-8 left-8 z-10">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
              Mill Registry No. 0492-A
            </span>
          </div>
        </div>

        {/* Right Side: Luxury Institutional Narrative Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-8 bg-slate-950">
          <motion.div {...scrollSettings} variants={fadeInUp} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">01 / Operational Core</span>
            <h2 className="text-3xl font-serif text-white tracking-tight">Who We Are</h2>
            <div className="w-12 h-px bg-slate-800" />
          </motion.div>

          <motion.div {...scrollSettings} variants={fadeInUp} className="space-y-6 text-sm text-slate-400 leading-relaxed font-light">
            <p className="text-slate-200 font-normal text-base">
              We operate exclusively at the intersection of raw material authority and exquisite thread customization. 
            </p>
            <p>
              As elite mill manufacturers, Ashva Global designs and exports premium shirting, custom institutional matrices, and signature suiting fabrics across a highly dynamic international grid.
            </p>
            <p>
              Every loop and bundle is governed by certified quality specialists. We establish the permanent tactile foundation that grants brands their physical competitive edge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. THE CHARTER SEGMENT (STAGGERED BLOCK DESIGN) ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Strategic Roadmap</span>
            <h2 className="text-2xl font-serif text-white tracking-tight">Our Charter</h2>
            <p className="text-xs text-slate-500 leading-relaxed">The architectural framework that ensures consistency across every meter generated.</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              {...scrollSettings} variants={fadeInUp}
              className="p-8 bg-slate-900/60 rounded-xl border border-slate-900 hover:border-amber-500/20 transition-colors duration-500 space-y-3"
            >
              <div className="text-xs font-mono text-amber-400 font-bold">// 01 . VISION</div>
              <h3 className="text-base text-white font-medium">Ecological Leadership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">To remain the global vanguard in high-end textile industrial design, advancing modern standards of performance weave scalability.</p>
            </motion.div>

            <motion.div 
              {...scrollSettings} variants={fadeInUp}
              className="p-8 bg-slate-900/60 rounded-xl border border-slate-900 hover:border-amber-500/20 transition-colors duration-500 space-y-3 sm:translate-y-6"
            >
              <div className="text-xs font-mono text-amber-400 font-bold">// 02 . MISSION</div>
              <h3 className="text-base text-white font-medium">Uncompromised Standard</h3>
              <p className="text-xs text-slate-400 leading-relaxed">To arm international retailers and bespoke tailoring entities with verified material constants, securing corporate trust loop by loop.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 4. ENTERPRISE PERFORMANCE GRID (REPLACES CLIENT MAP) ─── */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-900">
        <motion.div {...scrollSettings} variants={fadeInUp} className="mb-16 text-center lg:text-left">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Operational Parameters</span>
          <h2 className="text-3xl font-serif text-white tracking-tight mt-2">Scale & Performance</h2>
        </motion.div>

        <motion.div 
          {...scrollSettings} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { num: "10+", title: "Years Experience", desc: "A decade of deep industrial weaver refinement." },
            { num: "100+", title: "Enterprise Clients", desc: "Trusted by world-class fashion labels and mills." },
            { num: "50+", title: "Fabric Variations", desc: "From engineered oxford weaves to pure crisp linen lines." },
            { num: "24/7", title: "Logistic Sync", desc: "Automated distribution channels across key shipping points." }
          ].map((stat, i) => (
            <motion.div 
              key={i} variants={fadeInUp}
              className="p-8 bg-slate-900/30 rounded-xl border border-slate-900/80 hover:bg-slate-900/60 transition-colors duration-300 space-y-2 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-black bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{stat.num}</h3>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">{stat.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── 5. WHY CHOOSE US (ASYNCHRONOUS ROW PILLARS) ─── */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">The Competitive Edge</span>
          <h2 className="text-3xl font-serif text-white tracking-tight">The Pillars of Advantage</h2>
        </div>

        <motion.div {...scrollSettings} variants={staggerContainer} className="space-y-4">
          {[
            { tag: "01", label: "Certified Mill Quality", detail: "Rigorous thread tension matrices and strict weave inspections guarantee absolute anti-shrink performance." },
            { tag: "02", label: "Custom Bulk Scalability", desc: "Flexible production loops customized to offer maximum market margin performance for commercial fashion lines." },
            { tag: "03", label: "Western Compliance Profiles", desc: "Flawless manufacturing practices perfectly matched with high-street import and export criteria." }
          ].map((pillar, i) => (
            <motion.div 
              key={i} variants={fadeInUp}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10 p-6 rounded-xl bg-slate-900/20 border border-slate-900 hover:border-slate-800 transition-colors duration-300"
            >
              <span className="text-xs font-mono font-bold text-amber-400/60 bg-slate-900 px-3 py-1 rounded">{pillar.tag}</span>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{pillar.label}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.detail || pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}