export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-slate-950">

      {/* Background Image Layer with Luxury Slow Scale Pulse Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105 motion-safe:animate-pulse"
        style={{
          backgroundImage: "url('/hero_bg.png')",
          animationDuration: '8s'
        }}
      />

      {/* Multi-layered Vignette Overlay: Fades from Deep Slate Blue into Transparent Core */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-900/50 to-slate-950/90" />
      <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />

      {/* Core Dynamic Branding Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Floating Tag - Animated Fade-In */}
        <p className="opacity-0 animate-fade-in-up inline-block text-[11px] tracking-[4px] font-bold text-amber-400 bg-slate-900/60 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-slate-800 shadow-2xl uppercase">
          PREMIUM TEXTILE MANUFACTURERS
        </p>

        {/* Main Heading - Staggered Slide with Premium Liquid Gold Accent */}
        <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-7xl font-black mb-6 leading-[1.15] tracking-tight">
          <span className="text-white drop-shadow-md">ASHVA</span>{" "}
          <span className="bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm filter brightness-110">
            GLOBAL
          </span>
        </h1>

        {/* Luxury Narrative Statement */}
        <p className="opacity-0 animate-fade-in-up animation-delay-400 text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide font-normal">
          Delivering world-class fabric solutions with unmatched quality, 
          innovation, and craftsmanship. We weave premium textiles that inspire 
          fashion, enduring luxury, and high-performance.
        </p>

        {/* Tactile Motion Call-to-Action Buttons */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row justify-center items-center gap-5 w-full sm:w-auto">

          {/* Primary Gold/Amber Gradient Action Button */}
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 font-bold tracking-wider text-xs uppercase rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-98 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Fabrics</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Secondary Semi-Transparent Border Button */}
          <button className="w-full sm:w-auto px-8 py-4 border border-slate-700 bg-slate-900/30 backdrop-blur-sm text-slate-200 font-bold tracking-wider text-xs uppercase rounded-full hover:bg-slate-100 hover:text-slate-950 hover:border-white hover:scale-105 active:scale-98 transition-all duration-300">
            Contact Us
          </button>

        </div>

      </div>

      {/* Decorative Elegant bottom accent line fading into the page structure */}
     {/* Visible Elegant bottom gold accent divider line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  );
}