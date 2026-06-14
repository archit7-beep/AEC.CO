import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[120vh] bg-[#0A192F] overflow-hidden flex flex-col items-center justify-center pt-20" id="home">
      
      {/* MASSIVE BACKGROUND KINETIC TEXT */}
      <div className="absolute top-[10%] left-0 w-[200vw] -translate-x-[10%] flex whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0">
        <h1 className="text-[25vw] font-heading font-black leading-none text-white tracking-tighter">
          PRECISION ENGINEERING PRECISION ENGINEERING
        </h1>
      </div>
      <div className="absolute top-[40%] right-0 w-[200vw] translate-x-[10%] flex whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0">
        <h1 className="text-[25vw] font-heading font-black leading-none text-white tracking-tighter">
          INDUSTRIAL POWER INDUSTRIAL POWER
        </h1>
      </div>

      <div className="max-w-[1800px] w-full mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
        
        {/* Seal / Stamp Badge */}
        <div className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[10%] z-50 w-32 h-32 md:w-48 md:h-48 flex items-center justify-center opacity-90 -rotate-12 hover:rotate-0 transition-transform duration-500 shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-full">
          {/* Outer Stamp Edge */}
          <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#FBCC13] opacity-80" />
          {/* Inner Rings */}
          <div className="absolute inset-1.5 rounded-full border-2 border-[#FBCC13]" />
          <div className="absolute inset-[22%] rounded-full border border-[#FBCC13] opacity-50" />
          
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
            <path id="curveTop" d="M 20,100 A 80,80 0 0,1 180,100" fill="transparent" />
            <path id="curveBottom" d="M 20,100 A 80,80 0 0,0 180,100" fill="transparent" />
            
            <text fontSize="14" fontWeight="bold" fill="#FBCC13" letterSpacing="2" className="uppercase font-mono">
              <textPath href="#curveTop" startOffset="50%" textAnchor="middle" dominantBaseline="central">
                ★ AUTHORIZED DISTRIBUTOR ★
              </textPath>
            </text>
            <text fontSize="14" fontWeight="bold" fill="#FBCC13" letterSpacing="4" className="uppercase font-mono">
              <textPath href="#curveBottom" startOffset="50%" textAnchor="middle" dominantBaseline="central">
                ESTABLISHED 2008
              </textPath>
            </text>
          </svg>
          
          {/* Center Graphic */}
          <div className="relative z-10 flex flex-col items-center justify-center text-[#FBCC13]">
            <span className="text-xl md:text-3xl leading-none font-serif mb-0.5">★</span>
            <span className="text-[10px] md:text-xs font-black tracking-widest border-t-2 border-b-2 border-[#FBCC13] mt-0.5 px-2">AMAL</span>
          </div>
        </div>

        {/* Removed massive background pistons */}

        {/* Central Brutalist Typography Area */}
        <div className="relative z-20 text-center flex flex-col items-center mt-40 md:mt-10">
          
          <ScrollReveal animation="slide-up">
            <div className="overflow-hidden mb-[-3rem] md:mb-[-6rem] z-10 relative">
              <h1 className="text-[20vw] md:text-[18vw] font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 leading-[0.75] tracking-tighter uppercase drop-shadow-2xl">
                AMAL
              </h1>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={0.2} className="relative z-30 flex items-center justify-center w-full max-w-[600px] h-[200px] md:h-[300px] my-4 md:my-0 group">
            
            {/* Piston Center Graphic */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#FBCC13] flex items-center justify-center animate-[spin_30s_linear_infinite] shadow-[0_0_50px_rgba(251,204,19,0.3)] bg-[#0A192F] overflow-hidden p-2">
               <Image 
                 src="/booklet/piston_ame.png"
                 alt="Rotating Piston Core"
                 fill
                 className="object-contain invert mix-blend-screen scale-75 rounded-full"
               />
               {/* Inner dashed ring for extra mechanical feel */}
               <div className="absolute inset-2 border-2 border-dashed border-[#00A8CC] rounded-full opacity-50" />
            </div>
            
            {/* Floating Tags bound to Center Area */}
            <div className="absolute top-[10%] -left-[5%] md:-left-[10%] z-30 bg-[#00A8CC] text-[#0A192F] font-mono font-bold text-xs md:text-sm px-6 py-2 uppercase tracking-widest -rotate-6 shadow-xl transform hover:scale-110 transition-transform">
              Industrial Core
            </div>
            <div className="absolute bottom-[10%] -right-[5%] md:-right-[10%] z-30 bg-[#FBCC13] text-[#0A192F] font-mono font-bold text-xs md:text-sm px-6 py-2 uppercase tracking-widest rotate-3 shadow-xl transform hover:scale-110 transition-transform">
              Precision Output
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={0.1}>
            <div className="overflow-hidden mt-[-3rem] md:mt-[-6rem] z-10 relative">
              <h1 className="text-[20vw] md:text-[18vw] font-heading font-black text-[#0A192F] leading-[0.75] tracking-tighter uppercase drop-shadow-md" style={{ WebkitTextStroke: '2px #FBCC13' }}>
                ENGG
              </h1>
            </div>
          </ScrollReveal>

          {/* Moved Explore Button Up directly under the typography */}
          <ScrollReveal animation="fade" delay={0.4}>
            <div className="mt-12 md:mt-16 z-40 relative">
              <Link href="/products" className="relative overflow-hidden group bg-[#FBCC13] border-2 border-[#FBCC13] text-[#0A192F] font-heading font-black text-2xl md:text-3xl px-16 py-6 transition-all duration-300 shadow-[8px_8px_0_white] hover:translate-y-1 hover:shadow-[4px_4px_0_white] hover:bg-white inline-block">
                <span className="relative z-10 uppercase tracking-widest">EXPLORE CATALOG</span>
              </Link>
            </div>
          </ScrollReveal>
          
        </div>

        {/* Floating Secondary Images for Depth */}
        <div className="absolute top-[50%] left-[5%] w-[25vw] md:w-[15vw] aspect-square z-10 rounded-full overflow-hidden border-2 border-[#FBCC13] transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hidden md:block">
          <Image src="/booklet/hero_compressor.png" alt="Compressor" fill className="object-cover bg-white" />
        </div>
        <div className="absolute top-[25%] right-[5%] w-[25vw] md:w-[15vw] aspect-square z-10 rounded-full overflow-hidden border-2 border-[#FBCC13]/50 shadow-[0_0_15px_rgba(251,204,19,0.3)] transform rotate-12 hover:rotate-0 hover:scale-105 hover:shadow-[0_0_40px_rgba(251,204,19,0.8)] transition-all duration-500 hidden md:block">
          <Image src="/vs_products/product_12.png" alt="Pneumatics" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity bg-[#112240] p-6" />
        </div>

        {/* Footer Text */}
        <ScrollReveal animation="fade" delay={0.6}>
          <div className="mt-24 md:mt-16 mb-20 md:mb-32 w-full flex flex-col md:flex-row items-center justify-center z-40 relative">
            <p className="font-mono text-xs md:text-sm text-[#00A8CC] tracking-[0.2em] max-w-2xl text-center border-t-2 border-[#00A8CC] pt-4 uppercase drop-shadow-xl bg-[#0A192F]/80 px-4 py-2 rounded">
              Engineering & Supplying critical infrastructure that keeps global industries moving forward since 2008.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* Aesthetic SVG Divider to next section */}
      <div className="absolute bottom-0 w-full leading-[0] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-[#0A192F] md:fill-transparent">
           {/* If we want a solid transition color to next section, we would fill this. For now, just a dynamic wave line. */}
           <path d="M0,50 C320,150 420,-50 740,50 C1060,150 1120,-50 1440,50 L1440,100 L0,100 Z" fill="rgba(17,34,64,1)"></path>
        </svg>
      </div>

    </section>
  );
}
