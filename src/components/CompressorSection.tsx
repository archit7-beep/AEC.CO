'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function CompressorSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#05110c] relative z-10 overflow-hidden border-t-2 border-[#0ea5e9]/20">
      
      {/* SaaS-style glowing background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* SaaS-style Badge */}
        <ScrollReveal animation="slide-up">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9] shadow-[0_0_8px_rgba(181,134,11,0.8)]"></span>
            <span className="text-white/80 text-xs font-mono font-medium tracking-widest uppercase">Premium Pneumatics</span>
          </div>
        </ScrollReveal>

        {/* Clean, Gradient Typography */}
        <ScrollReveal animation="slide-up" delay={0.1}>
          <h2 className="font-heading font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter mb-6">
            Industrial Air <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-yellow-200">Compressors.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={0.2}>
          <p className="font-body text-slate-400 text-lg md:text-xl text-center max-w-2xl mb-12 leading-relaxed">
            Engineered for zero-tolerance environments. High-efficiency, low-maintenance air compression systems that keep your facility running 24/7.
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal animation="slide-up" delay={0.3}>
          <div className="flex items-center gap-4 mb-20">
            <Link href="/products/compressors" className="bg-[#0ea5e9] text-[#05110c] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(181,134,11,0.3)]">
              View Specs
            </Link>
            <Link href="/contact" className="border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Request Quote
            </Link>
          </div>
        </ScrollReveal>

        {/* Aesthetic Flat Product Presentation (No 3D floating) */}
        <ScrollReveal animation="fade" delay={0.4} className="w-full flex justify-center relative">
          <div className="w-full max-w-4xl relative z-10 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent rounded-t-[3rem] p-8 md:p-16 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            <Image 
              src="/booklet/air comprsoor.png" 
              alt="Industrial Air Compressor"
              width={800}
              height={600}
              className="object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>
          {/* Base line to ground it */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0ea5e9]/50 to-transparent" />
        </ScrollReveal>

      </div>
    </section>
  );
}
