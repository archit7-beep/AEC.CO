'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import NavbarEditorial from './NavbarEditorial';

export default function HeroEditorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Setup scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#F9F6F0] overflow-hidden flex flex-col items-center justify-center pt-24"
    >
      {/* Massive Background Text - Fixed behind image */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 flex flex-col items-center justify-start pt-[18vh] md:pt-[22vh] z-10 pointer-events-none w-full"
      >
        <span className="font-mono text-[#8C2F2F] tracking-[0.3em] uppercase text-sm md:text-lg mb-4 font-bold">
          Amal Engineering Corporation
        </span>
        <h1 className="font-heading font-black text-[#1C1C1C] text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase whitespace-nowrap text-center">
          PRECISION
        </h1>
        <h1 className="font-heading font-black text-[#8C2F2F] text-[13vw] md:text-[11vw] leading-[0.85] tracking-tighter uppercase whitespace-nowrap text-center -mt-2">
          ENGINEERING
        </h1>
      </motion.div>

      {/* Hero Image with Parallax - Using a real transparent cutout */}
      <motion.div 
        style={{ y: yImage, scale: scaleImage }}
        className="absolute bottom-0 w-[90%] md:w-[60%] max-w-3xl h-[65vh] z-20 origin-bottom flex items-end justify-center"
      >
        <div className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <Image 
            src="/booklet/aec-compressor.png" 
            alt="Precision Equipment"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.div>

      {/* Floating Foreground Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 left-8 md:left-12 z-30 max-w-xs md:max-w-sm"
      >
        <p className="font-mono text-[#1C1C1C] text-sm md:text-base leading-relaxed font-bold bg-[#F9F6F0]/80 backdrop-blur-sm p-4 rounded-xl border border-[#1C1C1C]/10">
          Authorized distributor for <span className="text-[#8C2F2F]">Danfoss, Polyhydron, and Yuken</span>. Over a decade of excellence in heavy-duty fluid power.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 md:right-12 z-30 font-heading font-bold text-[#1C1C1C] uppercase tracking-widest text-xs flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-[2px] h-12 bg-[#8C2F2F]" />
      </motion.div>
    </div>
  );
}
