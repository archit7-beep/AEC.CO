'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import Navbar from './Navbar';
import NavbarSaaS from './NavbarSaaS';

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSaas = pathname === '/products/compressors';

  useEffect(() => {
    if (!isSaas) return;
    const updateMouse = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [isSaas]);

  if (isSaas) {
    return (
      <body className="text-slate-100 min-h-screen relative selection:bg-blue-500/30 selection:text-white font-sans bg-[#000000]">
        
        {/* Dynamic Interactive Cursor Glow */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-100" 
             style={{ background: 'radial-gradient(1000px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(59, 130, 246, 0.25), transparent 40%)' }} />
        
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* SaaS Specific Navigation */}
          <NavbarSaaS />

          {/* Dynamic Page Rendering for SaaS Route */}
          <main className="w-full flex-grow flex flex-col items-center">
            {children}
          </main>
        </div>
      </body>
    );
  }

  // Modern Obsidian Aesthetic for the rest of the site
  return (
    <body className="text-slate-900 dark:text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-white font-body bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {/* FIXED BACKGROUND STACK FRAMEWORK */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
          {/* Layer 0: The Deep Void Base (Only visible in dark mode via globals.css or bg class) */}
          <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#050505] transition-colors duration-500" />
          
          {/* Layer 1: Luminous Ambient Nebula Orbs (Fluid Center Glows) - Adjusted opacity for light mode */}
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-900/5 dark:bg-indigo-900/15 blur-[140px] bg-nebula-1 transition-colors duration-500" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-cyan-900/5 dark:bg-cyan-900/10 blur-[160px] bg-nebula-2 transition-colors duration-500" />
          <div className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-violet-900/5 dark:bg-violet-900/15 blur-[120px] bg-nebula-1 transition-colors duration-500" />

          {/* Layer 2: Technical Drafting Blueprint Grid Overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-30 dark:opacity-50 transition-opacity duration-500" />

          {/* Architectural Coordinate Tick Crosshairs */}
          <div className="absolute top-12 left-12 font-mono text-[8px] text-[#0ea5e9]/40 dark:text-[#0ea5e9]/20 tracking-widest transition-colors duration-500">SYS.LOC // 45.09.21</div>
          <div className="absolute bottom-12 right-12 font-mono text-[8px] text-[#0ea5e9]/40 dark:text-[#0ea5e9]/20 tracking-widest transition-colors duration-500">GRID.MATRIX // ACTIVE</div>
        </div>

        {/* Layer 4: Active Application Content Layout Viewport */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Navigation Frame */}
          <Navbar />

          {/* Dynamic Page Rendering */}
          <main className="w-full flex-grow flex flex-col items-center">
            {children}
          </main>
        </div>
      </ThemeProvider>
    </body>
  );
}
