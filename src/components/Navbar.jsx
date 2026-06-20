import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-900 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">

        {/* BRAND LOGO AREA */}
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          {/* Logo image styled perfectly to fit seamlessly like a vector */}
          <div className="relative h-12 w-12 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/40 p-1 border  group-hover:border-amber-500/30 transition-all duration-500">
            <img 
              src="/logo_03.png" 
              alt="Ashva Global Logo" 
              className="h-full w-full object-contain mix-blend-lighten scale-110 transition-transform duration-500 group-hover:scale-125"
            />
          </div>
          
          {/* Text branding with clean gradient effects */}
          <div className="flex flex-col justify-center">
            {/* ASHVA: High-end Slate/White Matte Metallic Split */}
            <span className="font-black text-2xl tracking-wider leading-none bg-linear-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-200 transition-all duration-300">
              ASHVA
            </span>
            {/* GLOBAL: Rich Fluid Gold Accent */}
            <span className="font-bold text-sm tracking-[0.28em] leading-none mt-1.5 bg-linear-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
              GLOBAL
            </span>
          </div>
        </div>

        {/* DESKTOP MENU LINKS */}
        <ul className="hidden md:flex gap-10 font-semibold tracking-wider text-xs uppercase">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative py-2 transition-colors duration-300 group ${
                    isActive ? "text-amber-500" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Underline Hover Motion Line */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-linear-to-r from-amber-500 to-yellow-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* MOBILE NAVIGATION BUTTON */}
        <button
          className="md:hidden text-2xl p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE DROP DOWN */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-900 px-6 pb-6 pt-2 animate-fade-down">
          <ul className="flex flex-col gap-4 font-semibold tracking-wider text-xs uppercase">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 px-4 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? "bg-amber-500/10 text-amber-500 font-bold border-l-2 border-amber-500" 
                        : "text-slate-400 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}