'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, User, Menu, X, ChevronDown, ArrowRight, Wrench, Settings, Factory, ShieldCheck } from 'lucide-react';
import SearchModal from './SearchModal';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  // Hide the global navbar entirely on preview routes
  if (pathname && pathname.startsWith('/preview')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check which section is in view
      const sections = ['home', 'industries', 'services', 'about-us', 'contact'];
      let current = '';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // if the section top is above the viewport middle and bottom is below it
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
          }
        }
      }
      setActiveHash(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleMouseEnter = (menu: string) => {
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMegaMenu(null);
  };

  const isHomeActive = pathname === '/' && activeHash !== 'industries';
  const isProductsActive = pathname.startsWith('/products') && pathname !== '/products/compressors';
  const isIndustriesActive = pathname === '/' && activeHash === 'industries';
  const isAboutActive = pathname.startsWith('/about');

  return (
    <>
      {/* Top Infobar Marquee (Like beatushoehlen.swiss) */}
      <div className="w-full bg-[#0ea5e9] text-[#030014] py-2 overflow-hidden relative z-[60]">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            — 24/7 EMERGENCY SPARES SUPPORT: +91 99999 99999
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            🔥 GLOBAL PARTNERSHIP ANNOUNCEMENT: AUTHORIZED BOSCH REXROTH DEALER
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            — FAST SHIPPING WORLDWIDE
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            — ISO 9001:2015 CERTIFIED
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            🔥 GLOBAL PARTNERSHIP ANNOUNCEMENT: AUTHORIZED BOSCH REXROTH DEALER
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            — FAST SHIPPING WORLDWIDE
          </span>
          <span className="font-mono font-bold text-xs uppercase tracking-widest mx-4">
            — ISO 9001:2015 CERTIFIED
          </span>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav className="w-full bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-[100] transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 cursor-pointer group z-50">
            <Image 
              src="/booklet/logo.png" 
              alt="AEC Logo" 
              width={160} 
              height={70} 
              className="object-contain translate-y-2 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(251,204,19,0.9)]" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center h-full">
            <ul className="flex space-x-1 lg:space-x-2 h-full">
              
              {/* Standard Link */}
              <li className="h-full flex items-center px-2 lg:px-4 group">
                <Link href="/" className={`relative font-heading font-bold text-sm tracking-widest uppercase flex items-center transition-colors h-full ${isHomeActive ? 'text-[#0ea5e9]' : 'text-zinc-800 dark:text-white hover:text-[#0ea5e9]'}`}>
                  Home
                  {isHomeActive && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#0ea5e9]" />
                  )}
                </Link>
              </li>

              {/* Mega Menu Link: Products */}
              <li 
                className="h-full flex items-center px-2 lg:px-4 group"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/products" className={`relative font-heading font-bold text-sm tracking-widest uppercase flex items-center gap-1 transition-colors h-full ${isProductsActive ? 'text-[#0ea5e9]' : 'text-zinc-800 dark:text-white group-hover:text-[#0ea5e9]'}`}>
                  Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === 'products' ? 'rotate-180' : ''}`} />
                  {isProductsActive && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#0ea5e9]" />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <div className={`absolute left-0 top-[100%] w-full bg-zinc-50 dark:bg-[#110b29] border-t border-[#0ea5e9] shadow-2xl transition-all duration-300 origin-top overflow-hidden ${activeMegaMenu === 'products' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                  <div className="max-w-[1800px] mx-auto p-12 flex gap-12">
                    {/* Left: Featured Image */}
                    <div className="w-1/3 relative aspect-video bg-[#030014] overflow-hidden group/image">
                      <Image 
                        src="/booklet/Axial-Flow-Pump1.webp"
                        alt="Featured Product"
                        fill
                        className="object-contain p-4 group-hover/image:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-[#0284c7]/20 mix-blend-overlay" />
                      <div className="absolute bottom-4 left-4 bg-zinc-900 dark:bg-white text-white dark:text-[#030014] font-mono font-bold text-xs px-3 py-1 uppercase">
                        Featured: Axial Pumps
                      </div>
                    </div>
                    
                    {/* Right: Links Grid */}
                    <div className="w-2/3 grid grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-heading font-black text-zinc-900 dark:text-white text-xl uppercase mb-6 border-b border-zinc-200 dark:border-white/10 pb-2">Hydraulics</h3>
                        <ul className="space-y-4 font-body text-zinc-600 dark:text-slate-300">
                          <li><Link href="/products/pumps" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Hydraulic Pumps</Link></li>
                          <li><Link href="/products/hoses" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Industrial Hoses</Link></li>
                          <li><Link href="/products/couplings" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Couplings & Valves</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-zinc-900 dark:text-white text-xl uppercase mb-6 border-b border-zinc-200 dark:border-white/10 pb-2">Pneumatics & More</h3>
                        <ul className="space-y-4 font-body text-zinc-600 dark:text-slate-300">
                          <li><Link href="/products/pneumatics" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Cylinders & Valves</Link></li>
                          <li><Link href="/products/pneumatics" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Air Preparation</Link></li>
                          <li><Link href="/products/fittings" className="hover:text-[#0ea5e9] flex items-center gap-2 group/link"><ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" /> Fittings & Gauges</Link></li>
                        </ul>
                      </div>
                      <div className="bg-zinc-200/50 dark:bg-white/5 p-6 border border-zinc-300 dark:border-white/10 flex flex-col justify-center items-start">
                         <h3 className="font-heading font-black text-[#0ea5e9] text-2xl uppercase mb-4">View All Catalog</h3>
                         <p className="font-mono text-sm text-zinc-600 dark:text-slate-400 mb-6">Browse our complete inventory of over 10,000 certified OEM parts.</p>
                         <Link href="/products" className="bg-[#030014] dark:bg-white text-white dark:text-[#030014] font-heading font-bold uppercase px-6 py-3 hover:bg-[#0ea5e9] dark:hover:bg-[#0ea5e9] transition-colors">
                           Explore Catalog
                         </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Mega Menu Link: Compressors */}
              <li 
                className="h-full flex items-center px-2 lg:px-4 group"
                onMouseEnter={() => handleMouseEnter('compressors')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/products/compressors" className={`relative font-heading font-bold text-sm tracking-widest uppercase flex items-center gap-1 transition-colors h-full ${pathname === '/products/compressors' ? 'text-[#0ea5e9]' : 'text-zinc-800 dark:text-white group-hover:text-[#0ea5e9]'}`}>
                  Air Compressors <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMegaMenu === 'compressors' ? 'rotate-180' : ''}`} />
                  {pathname === '/products/compressors' && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#0ea5e9]" />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                <div className={`absolute left-0 top-[100%] w-full bg-zinc-50 dark:bg-[#110b29] border-t border-[#0ea5e9] shadow-2xl transition-all duration-300 origin-top overflow-hidden ${activeMegaMenu === 'compressors' ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                  <div className="max-w-[1800px] mx-auto p-12">
                    
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-white/10">
                      <div>
                        <h3 className="font-heading font-black text-2xl text-zinc-900 dark:text-white uppercase tracking-tight">Air Compressor Solutions</h3>
                        <p className="font-mono text-sm text-zinc-500 dark:text-slate-400 mt-1">End-to-end pneumatic power systems manufactured and serviced by AEC.</p>
                      </div>
                      <Link href="/products/compressors" className="text-[#0ea5e9] font-mono text-sm uppercase tracking-widest font-bold flex items-center hover:text-zinc-900 dark:hover:text-white transition-colors group/all">
                        View All <ArrowRight className="w-4 h-4 ml-2 transform group-hover/all:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* AEC Compressors */}
                      <Link href="/products/compressors" className="group/card bg-white dark:bg-[#030014] border border-zinc-200 dark:border-white/10 rounded-xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] dark:hover:shadow-[0_10px_30px_rgba(14,165,233,0.2)] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-bl-full pointer-events-none group-hover/card:scale-110 transition-transform duration-500" />
                        <div>
                          <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover/card:bg-[#0ea5e9] transition-colors duration-300">
                            <Factory className="w-6 h-6 text-zinc-600 dark:text-slate-300 group-hover/card:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-2">AEC Compressors</h4>
                          <p className="font-body text-sm text-zinc-500 dark:text-slate-400">Rotary screw & reciprocating compressors built for endurance.</p>
                        </div>
                        <div className="mt-4 font-mono text-xs text-[#0ea5e9] uppercase font-bold tracking-wider flex items-center">
                          Explore Series <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
                        </div>
                      </Link>

                      {/* Genuine Spares */}
                      <Link href="/products/compressors#spares" className="group/card bg-white dark:bg-[#030014] border border-zinc-200 dark:border-white/10 rounded-xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] dark:hover:shadow-[0_10px_30px_rgba(14,165,233,0.2)] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-bl-full pointer-events-none group-hover/card:scale-110 transition-transform duration-500" />
                        <div>
                          <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover/card:bg-[#0ea5e9] transition-colors duration-300">
                            <Settings className="w-6 h-6 text-zinc-600 dark:text-slate-300 group-hover/card:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-2">Genuine Spares</h4>
                          <p className="font-body text-sm text-zinc-500 dark:text-slate-400">Air filters, oil separators, valves, and overhaul kits.</p>
                        </div>
                        <div className="mt-4 font-mono text-xs text-[#0ea5e9] uppercase font-bold tracking-wider flex items-center">
                          Browse Parts <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
                        </div>
                      </Link>

                      {/* Service & Repair */}
                      <Link href="/contact" className="group/card bg-white dark:bg-[#030014] border border-zinc-200 dark:border-white/10 rounded-xl p-6 hover:border-[#0ea5e9] hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] dark:hover:shadow-[0_10px_30px_rgba(14,165,233,0.2)] transition-all duration-300 flex flex-col justify-between h-64 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/5 rounded-bl-full pointer-events-none group-hover/card:scale-110 transition-transform duration-500" />
                        <div>
                          <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover/card:bg-[#0ea5e9] transition-colors duration-300">
                            <Wrench className="w-6 h-6 text-zinc-600 dark:text-slate-300 group-hover/card:text-white transition-colors duration-300" />
                          </div>
                          <h4 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-2">Service & Overhaul</h4>
                          <p className="font-body text-sm text-zinc-500 dark:text-slate-400">Certified technicians for all major compressor brands.</p>
                        </div>
                        <div className="mt-4 font-mono text-xs text-[#0ea5e9] uppercase font-bold tracking-wider flex items-center">
                          Book Service <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
                        </div>
                      </Link>

                      {/* Quality Assurance */}
                      <div className="bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">
                        <ShieldCheck className="absolute -right-6 -bottom-6 w-48 h-48 text-[#0ea5e9] opacity-10 pointer-events-none" />
                        <h4 className="font-heading font-black text-2xl text-[#0ea5e9] uppercase mb-4 z-10">ISO 9001:2015</h4>
                        <p className="font-body text-sm text-zinc-700 dark:text-slate-300 z-10 mb-6">
                          All AEC compressors and spares undergo rigorous testing to meet strict international quality standards.
                        </p>
                        <Link href="/about" className="inline-flex w-max items-center px-4 py-2 bg-[#0ea5e9] text-white font-mono text-xs uppercase font-bold rounded shadow-md hover:bg-[#0284c7] transition-colors z-10">
                          About AEC
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              {/* Standard Links */}
              <li className="h-full flex items-center px-4 group">
                <Link href="/#industries" className={`relative font-heading font-bold text-sm tracking-widest uppercase flex items-center transition-colors h-full ${isIndustriesActive ? 'text-[#0ea5e9]' : 'text-zinc-800 dark:text-white hover:text-[#0ea5e9]'}`}>
                  Industries
                  {isIndustriesActive && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#0ea5e9]" />
                  )}
                </Link>
              </li>
              <li className="h-full flex items-center px-4 group">
                <Link href="/about" className={`relative font-heading font-bold text-sm tracking-widest uppercase flex items-center transition-colors h-full ${isAboutActive ? 'text-[#0ea5e9]' : 'text-zinc-800 dark:text-white hover:text-[#0ea5e9]'}`}>
                  About Us
                  {isAboutActive && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#0ea5e9]" />
                  )}
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-6 z-50">
            <ThemeToggle />
            <button className="text-zinc-800 dark:text-white hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] transition-colors hidden sm:block" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-6 h-6" />
            </button>
            <button className="text-zinc-800 dark:text-white hover:text-[#0ea5e9] transition-colors hidden sm:block" onClick={() => alert('Coming soon!')}>
              <User className="w-6 h-6" />
            </button>
            <button className="text-zinc-800 dark:text-white hover:text-[#0ea5e9] transition-colors relative" onClick={() => alert('Coming soon!')}>
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-600 text-white font-mono text-[10px] font-bold px-1.5 py-0.5 rounded">
                0
              </span>
            </button>
            
            {/* Brutalist Quote Button */}
            <Link href="/contact" className="hidden xl:flex items-center justify-center bg-transparent border-2 border-zinc-800 dark:border-white text-zinc-900 dark:text-white font-heading font-bold uppercase tracking-widest px-8 py-3 hover:bg-zinc-800 hover:text-white dark:hover:bg-white dark:hover:text-[#030014] transition-colors ml-4 rounded-full">
              Get Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-zinc-800 dark:text-white hover:text-[#0ea5e9] transition-colors ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden absolute top-[100%] left-0 w-full bg-white dark:bg-[#030014] border-t border-zinc-200 dark:border-white/10 transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col px-6 space-y-4">
            <Link href="/" className="font-heading font-black text-2xl text-zinc-900 dark:text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/products" className="font-heading font-black text-2xl text-zinc-900 dark:text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link href="/products/compressors" className="font-heading font-black text-2xl text-[#0ea5e9] uppercase" onClick={() => setIsMobileMenuOpen(false)}>Air Compressors</Link>
            <Link href="/#industries" className="font-heading font-black text-2xl text-zinc-900 dark:text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
            <Link href="/about" className="font-heading font-black text-2xl text-zinc-900 dark:text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="font-heading font-black text-2xl text-[#0ea5e9] uppercase mt-4" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
          </div>
        </div>
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
