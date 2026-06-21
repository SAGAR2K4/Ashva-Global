import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PRODUCT_DATA = {
  shirtingFabrics: [
    { name: 'Oxford', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Classic durable oxford weave ideal for structured uniforms.' },
    { name: 'Filafil', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'End-on-end weave providing a subtle patterned depth for office attire.' },
    { name: 'Chambray', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Soft, lightweight canvas feel offering stylish uniformity.' },
    { name: 'Poplin', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Smooth, durable plain weave, highly reliable for regular workwear.' },
    { name: 'PC Stripe', subCategory: 'Micro Stripe & Checks', compositions: ['Poly Cotton (PC)'], description: 'Crisp micro stripe patterns engineered using poly-cotton blends.' },
    { name: 'PC Checks', subCategory: 'Micro Stripe & Checks', compositions: ['Poly Cotton (PC)'], description: 'Fine miniature checkered grids for versatile formal styling.' },
    { name: '100% Cotton Check & Stripe', subCategory: 'Micro Stripe & Checks', compositions: ['100% Cotton'], description: 'Premium fine checks and stripes in pure natural cotton threads.' },
    { name: 'White & Piece Dyed Dobby', subCategory: 'White Dobby', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Exquisite white-on-white textures and uniformly dyed dimensional dobby patterns.' },
    { name: 'PC Dobby', subCategory: 'Yarn Dyed Dobby', compositions: ['Poly Cotton (PC)'], description: 'Rich structural patterns woven with pre-dyed polyester-cotton yarn.' },
    { name: '100% Cotton Dobby', subCategory: 'Yarn Dyed Dobby', compositions: ['100% Cotton'], description: 'Luxurious geometric self-textures woven from pure cotton fibers.' },
    { name: 'Classic Plain', subCategory: 'Plain', compositions: ['100% Cotton', 'Poly Cotton (PC)', 'Poly Viscose', '100% Polyester'], description: 'Solid foundational shirting fabrics with reliable drapes.' },
    { name: 'Fashion Print', subCategory: 'Print', compositions: ['100% Cotton', 'Poly Cotton (PC)', 'Poly Viscose', '100% Polyester'], description: 'Vibrant, high-definition prints applied over comfortable base textiles.' },
    { name: 'Jacquard', subCategory: 'Jacquard', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Complex, intricate patterns woven directly into the fabric matrix.' },
    { name: 'Embroidery', subCategory: 'Embroidery', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Decoratively embroidered surfaces giving custom elevated appeal.' },
    { name: 'Linen Look', subCategory: 'Fancy', compositions: ['Cotton Linen', '100% Linen'], description: 'Relaxed horizontal slub effects replicating authentic linen properties.' },
    { name: 'Jordan', subCategory: 'Fancy', compositions: ['100% Cotton', 'CVC'], description: 'High-end specialty texture offering contemporary retail styling.' },
    { name: 'Rich Cotton', subCategory: 'Fancy', compositions: ['100% Cotton', 'CVC'], description: 'Heavy cotton luxury feel optimized for premium structure.' },
    { name: 'Rich Linen Look', subCategory: 'Fancy', compositions: ['Cotton Linen'], description: 'Dense, premium weave offering the structural elegance of high-end linen.' },
    { name: 'Cationic Premium', subCategory: 'Cationic', compositions: ['Poly Cotton (PC)', '100% Polyester'], description: 'Striking two-tone heathered color effect using specialized dye fibers.' }
  ],
  suitingFabrics: [
    { name: 'Classic Polyester Suiting', subCategory: 'Suiting', compositions: ['100% Polyester'], description: 'High durability, wrinkle-resistant suiting material optimized for daily uso.' },
    { name: 'Pure Cotton Suiting', subCategory: 'Suiting', compositions: ['100% Cotton'], description: 'Breathable, heavyweight pure cotton fabric engineered for structural trousers.' },
    { name: 'Poly Viscose Suiting', subCategory: 'Suiting', compositions: ['Poly Viscose'], description: 'Professional tier corporate material with excellent fluid drape.' },
    { name: 'Premium Wool Blend', subCategory: 'Suiting', compositions: ['Wool'], description: 'Luxury thermal insulation combined with executive structural aesthetics.' },
    { name: 'Stretch Lycra Suiting', subCategory: 'Suiting', compositions: ['Lycra'], description: 'Flexible mechanical stretch suiting engineered for active modern mobility.' }
  ]
};

const CATEGORIES = [
  { id: 'all', name: 'All Fabrics', icon: '🎯' },
  { id: 'shirtingFabrics', name: 'Shirting', icon: '👔' },
  { id: 'suitingFabrics', name: 'Suiting', icon: '🤵' },
];

const COMPOSITIONS = [
  "All", "100% Cotton", "Poly Cotton (PC)", "100% Polyester", "CVC", 
  "Viscose", "Poly Viscose", "Cotton Linen", "100% Linen", "Wool", "Lycra"
];

const ScrollAnimatedCard = ({ children, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: (index % 4) * 0.04 } },
        hidden: { opacity: 0, y: 30 }
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComposition, setSelectedComposition] = useState('All');

  const filteredProducts = useMemo(() => {
    let baseProducts = [];
    if (selectedCategory === 'all') {
      baseProducts = Object.entries(PRODUCT_DATA).flatMap(([catId, items]) =>
        items.map(item => ({ ...item, categoryId: catId }))
      );
    } else {
      baseProducts = PRODUCT_DATA[selectedCategory].map(item => ({ ...item, categoryId: selectedCategory }));
    }
    if (selectedComposition !== 'All') {
      return baseProducts.filter(product => product.compositions.includes(selectedComposition));
    }
    return baseProducts;
  }, [selectedCategory, selectedComposition]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* HEADER SECTION */}
      <div className="relative text-center pt-25 pb-20 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-50 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-2 px-6"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-light tracking-[0.08em] text-white">
            Premium Fabric <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Catalog</span>
          </h1>
          <div className="w-12 h-px bg-amber-500/30 mx-auto my-2" />
          <p className="text-xs text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Explore high-quality industrial, uniform, and corporate shirting & suiting configurations.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-20">
        
        {/* CONTROL FILTER BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-900/40 border border-slate-900 rounded-2xl shadow-2xl p-5 mb-10 backdrop-blur-md"
        >
          {/* Categories */}
          <div className="mb-5 pb-5 border-b border-slate-900">
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2.5">Select Product Department</div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedComposition('All');
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 transform active:scale-95 ${
                    selectedCategory === cat.id
                      ? 'bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/10'
                      : 'text-slate-300 bg-slate-950 border border-slate-900 hover:border-amber-500/20'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compositions */}
          <div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2.5">Filter by Blend/Composition</div>
            <div className="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {COMPOSITIONS.map((comp) => (
                <button
                  key={comp}
                  onClick={() => setSelectedComposition(comp)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap border transition-all duration-300 ${
                    selectedComposition === comp
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 border-slate-900 hover:text-slate-200 hover:border-slate-800'
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Counter Meter */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-serif font-light text-white tracking-wide flex items-center gap-3">
            {CATEGORIES.find(c => c.id === selectedCategory)?.name}
            {selectedComposition !== 'All' && <span className="text-slate-500 font-sans font-normal text-xs">({selectedComposition})</span>}
            <span className="text-[10px] font-sans font-medium text-amber-400 bg-amber-500/5 px-2.5 py-0.5 rounded-full border border-amber-500/10 tracking-wider">
              {filteredProducts.length} Options
            </span>
          </h2>
        </div>

        {/* RECONFIGURED MINIMAL COMPACT CARD GRID (IMAGE, NAME, COMPOSITIONS) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ScrollAnimatedCard key={`${product.categoryId}-${product.name}`} index={index}>
                <motion.div
                  layout
                  className="group bg-slate-900/30 border border-slate-900 rounded-xl overflow-hidden shadow-lg hover:border-amber-500/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-0.5"
                >
                  {/* ELEMENT 1: PRODUCT IMAGE FRAME CONTAINER */}
                  <div className="h-44 w-full bg-slate-950 relative flex items-center justify-center overflow-hidden border-b border-slate-900/60">
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 z-10" />
                    
                    {/* Architectural Grid Micro-weave representing premium textile threads */}
                    <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b_1px,transparent_1px)] bg-size-[10px_10px] transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* Visual Badge mapping matching category markers */}
                    <span className="absolute top-3 left-3 z-20 text-[9px] font-semibold text-amber-400 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      {product.subCategory}
                    </span>

                    {/* Minimal Center Icon Matrix */}
                    <div className="text-slate-800 text-5xl select-none opacity-40 transform group-hover:scale-110 group-hover:opacity-50 transition-all duration-500 z-0">
                      {product.categoryId === 'shirtingFabrics' ? '👔' : '🤵'}
                    </div>
                  </div>

                  {/* INFO PANEL BOX */}
                  <div className="p-4 flex flex-col justify-between grow space-y-3 bg-slate-900/10">
                    
                    {/* ELEMENT 2: PRODUCT TITLE */}
                    <div>
                      <h3 className="font-serif font-light text-white text-base tracking-wide group-hover:text-amber-400 transition-colors duration-300 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    {/* ELEMENT 3: AVAILABLE COMPOSITIONS */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] font-medium text-slate-500 uppercase tracking-wider">Available In</div>
                      <div className="flex flex-wrap gap-1">
                        {product.compositions.map((comp) => (
                          <span 
                            key={comp} 
                            className={`text-[9px] px-2 py-0.5 rounded-md border transition-all duration-300 whitespace-nowrap ${
                              selectedComposition === comp 
                                ? 'bg-amber-500 text-slate-950 font-semibold border-amber-500' 
                                : 'bg-slate-950 text-slate-400 border-slate-900'
                            }`}
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </ScrollAnimatedCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback Empty Window */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/10 border border-slate-900 rounded-xl">
            <span className="text-3xl block mb-2 opacity-40">🧵</span>
            <h3 className="text-sm font-serif font-light text-white">No Fabric Configurations Matched</h3>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedComposition('All'); }}
              className="mt-4 text-[10px] uppercase tracking-wider bg-slate-900 border border-slate-800 text-amber-400 px-4 py-2 rounded-xl hover:border-amber-500/30 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;