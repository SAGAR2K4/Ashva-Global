export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-gray-300 py-8 px-4">
      
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* COMPANY */}
        <div className="animate-fade-up">
          <h2 className="text-xl font-semibold text-white mb-2">
            Ashva Global
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium textile solutions with quality and trust.
          </p>
        </div>

        {/* LINKS */}
        <div className="animate-fade-up">
          <h3 className="text-white font-medium mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            {["Home", "Products", "Contact"].map((link) => (
              <li key={link}>
                <a className="hover:text-[#0EA5E9] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="animate-fade-up">
          <h3 className="text-white font-medium mb-2">Products</h3>
          <ul className="space-y-1 text-sm">
            {["Cotton", "Linen", "Polyester", "Shirting"].map((item) => (
              <li key={item} className="hover:text-[#0EA5E9] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="animate-fade-up">
          <h3 className="text-white font-medium mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Mumbai, India</li>
            <li>+91 9876543210</li>
            <li>info@ashvaglobal.com</li>
          </ul>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-3 text-lg">
            <span className="hover:text-[#0EA5E9] cursor-pointer">🌐</span>
            <span className="hover:text-[#0EA5E9] cursor-pointer">📘</span>
            <span className="hover:text-[#0EA5E9] cursor-pointer">📸</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-6 pt-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ashva Global
      </div>
    </footer>
  );
}