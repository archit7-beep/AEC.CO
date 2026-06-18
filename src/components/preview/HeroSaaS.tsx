'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import NavbarSaaS from '../NavbarSaaS';

export default function HeroSaaS() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-[#000000] overflow-hidden flex flex-col pt-32 selection:bg-white/30"
    >
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#8C2F2F]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <NavbarSaaS />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-24">
        
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col items-center w-full"
        >
          {/* SaaS Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-pointer hover:bg-white/10 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <span className="text-white/80 text-xs font-medium tracking-wide">Introducing the new Pro Series</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </motion.div>
          
          {/* SaaS Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-body font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight max-w-5xl"
          >
            Industrial power, <br className="hidden md:block" />
            engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scale.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-white/50 text-lg md:text-xl max-w-2xl mt-8 font-normal leading-relaxed"
          >
            Amal Engineering Corporation delivers zero-tolerance fluid power and pneumatic systems for the world's most demanding environments.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Explore Products
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Clean, Aesthetic Product Presentation */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl mx-auto mt-16 md:mt-24 relative z-20 flex-1 flex flex-col items-center justify-end pointer-events-none"
      >
        <div className="relative w-[90%] md:w-[80%] h-[35vh] md:h-[45vh] z-10 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent rounded-t-3xl p-8 backdrop-blur-sm flex items-center justify-center">
          <Image 
            src="/booklet/air comprsoor.png" 
            alt="Air Compressor"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.div>
      
      {/* Fade into next section */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#000000] to-transparent z-30 pointer-events-none" />

    </div>
  );
}
