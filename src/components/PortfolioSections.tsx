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
    <section className="w-full py-32 relative z-10 overflow-hidden bg-zinc-100/50 dark:bg-[#09090b] transition-colors duration-500" id="portfolio">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        
        <div className="text-center mb-32 relative z-20 flex flex-col items-center">
          <div className="bg-[#0055A4] text-white font-mono font-bold px-4 py-2 uppercase tracking-[0.3em] inline-block shadow-sm rounded-sm">
            Our Work
          </div>
          <h2 className="font-heading font-black text-5xl md:text-[5rem] text-zinc-900 dark:text-white mt-8 leading-none tracking-tighter uppercase transition-colors duration-500">
            Featured <span className="text-[#0055A4]">Installations</span>
          </h2>
        </div>
        
        {/* Clean Layout Grid */}
        <div className="relative w-full min-h-[1200px] flex flex-wrap justify-center gap-12 md:gap-0 mt-20">
          
          {/* Image 1: Main Large */}
          <div className="md:absolute top-0 left-[10%] w-[90vw] md:w-[35vw] aspect-[4/5] z-20 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-800 shadow-xl group-hover:shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-900 p-2">
               <Image src={PORTFOLIO_IMAGES[0]} alt="Installation 1" fill className="object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700" />
               <div className="absolute bottom-6 left-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-heading font-bold text-lg px-4 py-2 uppercase shadow-sm transition-colors duration-500">01 / Pneumatics</div>
            </div>
          </div>

          {/* Image 2: Overlapping */}
          <div className="md:absolute top-[20%] right-[15%] w-[80vw] md:w-[25vw] aspect-square z-30 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border-4 border-white dark:border-zinc-900 shadow-xl group-hover:shadow-2xl transition-all duration-500">
               <Image src={PORTFOLIO_IMAGES[1]} alt="Installation 2" fill className="object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700" />
            </div>
          </div>

          {/* Image 3: Wide Layout */}
          <div className="md:absolute top-[50%] left-[40%] w-[90vw] md:w-[45vw] aspect-[16/9] z-10 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border border-zinc-200 dark:border-zinc-800 shadow-lg group-hover:shadow-xl transition-all duration-500">
               <Image src={PORTFOLIO_IMAGES[2]} alt="Installation 3" fill className="object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700" />
               <div className="absolute top-6 right-6 bg-[#0055A4] text-white font-mono font-bold text-xs px-4 py-2 uppercase tracking-widest shadow-sm rounded-sm">Global Operations</div>
            </div>
          </div>

          {/* Image 4: Scroll Reveal */}
          <div className="md:absolute top-[75%] left-[5%] w-[70vw] md:w-[20vw] aspect-[3/4] z-40 group">
            <div className="w-full h-full relative overflow-hidden rounded-sm border-l-4 border-[#0055A4] shadow-xl transition-transform duration-500">
               <Image src={PORTFOLIO_IMAGES[3]} alt="Installation 4" fill className="object-cover group-hover:scale-[1.05] transition-transform duration-700" />
            </div>
          </div>

        </div>

        {/* Explore Button */}
        <div className="mt-20 md:mt-40 text-center w-full relative z-50">
           <button className="bg-[#0055A4] text-white font-heading font-bold text-lg px-8 py-4 rounded-sm hover:bg-[#004080] transition-colors shadow-lg">
             View All Projects &rarr;
           </button>
        </div>

      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="w-full py-24 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 relative z-10 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="font-body text-[#0055A4] font-semibold tracking-wider uppercase mb-3">Client Feedback</h4>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-zinc-900 dark:text-white transition-colors duration-500">What Industry Leaders Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm p-8 relative shadow-sm hover:shadow-md transition-all duration-500">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#0055A4]/20" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#0055A4] text-[#0055A4]" />
                ))}
              </div>
              <p className="font-body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 italic transition-colors duration-500">
                "Amal Engineering has completely transformed our manufacturing uptime. Their parts are consistently reliable, and their emergency repair response time is unparalleled in the industry."
              </p>
              <div className="flex items-center gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6 transition-colors duration-500">
                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                  PM
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white transition-colors duration-500">Plant Manager</h4>
                  <p className="text-sm text-zinc-500">Tier 1 Automotive Supplier</p>
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
    <section className="w-full py-16 relative z-10 overflow-hidden bg-white dark:bg-[#09090b] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-center font-heading font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white transition-colors duration-500">
          Trusted By <span className="text-[#0055A4]">Authorized Partners</span>
        </h2>
      </div>
        
      {/* Running Cycle Marquee Container */}
      <div className="w-full bg-zinc-100 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 py-10 flex relative overflow-hidden transition-colors duration-500">
        
        {/* Left/Right Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#09090b] to-transparent z-10 transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#09090b] to-transparent z-10 transition-colors duration-500" />

        <div className="flex animate-marquee min-w-max items-center gap-24 px-12">
          {duplicatedPartners.map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-3 w-48 opacity-90 hover:opacity-100 transition-opacity duration-300">
              <div className="relative w-full h-24 flex items-center justify-center bg-white rounded-md p-4">
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
