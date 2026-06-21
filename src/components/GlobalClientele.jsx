import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GlobalClientele() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Exact 21 countries mapped proportionally onto a responsive relative grid layout
  const countryPins = [
    // --- The Americas ---
    { name: "US", top: "32%", left: "18%" },
    { name: "Mexico", top: "45%", left: "16%" },
    { name: "Panama", top: "54%", left: "21%" },
    { name: "Colombia", top: "59%", left: "24%" },
    { name: "Peru", top: "68%", left: "24%" },
    { name: "Brazil", top: "66%", left: "32%" },
    { name: "Paraguay", top: "74%", left: "30%" },
    { name: "Guatemala", top: "50%", left: "15%" },

    // --- Europe & Africa ---
    { name: "Germany", top: "26%", left: "49%" },
    { name: "France", top: "31%", left: "46%" },
    { name: "Italy", top: "35%", left: "50%" },
    { name: "Sudan", top: "53%", left: "53%" },

    // --- Middle East ---
    { name: "UAE", top: "45%", left: "60%" },
    { name: "Qatar", top: "43%", left: "58%" },
    { name: "Saudi Arabia", top: "48%", left: "56%" },

    // --- Asia-Pacific ---
    { name: "Sri Lanka", top: "59%", left: "69%" },
    { name: "Thailand", top: "51%", left: "74%" },
    { name: "Cambodia", top: "54%", left: "76%" },
    { name: "Vietnam", top: "51%", left: "78%" },
    { name: "Malaysia", top: "60%", left: "76%" },
    { name: "Indonesia", top: "66%", left: "79%" }
  ];

  return (
    <section className="relative w-full bg-slate-950 text-slate-300 py-24 px-6 overflow-hidden border-b border-slate-900 select-none">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase text-white font-light">
          Global <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Clientele</span>
        </h2>
        <div className="w-12 h-px bg-amber-500/30 mx-auto" />
      </div>

      {/* INTERACTIVE MAP CONTAINER */}
      <div className="max-w-6xl mx-auto relative aspect-21/10 w-full bg-slate-900/10 rounded-2xl border border-slate-900/60 p-4 shadow-inner">
        
        {/* Clean, High-End Abstract Vector World Map Silhouette */}
        <svg 
          className="w-full h-full opacity-[0.12] fill-slate-400 object-contain" 
          viewBox="0 0 1008 651" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M171.5,190.5 C178,180 190,165 210,160 C230,155 240,170 250,185 C260,200 280,210 295,200 C310,190 320,160 315,140 C310,120 290,110 300,90 C310,70 335,65 350,80 C365,95 380,120 375,145 C370,170 340,195 330,220 C320,245 325,270 315,295 C305,320 280,340 270,370 C260,400 275,430 285,460 C295,490 305,520 295,550 C290,565 270,590 260,570 C250,550 255,510 250,480 C245,450 220,430 210,400 C200,370 210,345 200,320 C190,295 160,280 150,250 C140,220 165,201 171.5,190.5 Z M530,120 C560,110 590,95 620,115 C650,135 680,110 710,140 C740,170 780,160 810,185 C840,210 880,190 910,230 C940,270 915,310 930,350 C945,390 970,420 950,460 C930,500 880,520 860,550 C840,580 810,610 790,580 C770,550 785,500 760,460 C735,420 690,440 660,410 C630,380 645,340 615,310 C585,280 540,290 510,260 C480,230 495,190 480,160 C465,130 500,130 530,120 Z M460,350 C490,380 500,420 520,460 C540,500 530,550 510,590 C495,620 460,600 450,560 C440,520 455,470 440,430 C425,390 400,370 410,330 C420,290 440,310 460,350 Z" />
        </svg>

        {/* ABSOLUTE PLACEMENT GRID FOR PINS */}
        <div className="absolute inset-0 w-full h-full">
          {countryPins.map((country, idx) => {
            const isHovered = hoveredCountry === country.name;
            return (
              <div
                key={idx}
                className="absolute transition-all duration-300"
                style={{ top: country.top, left: country.left }}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Custom Map Pin Component directly styled from the reference image */}
                <div className="relative flex items-center justify-center cursor-pointer group">
                  
                  {/* Glowing Outer Ping Effect */}
                  <span className={`absolute w-5 h-5 rounded-full bg-amber-500/20 transition-transform duration-500 scale-100 ${isHovered ? 'animate-ping scale-150' : ''}`} />
                  
                  {/* Standard Circular Pin Core */}
                  <div className={`w-3.5 h-3.5 rounded-full border bg-slate-950 flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-amber-400 shadow-[0_0_10px_#fbbf24]' : 'border-slate-700'}`}>
                    <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${isHovered ? 'bg-amber-400' : 'bg-slate-500'}`} />
                  </div>

                  {/* Micro Tooltip Floating Label */}
                  <div className={`absolute bottom-5 bg-slate-900 border text-[9px] font-mono tracking-wider text-slate-300 px-1.5 py-0.5 rounded transition-all duration-300 pointer-events-none whitespace-nowrap ${isHovered ? 'opacity-100 translate-y-0 border-amber-500/30 text-amber-400' : 'opacity-60 translate-y-1 border-slate-800'}`}>
                    {country.name}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* BRAND NARRATIVE FOOTER FOOTNOTES */}
      <div className="max-w-3xl mx-auto mt-16 text-center space-y-4 text-xs text-slate-400 font-light leading-relaxed">
        <p>
          Ashva Global expanded focus metrics into primary cross-border supply chains over a decade ago, systematically shipping certified fabric volumes to a massive portion of the premier apparel market space.
        </p>
        <p>
          Our continuous structural partnerships with leading garment manufacturing plants ensure that top-tier shirting lines deliver precise physical results inside tight project scheduling bounds.
        </p>
        <p>
          This wide distribution architecture keeps our development loops in permanent alignment with evolving fashion trends and changing global client requirements.
        </p>
      </div>

    </section>
  );
}