export default function About() {
  return (
    <div className="bg-[#F8FAFC] overflow-hidden">

      {/* HERO */}
      <section className="text-center py-24 px-4 
        bg-linear-to-br from-[#0A1F44] via-[#1E3A8A] to-[#0EA5E9] text-white">

        <h1 className="text-5xl md:text-6xl font-bold animate-fade-up">
          About Ashva Global
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-200 animate-fade-in">
          Weaving innovation, quality, and trust into every fabric.
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <img
          src="/logo.png"
          alt="Textile"
          className="rounded-2xl shadow-xl animate-zoom-in hover:scale-105 transition duration-500"
        />

        <div className="animate-fade-up">
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Ashva Global delivers premium textile solutions with modern
            innovation, quality craftsmanship, and global reach.
          </p>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="py-20 px-4 
        bg-linear-to-r from-[#1E3A8A] to-[#0EA5E9]">
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl text-white shadow-lg 
            hover:scale-105 transition duration-500 animate-fade-up">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>To lead globally in textile innovation and sustainability.</p>
          </div>

          <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl text-white shadow-lg 
            hover:scale-105 transition duration-500 animate-fade-up">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>Deliver quality fabrics with trust and excellence.</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-12 animate-fade-up">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              "Premium Quality",
              "Affordable Pricing",
              "Global Standards",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl shadow-md 
                bg-linear-to-br from-white to-blue-50 
                hover:shadow-xl hover:-translate-y-3 hover:scale-105 
                transition duration-500 animate-zoom-in"
              >
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-4 
        bg-linear-to-r from-[#0A1F44] to-[#1E3A8A] text-white">
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            { num: "10+", label: "Years Experience" },
            { num: "100+", label: "Clients" },
            { num: "50+", label: "Fabric Types" },
          ].map((stat, i) => (
            <div key={i} className="animate-float">
              <h3 className="text-5xl font-bold text-[#0EA5E9]">
                {stat.num}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}