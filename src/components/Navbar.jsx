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
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Ashva Global" className="h-10" />
          <span className="font-bold text-lg">ASHVA GLOBAL</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative transition duration-300 hover:text-[#3B82F6] 
                ${
                  location.pathname === link.path
                    ? "text-[#0EA5E9]"
                    : ""
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#0EA5E9] transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#b4bbd0] px-4 pb-4 animate-fade-down">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition duration-300 
                  ${
                    location.pathname === link.path
                      ? "text-[#0EA5E9]"
                      : "hover:text-[#3B82F6]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}