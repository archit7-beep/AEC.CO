'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, MessageSquare, Zap, Shield, Gauge, Activity } from 'lucide-react';
import { CatalogCategory } from '@/lib/catalogData';
import ProductTableSaaS from './ProductTableSaaS';
import CompressorBlocks from './CompressorBlocks';

interface CompressorSaaSPageProps {
  categoryData: CatalogCategory;
}

export default function CompressorSaaSPage({ categoryData }: CompressorSaaSPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Super fast counter
    let startTimestamp: number;
    const duration = 150; // 150ms for counting
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsedTime = timestamp - startTimestamp;
      const progressRatio = Math.min(elapsedTime / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progressRatio, 4);
      setProgress(Math.floor(easeProgress * 100));
      
      if (progressRatio < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Percentage Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)"
            }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-[#030014] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background elements for loading screen */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] invert z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#0ea5e9]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative flex flex-col items-center justify-center w-full px-6 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center flex flex-col items-center gap-6"
              >
                {/* Brand Name */}
                <div className="text-cyan-500/50 font-mono text-xs uppercase tracking-[0.4em] font-bold">
                  Amal Engineering Corp
                </div>

                {/* Giant Percentage Counter */}
                <div className="font-sans font-black text-8xl md:text-[150px] lg:text-[200px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-zinc-600 tracking-tighter tabular-nums">
                  {progress}<span className="text-4xl md:text-6xl lg:text-8xl text-slate-900/40 dark:text-white/20">%</span>
                </div>

                {/* Progress Bar & Subtext */}
                <div className="w-full max-w-md mt-4">
                  <div className="flex justify-between text-slate-900/40 dark:text-white/40 font-mono text-[10px] uppercase tracking-widest mb-3">
                    <span>Loading Matrix</span>
                    <span>SYS.ON</span>
                  </div>
                  <div className="w-full h-[1px] bg-slate-200 dark:bg-white/10 relative overflow-hidden">
                    <motion.div
                      style={{ width: `${progress}%` }}
                      className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        ref={containerRef} 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="w-full relative z-10 font-sans pb-32 bg-transparent selection:bg-blue-500/30 text-slate-900 dark:text-white min-h-screen"
      >
        {/* Background Mesh Gradients */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu will-change-transform" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu will-change-transform" />

        {/* Sleek Minimal Header */}
        <section className="relative w-full pt-32 pb-8 px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
          {/* Back to Catalog */}
          <Link
            href="/products"
            className="absolute top-24 left-6 md:left-12 lg:left-20 z-50 inline-flex items-center gap-2 text-slate-900/60 dark:text-white/60 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors font-mono text-[11px] uppercase tracking-[0.25em] group py-2 px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Catalog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: 'easeOut' }}
            className="max-w-4xl flex flex-col items-center"
          >
            <h1 className="font-black text-5xl md:text-7xl leading-tight tracking-tighter text-slate-900 dark:text-white mb-6">
              Industrial Power.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300">
                Intelligent Control.
              </span>
            </h1>
            <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl font-body">
              Select a compressor category below to view detailed models, required specifications, and compatible accessories.
            </p>
          </motion.div>
        </section>

        {/* Main Content: Expandable Image Blocks (Moved Up) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.9, delay: 1.8, ease: 'easeOut' }}
        >
          <CompressorBlocks />
        </motion.div>

        {/* Dedicated Editorial / SEO Section (Moved Below Blocks) */}
        <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#030014]/50">
          <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
            <Shield className="w-12 h-12 text-cyan-500/50 mb-8" />
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-8">
              Why Choose Our Matrix Architecture?
            </h2>
            <div className="text-slate-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl flex flex-col gap-6 font-body">
              <p>
                {categoryData.desc} Our compressors are built for continuous, 100% duty-cycle operation in the harshest environments — powered by next-generation VSD+ architecture. We ensure peak efficiency, preventing energy waste while maintaining precise pressure outputs.
              </p>
              <p>
                With completely redesigned cast-iron blocks, advanced synthetic lubrication systems, and smart telemetry, our industrial compressors provide unmatched uptime. Every unit is tested under rigorous conditions to guarantee performance that exceeds international standards.
              </p>
            </div>
            
            {/* System Component Map / Diagram */}
            <div className="w-full max-w-4xl mt-16 bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
              <div className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 px-6 py-4 flex items-center justify-between z-20 relative">
                <span className="font-mono text-sm tracking-widest uppercase text-slate-500 dark:text-cyan-500/70">System Component Map</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-white/20" />
                </div>
              </div>
              <div className="relative w-full h-[300px] md:h-[500px] bg-transparent overflow-hidden">
                 <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05] invert z-0" />
                 <Image 
                   src="/booklet/compressor-components.png" 
                   alt="Components of an Air Compressor" 
                   fill 
                   className="object-contain p-0 md:p-2 z-10 transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-6">
              <a
                href="/booklet/Air Compressor Spec.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold tracking-wide hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Technical Specs
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
