import { useState } from "react";
// Import Link from react-router-dom for seamless page redirection
import { Link } from "react-router-dom";

const MAIN_CATEGORY_PRODUCTS = [
  {
    id: "main-shirting-1",
    name: "Premium Uniform Fabrics",
    category: "shirtingFabrics",
    highlight: "Oxford, Filafil, Chambray & Poplin",
    mixes: ["Poly Cotton", "100% Cotton"],
    tag: "Corporate & Industrial",
    gradient: "from-blue-900 to-slate-900",
    slug: "/products?category=shirtingFabrics" // Target URL path for redirect
  },
  {
    id: "main-shirting-2",
    name: "Textured Dobby & Jacquards",
    category: "shirtingFabrics",
    highlight: "Yarn Dyed, White & Piece Dyed Weaves",
    mixes: ["Pure Cotton", "PC Blends"],
    tag: "Premium Executive",
    gradient: "from-indigo-950 to-blue-900",
    slug: "/products?category=shirtingFabrics"
  },
  {
    id: "main-shirting-3",
    name: "Micro Stripes & Classic Checks",
    category: "shirtingFabrics",
    highlight: "Crisp patterns for daily formal wear",
    mixes: ["100% Cotton", "PC Stripe"],
    tag: "Formal Essential",
    gradient: "from-slate-900 to-sky-950",
    slug: "/products?category=shirtingFabrics"
  },
  {
    id: "main-suiting-1",
    name: "Executive Suiting Fabrics",
    category: "suitingFabrics",
    highlight: "High-drape professional grade textiles",
    mixes: ["Poly Viscose", "Polyester"],
    tag: "Luxury Corporate",
    gradient: "from-[#0A1F44] to-[#1E3A8A]",
    slug: "/products?category=suitingFabrics"
  },
  {
    id: "main-suiting-2",
    name: "Premium Wool & Lycra Blends",
    category: "suitingFabrics",
    highlight: "Flexible mechanical stretch & fine insulation",
    mixes: ["Wool Blends", "Lycra Stretch"],
    tag: "Elite Collection",
    gradient: "from-neutral-900 to-blue-950",
    slug: "/products?category=suitingFabrics"
  }
];

const categories = ["all", "shirtingFabrics", "suitingFabrics"];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? MAIN_CATEGORY_PRODUCTS
      : MAIN_CATEGORY_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Catalog Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] tracking-tight mt-3 mb-4">
            Our Core Textile Fabrications
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Segment Filter Controller */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-2xl shadow-md border border-gray-100 flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1E3A8A] text-white shadow-sm"
                    : "text-gray-500 hover:text-[#1E3A8A] hover:bg-gray-50"
                }`}
              >
                {formatLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Category Showcases Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            /* Changed wrapper container to a Link element for whole-card click functionality */
            <Link 
              key={product.id}
              to={product.slug}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between overflow-hidden h-85 cursor-pointer"
            >
              {/* Card Header Texture */}
              <div className={`h-40 bg-linear-to-br ${product.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
                
                <div>
                  <span className="text-[9px] font-black tracking-widest text-white/70 bg-white/10 backdrop-blur-md px-2 py-1 rounded uppercase">
                    {product.tag}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-white/70 text-xs mt-1 font-medium line-clamp-1">
                    {product.highlight}
                  </p>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Available Compositions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.mixes.map((mix) => (
                      <span 
                        key={mix} 
                        className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md"
                      >
                        {mix}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Redirection CTA Footer */}
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[11px] text-[#1E3A8A] font-black uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1.5">
                    View Full Range 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                    {product.category === "shirtingFabrics" ? "Shirting" : "Suiting"}
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

function formatLabel(label) {
  if (label === "all") return "All Categories";
  if (label === "shirtingFabrics") return "Shirting Fabrics";
  if (label === "suitingFabrics") return "Suiting Fabrics";
  return label;
}