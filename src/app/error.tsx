'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('SYSTEM PANIC:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-red-500/30 selection:text-white">
      {/* Background Matrix/Nebula effects (Red theme for errors) */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] invert z-0" />
      <div className="fixed top-[20%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-900/20 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center px-4 md:px-12"
      >
        <div className="mb-10 md:mb-12 relative">
          <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse" />
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black border border-red-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <AlertTriangle className="w-10 h-10 md:w-14 md:h-14 text-red-500" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-heading font-black text-6xl md:text-[140px] text-white tracking-tighter leading-none mb-4">
            SYSTEM PANIC
          </h1>
          <div className="font-mono text-red-500 tracking-[0.5em] md:tracking-[1em] uppercase text-sm md:text-xl font-bold mb-12">
            // CRITICAL ERROR DETECTED
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-950/10 border border-red-500/20 p-8 md:p-12 rounded-3xl backdrop-blur-md mb-12 max-w-3xl mx-auto"
        >
          <p className="text-zinc-400 font-body text-base md:text-2xl leading-relaxed">
            The neural link has been severed. A catastrophic process failure occurred while attempting to render this sector. Our technicians have been notified.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => reset()}
            className="group relative inline-flex items-center justify-center gap-4 bg-red-500 text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-mono font-bold text-xs md:text-sm uppercase tracking-[0.2em] overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(239,68,68,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              <RotateCcw className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" />
              Reboot Sequence
            </span>
          </button>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-4 bg-transparent border border-white/20 text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-mono font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
          >
            Return to Base
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
