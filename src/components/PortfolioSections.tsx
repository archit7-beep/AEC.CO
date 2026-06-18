'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { SiSiemens, SiSchneiderelectric, SiBosch, SiMitsubishi } from 'react-icons/si';

const PORTFOLIO_IMAGES = [
  '/vs_products/product_7.png',
  '/vs_products/product_8.png',
  '/vs_products/product_9.png',
  '/vs_products/product_10.png',
  '/vs_products/product_11.png',
  '/vs_products/product_12.png',
];

export function PortfolioGallery() {
  return (
    <section className="w-full py-32 relative z-10 overflow-hidden bg-[#030014]" id="portfolio">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        
        {/* Massive Background Typography */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03]">
          <h2 className="text-[20vw] font-heading font-black leading-none text-white whitespace-nowrap">
            INSTALLATIONS
          </h2>
        </div>

        <div className="text-center mb-32 relative z-20 flex flex-col items-center">
          <div className="bg-[#0ea5e9] text-[#030014] font-mono font-bold px-4 py-2 uppercase tracking-[0.3em] -rotate-2 inline-block shadow-lg">
            Our Work
          </div>
          <h2 className="font-heading font-black text-6xl md:text-[6rem] text-white mt-8 leading-none tracking-tighter uppercase drop-shadow-xl">
            Featured <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#005A7A] italic pr-4">Installations</span>
          </h2>
        </div>
        
        {/* Asymmetrical / Brutalist Layout Grid */}
        <div className="relative w-full min-h-[1200px] flex flex-wrap justify-center gap-12 md:gap-0 mt-20">
          
          {/* Image 1: Main Large */}
          <div className="md:absolute top-0 left-[10%] w-[90vw] md:w-[35vw] aspect-[4/5] z-20 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border-4 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
               <Image src={PORTFOLIO_IMAGES[0]} alt="Installation 1" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 filter contrast-125 saturate-150" />
               <div className="absolute bottom-6 left-6 bg-white text-[#030014] font-heading font-bold text-2xl px-4 py-2 uppercase">01 / Pneumatics</div>
            </div>
          </div>

          {/* Image 2: Overlapping */}
          <div className="md:absolute top-[20%] right-[15%] w-[80vw] md:w-[25vw] aspect-square z-30 group">
            <div className="w-full h-full relative overflow-hidden rounded-full border-8 border-[#030014] shadow-[0_20px_50px_rgba(0,168,204,0.3)] transform rotate-6 group-hover:-rotate-2 transition-transform duration-500">
               <Image src={PORTFOLIO_IMAGES[1]} alt="Installation 2" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0" />
               <div className="absolute inset-0 bg-[#0284c7]/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>

          {/* Image 3: Wide Layout */}
          <div className="md:absolute top-[50%] left-[40%] w-[90vw] md:w-[45vw] aspect-[16/9] z-10 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border-2 border-[#0ea5e9]/50 shadow-[0_20px_50px_rgba(212,175,55,0.2)] transform -rotate-1 group-hover:rotate-1 transition-transform duration-500">
               <Image src={PORTFOLIO_IMAGES[2]} alt="Installation 3" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
               <div className="absolute top-6 right-6 bg-[#0ea5e9] text-white font-mono font-bold text-sm px-4 py-2 uppercase tracking-widest shadow-lg">Global Operations</div>
            </div>
          </div>

          {/* Image 4: Deep Scroll Reveal */}
          <div className="md:absolute top-[75%] left-[5%] w-[70vw] md:w-[20vw] aspect-[3/4] z-40 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border-l-8 border-[#0284c7] shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
               <Image src={PORTFOLIO_IMAGES[3]} alt="Installation 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute bottom-6 -right-4 bg-black text-white font-heading font-bold text-xl px-6 py-3 uppercase -rotate-90 origin-bottom-right">System Check</div>
            </div>
          </div>

        </div>

        {/* Explore More Brutalist Button */}
        <div className="mt-20 md:mt-40 text-center w-full relative z-50">
           <button className="bg-transparent text-white font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter hover:text-[#0284c7] hover:scale-110 transition-all duration-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_30px_rgba(0,168,204,0.8)]">
             View All Projects &rarr;
           </button>
        </div>

      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="w-full py-24 bg-[#110b29]/20 border-y border-white/5 relative z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="font-body text-[#0ea5e9] font-semibold tracking-wider uppercase mb-3">Client Feedback</h4>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white">What Industry Leaders Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#0ea5e9]/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#0ea5e9] text-[#0ea5e9]" />)}
              </div>
              <p className="font-body text-slate-300 font-light italic mb-8 relative z-10">
                "Amal Engineering completely revolutionized our pneumatic systems. The custom valves they integrated withstood pressures that our previous supplier's parts couldn't handle. True professionals."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-700 mr-4" />
                <div>
                  <h4 className="font-heading font-bold text-white">James Director</h4>
                  <p className="font-body text-sm text-[#0ea5e9]">Chief Engineer, GlobalChem</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnerLogos() {
  const PARTNERS = [
    { name: 'BOSCH REXROTH', icon: SiBosch, color: '#E20015' },
    { name: 'SIEMENS', icon: SiSiemens, color: '#009999' },
    { name: 'SCHNEIDER', icon: SiSchneiderelectric, color: '#3DCD58' },
    { name: 'MITSUBISHI', icon: SiMitsubishi, color: '#E60012' },
    { name: 'DANFOSS', src: '/logos/danfoss.png' },
    { name: 'HYDROLINE', src: '/logos/hydroline.jpg' },
    { name: 'YUKEN', src: '/logos/yuken.jpg' }
  ];

  // Duplicate array to create a seamless infinite loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full py-16 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-white">
          Trusted By <span className="text-[#0ea5e9]">Authorized Partners</span>
        </h2>
      </div>
        
      {/* Running Cycle Marquee Container */}
      <div className="w-full bg-[#110b29]/60 backdrop-blur-md border-y border-white/10 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex relative overflow-hidden">
        
        {/* Left/Right Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10" />

        <div className="flex animate-marquee min-w-max items-center gap-24 px-12">
          {duplicatedPartners.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 w-48 opacity-90 hover:opacity-100 transition-opacity duration-300">
              <div className="relative w-full h-24 flex items-center justify-center">
                 {logo.icon ? (
                   <logo.icon 
                      className="w-full h-full transition-transform duration-300 hover:scale-110 drop-shadow-md" 
                      style={{ color: logo.color }}
                   />
                 ) : (
                   <img 
                      src={logo.src}
                      alt={`${logo.name} Logo`}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 drop-shadow-md"
                   />
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
