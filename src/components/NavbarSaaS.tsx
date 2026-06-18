'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function NavbarSaaS() {
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
            className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_24px_rgba(34,211,238,0.6)] transition-all duration-500 group-hover:scale-105"
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

        {/* Servicing CTA — magnetic glow button */}
        <MagneticButton href="/contact" />

      </div>
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
      <span className="block text-white group-hover:-translate-y-full transition-transform duration-300 ease-in-out whitespace-nowrap">
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
          className="relative group inline-flex items-center px-7 py-2.5 rounded-full font-semibold text-[11px] uppercase tracking-[0.2em] text-white overflow-hidden transition-colors duration-300"
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
