import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  // Scroll animation settings
  const footerScrollSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.15 }
  };

  // Staggered child container layout
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  // Individual columns animation (gently slides up)
  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 py-16 px-6 md:px-12 overflow-hidden border-t border-slate-900">
      
      {/* Subtle Background Glow Layer */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        {...footerScrollSettings}
        variants={containerVariant}
        className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10"
      >
        {/* 1. BRAND COLUMN */}
        <motion.div variants={itemVariant} className="space-y-4">
          <h2 className="text-2xl font-serif font-light text-white tracking-tight">
            Ashva <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Global</span>
          </h2>
          <p className="text-xs font-semibold tracking-wider text-amber-400/90 uppercase">
            Weaving the Future of Textiles
          </p>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            Premium mill-certified textile architecture delivering uncompromised structural performance and elegance to global fashion houses.
          </p>
        </motion.div>

        {/* 2. NAVIGATION LINKS */}
        <motion.div variants={itemVariant} className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-900 pb-2">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "About Journey", path: "/about" },
              { label: "Contact Registry", path: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.path}
                  className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3. CORE PRODUCTS CATEGORIES */}
        <motion.div variants={itemVariant} className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-900 pb-2">
            Collections
          </h3>
          <ul className="space-y-2.5 text-xs">
            {[
              { name: "Premium Shirting", query: "shirtingFabrics" },
              { name: "Executive Suiting", query: "suitingFabrics" },
              { name: "Fine Linen Blends", query: "linen" },
              { name: "Pure Cotton Matrices", query: "cotton" }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={`/products?category=${item.query}`}
                  className="hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5 group"
                >
                  <span className="h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 4. HQ HEADQUARTERS Registry */}
        <motion.div variants={itemVariant} className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-slate-900 pb-2">
            Corporate HQ
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 select-none">📍</span>
              <span>Mumbai, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400 select-none">📞</span>
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 9876543210</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400 select-none">✉️</span>
              <a href="mailto:ashokmote01@gmail.com" className="hover:text-white transition-colors">ashokmote01@gmail.com</a>
            </li>
          </ul>

          {/* Social Media Interactive Anchors */}
          <div className="flex gap-4 pt-2 text-sm text-slate-500">
            {["LinkedIn", "Instagram", "Twitter"].map((platform) => (
              <a 
                key={platform} 
                href={`#${platform.toLowerCase()}`}
                className="hover:text-amber-400 font-medium tracking-wider text-[10px] uppercase transition-colors duration-300 cursor-pointer"
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* BOTTOM LEGAL ROW */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-slate-600 relative z-10">
        <div>
          © {new Date().getFullYear()} Ashva Global. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Quality</a>
          <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Charter</a>
        </div>
      </div>
    </footer>
  );
}