'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, ShieldCheck, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] bg-transparent overflow-hidden flex flex-col justify-center pt-24 pb-20" id="home">
      
      {/* Subtle Engineering Grid Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 blueprint-grid opacity-30 z-0 pointer-events-none" />
      
      {/* Decorative corporate accent lines */}
      <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-gradient-to-bl from-[#0055A4]/10 to-transparent z-0 pointer-events-none rounded-bl-full" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* ── LEFT COLUMN: Corporate Messaging ── */}
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          
          <ScrollReveal animation="slide-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm mb-6 transition-colors duration-500">
              <span className="flex h-2 w-2 rounded-full bg-[#0055A4]" />
              <span className="text-zinc-600 dark:text-zinc-400 text-xs font-bold tracking-[0.15em] uppercase">Authorized Global Distributor</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-black text-zinc-900 dark:text-white leading-[1.05] tracking-tight mb-6 transition-colors duration-500">
              Industrial Power. <br />
              <span className="text-[#0055A4]">Precision Control.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={0.2}>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-body transition-colors duration-500">
              Engineering and supplying critical compressed air infrastructure that keeps global industries moving forward with 100% duty-cycle reliability.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={0.3}>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/products" className="group inline-flex items-center gap-3 bg-[#0055A4] text-white font-bold text-sm md:text-base px-8 py-4 rounded-sm shadow-lg shadow-[#0055A4]/30 hover:bg-[#004080] transition-colors">
                Explore Catalog
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 font-bold text-sm md:text-base px-8 py-4 rounded-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-500">
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust Metrics */}
          <ScrollReveal animation="fade" delay={0.4}>
            <div className="flex items-center gap-8 mt-16 pt-8 border-t border-zinc-300 dark:border-zinc-800 transition-colors duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#0055A4] transition-colors duration-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-900 dark:text-white font-bold leading-tight transition-colors duration-500">ISO Certified</span>
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Quality Standard</span>
                </div>
              </div>
              <div className="w-px h-12 bg-zinc-300 dark:bg-zinc-800 transition-colors duration-500" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#0055A4] transition-colors duration-500">
                  <Settings className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-900 dark:text-white font-bold leading-tight transition-colors duration-500">24/7 Service</span>
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Global Support</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* ── RIGHT COLUMN: High Quality Product Imagery ── */}
        <ScrollReveal animation="fade" delay={0.3} className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
          
          {/* Subtle backdrop circle instead of neon glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-white dark:bg-zinc-900 rounded-full shadow-2xl border border-zinc-200 dark:border-zinc-800 z-0 transition-colors duration-500" />
          
          {/* Main Product Image */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
             <Image 
               src="/booklet/blue-compressor.png" 
               alt="Industrial Rotary Screw Air Compressor" 
               fill 
               className="object-contain p-8 md:p-12 drop-shadow-2xl"
               priority
             />
          </motion.div>

          {/* Floating Corporate Spec Card */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-6 md:left-10 z-20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-lg p-5 flex items-center gap-4 transition-colors duration-500"
          >
            <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center transition-colors duration-500">
              <Zap className="w-6 h-6 text-[#0055A4]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-zinc-900 dark:text-white leading-tight transition-colors duration-500">Heavy-Duty Build</h4>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">Industrial Grade</p>
            </div>
          </motion.div>
          
        </ScrollReveal>

      </div>
    </section>
  );
}
