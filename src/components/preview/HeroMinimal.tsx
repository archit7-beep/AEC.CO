'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import NavbarMinimal from './NavbarMinimal';

export default function HeroMinimal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden flex flex-col pt-32"
    >
      <NavbarMinimal />

      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 flex flex-col justify-between h-full pb-12 relative z-10">
        
        {/* Top Minimal Typography */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="max-w-4xl pt-12"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[#111111]/40 tracking-[0.2em] uppercase text-xs mb-8"
          >
            Amal Engineering Corporation
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-normal text-[#111111] text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            Uncompromising <br className="hidden md:block"/>
            <span className="text-[#111111]/30">fluid power</span> <br className="hidden md:block"/>
            systems.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-body text-[#111111]/60 text-lg md:text-xl max-w-lg mt-12 font-light leading-relaxed"
          >
            Engineering excellence since 2008. Authorized distributors for the world's most demanding industrial environments.
          </motion.p>
        </motion.div>

        {/* Bottom Details & Minimal Scroll */}
        <div className="flex justify-between items-end w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:block"
          >
            <p className="font-mono text-[#111111]/30 text-[10px] uppercase tracking-[0.2em] mb-2">Partnered With</p>
            <p className="font-mono text-[#111111]/80 text-[11px] uppercase tracking-widest">Danfoss • Polyhydron • Yuken</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-mono text-[#111111]/40 text-[9px] uppercase tracking-[0.3em] rotate-90 origin-bottom translate-x-3 mb-8">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#111111]/30 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Floating Minimal Image */}
      <motion.div 
        style={{ y: yImage }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 md:right-[5%] w-[80%] md:w-[50%] max-w-3xl h-[70vh] z-0 flex items-end justify-end pointer-events-none"
      >
        <div className="relative w-full h-full drop-shadow-2xl">
          <Image 
            src="/booklet/aec-compressor.png" 
            alt="AEC Compressor"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </motion.div>

    </div>
  );
}
