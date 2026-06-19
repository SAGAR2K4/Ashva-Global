

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero-bg.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        {/* Tag */}
        <p className="inline-block text-xs tracking-[3px] text-white bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
          PREMIUM TEXTILE MANUFACTURERS
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-white">ASHVA</span>{" "}
          <span className="text-[#E8DCCB]">GLOBAL</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Delivering world-class fabric solutions with unmatched quality,
          innovation, and craftsmanship. We create textiles that inspire
          fashion, comfort, and performance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Fabrics
          </button>

          <button className="border border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}