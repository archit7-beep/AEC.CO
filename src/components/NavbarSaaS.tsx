'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Search } from 'lucide-react';
import SearchModal from './SearchModal';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function NavbarSaaS() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const links = [
    { label: 'AEC Home', href: '/' },
    { label: 'Air Compressors', href: '/products/compressors' },
    { label: 'All Products', href: '/products' },
    { label: 'Support', href: '/contact' },
  ];

  return (
    <nav className={`${spaceGrotesk.className} absolute top-0 left-0 w-full z-50 pointer-events-none`}>
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 h-20 pointer-events-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/booklet/logo.png"
            alt="AEC Logo"
            width={140}
            height={50}
            className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_24px_rgba(34,211,238,0.6)] transition-all duration-500 group-hover:scale-105 dark:brightness-200 dark:contrast-100"
          />
        </Link>

        {/* Center nav links — text-flip on hover */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          {links.map((link, i) => (
            <FlipLink key={i} href={link.href}>
              {link.label}
            </FlipLink>
          ))}
        </div>

        {/* Right side: Servicing CTA, Search & Theme Switch */}
        <div className="flex items-center gap-6">
          <button 
            className="text-slate-900 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors pointer-events-auto"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-5 h-5" />
          </button>
          <CyberThemeSwitch />
          <MagneticButton href="/contact" />
        </div>

      </div>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}

/* ── Text-flip nav link ──────────────────────────────────── */
function FlipLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden h-5 flex flex-col group text-[12px] font-semibold uppercase tracking-[0.18em]"
    >
      <span className="block text-slate-900 dark:text-slate-200 group-hover:-translate-y-full transition-transform duration-300 ease-in-out whitespace-nowrap">
        {children}
      </span>
      <span className="absolute top-full left-0 block text-cyan-400 group-hover:-translate-y-full transition-transform duration-300 ease-in-out whitespace-nowrap drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
        {children}
      </span>
    </Link>
  );
}

/* ── Magnetic glow CTA button ────────────────────────────── */
function MagneticButton({ href }: { href: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}>
      <motion.div style={{ x: springX, y: springY }}>
        <Link
          href={href}
          className="relative group inline-flex items-center px-7 py-2.5 rounded-full font-semibold text-[11px] uppercase tracking-[0.2em] text-slate-900 dark:text-slate-200 overflow-hidden transition-colors duration-300"
        >
          <span className="absolute inset-0 rounded-full border border-white/25 group-hover:border-cyan-400/70 transition-colors duration-300" />
          <span className="absolute inset-0 rounded-full bg-white/8 backdrop-blur-md group-hover:bg-cyan-500/15 transition-colors duration-300" />
          <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
            Servicing
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

/* ── Futuristic Cyber Theme Switch ───────────────────────── */
function CyberThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-16 h-8" />;

  const isDark = theme === 'dark' || theme === 'system';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex items-center w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#08080c' : '#f1f5f9',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        boxShadow: isDark 
          ? 'inset 0 2px 10px rgba(0,0,0,0.5), 0 0 15px rgba(34,211,238,0.2)' 
          : 'inset 0 2px 10px rgba(0,0,0,0.05), 0 0 15px rgba(14,165,233,0.2)'
      }}
    >
      {/* Dynamic background glow inside the track */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: isDark 
            ? 'linear-gradient(90deg, rgba(34,211,238,0) 0%, rgba(34,211,238,0.1) 100%)' 
            : 'linear-gradient(90deg, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0) 100%)'
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
        layout
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
          backgroundColor: isDark ? '#22d3ee' : '#0ea5e9',
          boxShadow: isDark 
            ? '0 0 10px #22d3ee, inset 0 -2px 4px rgba(0,0,0,0.3)' 
            : '0 0 10px #0ea5e9, inset 0 -2px 4px rgba(0,0,0,0.2)'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5 text-[#030014] fill-[#030014]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5 text-white fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Decorative Matrix lines */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 opacity-30">
        <div className="w-1 h-0.5 bg-cyan-500 rounded-full" />
        <div className="w-1 h-0.5 bg-cyan-500 rounded-full" />
        <div className="w-1 h-0.5 bg-cyan-500 rounded-full" />
      </div>
    </button>
  );
}
