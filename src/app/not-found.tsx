'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* Background Matrix/Nebula effects */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] invert z-0" />
      <div className="fixed top-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center px-4 md:px-12"
      >
        <div className="mb-10 md:mb-12 relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black border border-cyan-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
            <Terminal className="w-10 h-10 md:w-14 md:h-14 text-cyan-400" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-heading font-black text-[120px] md:text-[220px] text-white tracking-tighter leading-none mb-4 md:-ml-8">
            404
          </h1>
          <div className="font-mono text-cyan-500 tracking-[0.5em] md:tracking-[1em] uppercase text-sm md:text-xl font-bold mb-12">
            // VOID // SECTOR NOT FOUND
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md mb-12 max-w-3xl mx-auto"
        >
          <p className="text-zinc-400 font-body text-base md:text-2xl leading-relaxed">
            You've wandered outside the known network. The equipment or coordinates you are looking for have been wiped from our databanks or never existed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/"
            className="group relative inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 md:px-12 md:py-6 rounded-full font-mono font-bold text-xs md:text-sm uppercase tracking-[0.2em] overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Return to Base
            </span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </Link>
          
          <Link 
            href="/products"
            className="inline-flex items-center justify-center gap-4 bg-transparent border border-white/20 text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-mono font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
          >
            Browse Catalog
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
