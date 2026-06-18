'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, MessageSquare, Zap, Shield, Gauge, Activity } from 'lucide-react';
import { CatalogCategory } from '@/lib/catalogData';
import ProductTableSaaS from './ProductTableSaaS';

interface CompressorSaaSPageProps {
  categoryData: CatalogCategory;
}

export default function CompressorSaaSPage({ categoryData }: CompressorSaaSPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Fast counter from 0 to 100
    let startTimestamp: number;
    const duration = 1000; // 1 second for counting
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsedTime = timestamp - startTimestamp;
      const progressRatio = Math.min(elapsedTime / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progressRatio, 4);
      setProgress(Math.floor(easeProgress * 100));
      
      if (progressRatio < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background elements for loading screen */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

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
                <div className="font-sans font-black text-8xl md:text-[150px] lg:text-[200px] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter tabular-nums">
                  {progress}<span className="text-4xl md:text-6xl lg:text-8xl text-white/40">%</span>
                </div>

                {/* Progress Bar & Subtext */}
                <div className="w-full max-w-md mt-4">
                  <div className="flex justify-between text-white/40 font-mono text-[10px] uppercase tracking-widest mb-3">
                    <span>Loading Matrix</span>
                    <span>SYS.ON</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
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
        className="w-full relative z-10 font-sans pb-32 bg-transparent selection:bg-blue-500/30 text-white min-h-screen"
      >
        {/* Background Mesh Gradients */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-start pt-24 pb-16 px-6 md:px-12 lg:px-20 overflow-visible">

          {/* Back to Catalog — always visible, outside animation wrappers */}
          <Link
            href="/products"
            className="absolute top-24 left-6 md:left-12 lg:left-20 z-50 inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors font-mono text-[11px] uppercase tracking-[0.25em] group py-2 px-1"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Catalog
          </Link>

          {/* Two column layout */}
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center mt-10">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.6, ease: 'easeOut' }}
              className="flex flex-col items-start"
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/8 mb-5 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                <span className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">Enterprise Grade Matrix</span>
              </div>

              {/* Headline */}
              <h1 className="font-black text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tighter text-white mb-4">
                Industrial power,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                  intelligent control.
                </span>
              </h1>

              {/* Sub copy */}
              <p className="text-slate-400 text-base md:text-lg max-w-[480px] leading-relaxed mb-7">
                {categoryData.desc} Built for continuous, 100% duty-cycle operation in the harshest environments — powered by next-generation VSD+ architecture.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="/booklet/Air Compressor Spec.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.55)] hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download Specs
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Talk to Sales
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-black text-2xl leading-none">100%</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-widest">Duty Cycle</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white font-black text-2xl leading-none">24/7</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-widest">Monitoring</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-cyan-400 font-black text-2xl leading-none">VSD+</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-widest">Efficiency</span>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.7, ease: 'easeOut' }}
              className="relative flex flex-col items-center"
            >
              {/* Glow behind the card */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[70%] h-[70%] bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-full blur-[100px] animate-pulse" />
              </div>

              {/* White product card */}
              <div className="relative w-full aspect-[4/3] max-w-[580px] bg-gradient-to-br from-white to-slate-100 rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/20 z-10">
                
                {/* Premium Ribbon Badge */}
                <div className="absolute top-5 left-0 z-20">
                  <div 
                    className="flex items-center gap-1.5 pl-3 pr-6 py-1.5 bg-gradient-to-r from-black via-neutral-900 to-black shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)', fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <svg className="w-2.5 h-2.5 text-yellow-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-yellow-400 font-semibold text-[8px] uppercase tracking-[0.18em] whitespace-nowrap">Industry&apos;s #1 Choice</span>
                  </div>
                </div>

                <Image
                  src={categoryData.img}
                  alt={categoryData.name}
                  fill
                  className="object-contain p-10 hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
              </div>

              {/* Metric widgets — placed in a clean row below the card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4, ease: 'easeOut' }}
                className="relative z-20 flex items-stretch gap-3 mt-5 w-full max-w-[580px]"
              >
                {/* Widget: Matrix Online */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase">Status</span>
                    <span className="text-white font-bold text-sm leading-tight">Matrix Online</span>
                  </div>
                </div>

                {/* Widget: System Pressure */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/15 flex items-center justify-center border border-cyan-500/40 shrink-0">
                    <Gauge className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase">Pressure</span>
                    <span className="text-white font-bold text-sm leading-tight">14.0 <span className="text-cyan-400 text-xs font-normal">BAR</span></span>
                  </div>
                </div>

                {/* Widget: VSD Efficiency */}
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-black/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center border border-blue-500/40 shrink-0">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase">VSD Saving</span>
                    <span className="text-white font-bold text-sm leading-tight">+50 <span className="text-blue-400 text-xs font-normal">%</span></span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Main Content & Tables */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tighter">Hardware Configurations</h2>
            <p className="font-sans text-lg text-slate-400 mt-4 max-w-2xl">
              Select the exact specifications required for your facility. All series are available in complete standard configurations.
            </p>
          </div>

          {categoryData.subCategories.map((subCat, index) => {
            const sectionId = subCat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <div key={index} id={sectionId} className="mb-24 scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-8 h-8 text-blue-500" />
                  <h3 className="font-sans font-bold text-3xl text-white tracking-tight">
                    {subCat.title}
                  </h3>
                </div>
                <ProductTableSaaS headers={subCat.tableHeaders} products={subCat.products} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
