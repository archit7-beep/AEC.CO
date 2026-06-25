'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ClickSpark from './ClickSpark';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] bg-zinc-50 dark:bg-[#030014] overflow-hidden flex flex-col pt-32 pb-16 transition-colors duration-500" id="home">
      <ClickSpark sparkColor="#0ea5e9" sparkSize={15} sparkRadius={30} sparkCount={12} duration={500}>
      
      {/* Subtle Architectural Grid */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 blueprint-grid opacity-20 dark:opacity-30 z-0 pointer-events-none transition-opacity duration-500" />
      
      {/* Premium Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[#0055A4]/5 dark:bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#0ea5e9]/5 dark:bg-[#0055A4]/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-500" />

      {/* Industrial Spinning Seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 hidden lg:flex w-40 h-40 rounded-full border border-zinc-900/10 dark:border-white/10 items-center justify-center transition-colors duration-500 z-20 pointer-events-none"
      >
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="w-full h-full flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-900 dark:text-zinc-400 transition-colors duration-500 overflow-visible opacity-50 dark:opacity-100">
            <path id="curve-seal" fill="transparent" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            <text className="text-[11.2px] font-mono uppercase font-bold tracking-widest fill-current">
              <textPath href="#curve-seal" startOffset="0%" textLength="251">
                INDUSTRIAL POWER • PRECISION CONTROL •
              </textPath>
            </text>
          </svg>
        </motion.div>
        {/* Inner dot */}
        <div className="absolute w-2 h-2 bg-[#0ea5e9] rounded-full" />
      </motion.div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-between h-full flex-1">
        
        {/* Top Tagline */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 flex items-center gap-4 transition-colors duration-500"
          >
            <span className="w-8 h-px bg-[#0ea5e9]"></span>
            Est. 2008
            <span className="w-8 h-px bg-[#0ea5e9]"></span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 transition-colors duration-500"
          >
            ISO 9001:2015 Certified Company
          </motion.div>
        </div>

        {/* Massive Brand Name */}
        <div className="flex flex-col items-center justify-center mb-16 lg:mb-20 mt-auto w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[10vw] lg:text-[7.5vw] font-heading font-black leading-[0.95] tracking-tighter uppercase transition-colors duration-500 w-full"
          >
            <span className="text-zinc-900 dark:text-white block mb-2 md:mb-4">Amal Engineering</span>
            <span className="text-[#0ea5e9] block">Corporation</span>
          </motion.h1>
        </div>

        {/* Bottom Description & CTA */}
        <div className="flex flex-col items-center justify-center mt-auto pt-12 border-t border-zinc-200 dark:border-white/10 transition-colors duration-500 text-center max-w-4xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="font-body text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 transition-colors duration-500">
              We engineer, manufacture, and distribute critical compressed air and fluid power infrastructure that keeps global industries moving forward with 100% duty-cycle reliability.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <Link href="/products" className="relative overflow-hidden group inline-flex items-center justify-between gap-6 bg-transparent border border-zinc-900 dark:border-white rounded-full font-heading font-bold uppercase tracking-widest text-sm px-1 py-1 pl-8 transition-all duration-500 shadow-xl hover:shadow-2xl dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <span className="relative z-10 text-zinc-900 dark:text-white group-hover:text-white dark:group-hover:text-[#030014] transition-colors duration-500">
                Explore Catalog
              </span>
              <span className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 dark:bg-white flex items-center justify-center transition-colors duration-500">
                <ArrowRight className="w-5 h-5 text-white dark:text-[#030014] group-hover:translate-x-1 transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-zinc-900 dark:bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            </Link>
          </motion.div>
        </div>
        
      </div>
      </ClickSpark>
    </section>
  );
}
