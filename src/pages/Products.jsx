import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Refactored product data structurally aligning with your specifications
const PRODUCT_DATA = {
  shirtingFabrics: [
    // Uniform Sub-category
    { name: 'Oxford', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Classic durable oxford weave ideal for structured uniforms.' },
    { name: 'Filafil', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'End-on-end weave providing a subtle patterned depth for office attire.' },
    { name: 'Chambray', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Soft, lightweight canvas feel offering stylish uniformity.' },
    { name: 'Poplin', subCategory: 'Uniform', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Smooth, durable plain weave, highly reliable for regular workwear.' },
    
    // Micro Stripe & Checks
    { name: 'PC Stripe', subCategory: 'Micro Stripe & Checks', compositions: ['Poly Cotton (PC)'], description: 'Crisp micro stripe patterns engineered using poly-cotton blends.' },
    { name: 'PC Checks', subCategory: 'Micro Stripe & Checks', compositions: ['Poly Cotton (PC)'], description: 'Fine miniature checkered grids for versatile formal styling.' },
    { name: '100% Cotton Check & Stripe', subCategory: 'Micro Stripe & Checks', compositions: ['100% Cotton'], description: 'Premium fine checks and stripes in pure natural cotton threads.' },
    
    // White Dobby & Yarn Dyed Dobby
    { name: 'White & Piece Dyed Dobby', subCategory: 'White Dobby', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Exquisite white-on-white textures and uniformly dyed dimensional dobby patterns.' },
    { name: 'PC Dobby', subCategory: 'Yarn Dyed Dobby', compositions: ['Poly Cotton (PC)'], description: 'Rich structural patterns woven with pre-dyed polyester-cotton yarn.' },
    { name: '100% Cotton Dobby', subCategory: 'Yarn Dyed Dobby', compositions: ['100% Cotton'], description: 'Luxurious geometric self-textures woven from pure cotton fibers.' },
    
    // Plain & Print
    { name: 'Classic Plain', subCategory: 'Plain', compositions: ['100% Cotton', 'Poly Cotton (PC)', 'Poly Viscose', '100% Polyester'], description: 'Solid foundational shirting fabrics with reliable drapes.' },
    { name: 'Fashion Print', subCategory: 'Print', compositions: ['100% Cotton', 'Poly Cotton (PC)', 'Poly Viscose', '100% Polyester'], description: 'Vibrant, high-definition prints applied over comfortable base textiles.' },
    
    // Specialty Weaves
    { name: 'Jacquard', subCategory: 'Jacquard', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Complex, intricate patterns woven directly into the fabric matrix.' },
    { name: 'Embroidery', subCategory: 'Embroidery', compositions: ['Poly Cotton (PC)', '100% Cotton'], description: 'Decoratively embroidered surfaces giving custom elevated appeal.' },
    
    // Fancy Look
    { name: 'Linen Look', subCategory: 'Fancy', compositions: ['Cotton Linen', '100% Linen'], description: 'Relaxed horizontal slub effects replicating authentic linen properties.' },
    { name: 'Jordan', subCategory: 'Fancy', compositions: ['100% Cotton', 'CVC'], description: 'High-end specialty texture offering contemporary retail styling.' },
    { name: 'Rich Cotton', subCategory: 'Fancy', compositions: ['100% Cotton', 'CVC'], description: 'Heavy cotton luxury feel optimized for premium structure.' },
    { name: 'Rich Linen Look', subCategory: 'Fancy', compositions: ['Cotton Linen'], description: 'Dense, premium weave offering the structural elegance of high-end linen.' },
    
    // Cationic
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

// Global dynamic compositions gathered from your handwritten catalog lists
const COMPOSITIONS = [
  "All",
  "100% Cotton",
  "Poly Cotton (PC)",
  "100% Polyester",
  "CVC",
  "Viscose",
  "Poly Viscose",
  "Cotton Linen",
  "100% Linen",
  "Wool",
  "Lycra"
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComposition, setSelectedComposition] = useState('All');

  // Calculates matching filtered fabrics efficiently
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
      return baseProducts.filter(product => 
        product.compositions.includes(selectedComposition)
      );
    }
    
    return baseProducts;
  }, [selectedCategory, selectedComposition]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Decorative Top Banner */}
      <div className="bg-[#0A1F44] pt-16 pb-24 px-6 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2">Premium Fabric Catalog</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">Explore high-quality industrial, uniform, and corporate shirting & suiting configurations.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-20">
        
        {/* Core Control Center: Navigation & Composition Filters Together */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          
          {/* Main Category Bar */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Product Department</div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedComposition('All'); // Reset composition on department toggle
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-[#1E3A8A] text-white shadow-md'
                      : 'text-[#0A1F44] bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="whitespace-nowrap text-xs uppercase tracking-wide">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Fabric Composition Filter Row */}
          <div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Filter by Blend/Composition</div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {COMPOSITIONS.map((comp) => (
                <button
                  key={comp}
                  onClick={() => setSelectedComposition(comp)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap border transition-all ${
                    selectedComposition === comp
                      ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black text-[#0A1F44] uppercase tracking-wide flex items-center gap-3">
            {CATEGORIES.find(c => c.id === selectedCategory)?.name} 
            {selectedComposition !== 'All' && <span className="text-gray-400 font-normal normal-case">({selectedComposition})</span>}
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {filteredProducts.length} Blends Found
            </span>
          </h2>
        </div>

        {/* Product Component Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                layout
                key={`${product.categoryId}-${product.name}`}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Visual Header */}
                <div className="h-32 bg-linear-to-br from-[#1E3A8A] to-[#0A1F44] p-5 relative flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-white/60 bg-white/10 backdrop-blur-md px-2 py-1 rounded uppercase tracking-widest">
                      {product.subCategory}
                    </span>
                    <div className="text-white opacity-40 text-xl">
                      {product.categoryId === 'shirtingFabrics' ? '👔' : '🤵'}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight leading-tight group-hover:text-[#3B82F6] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex flex-col grow justify-between">
                  <div className="grow">
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    {/* Embedded Pill Badges tracking your handwritten mix metrics */}
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Available in:</div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.compositions.map((comp) => (
                        <span 
                          key={comp} 
                          className={`text-[10px] px-2 py-1 rounded-md font-medium border ${
                            selectedComposition === comp 
                              ? 'bg-blue-500 text-white border-blue-500' 
                              : 'bg-gray-50 text-gray-600 border-gray-100'
                          }`}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Footer */}
                    <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                      <button className="text-[#1E3A8A] text-[11px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                        Enquire Specifications 
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-5xl block mb-3 opacity-30">🧵</span>
            <h3 className="text-lg font-bold text-[#0A1F44]">No Fabric Configurations Matched</h3>
            <p className="text-gray-400 text-sm max-w-xs mx-auto mt-1">This specific blend isn't assigned to the {CATEGORIES.find(c => c.id === selectedCategory)?.name} category.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedComposition('All'); }}
              className="mt-5 text-xs bg-gray-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Reset Global Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;