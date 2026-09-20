import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Target, Shield, Gauge } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const HERO_PRODUCTS = [
  {
    name: '10 HP Rotary Screw',
    category: 'Screw Compressor',
    specs: 'Tank Mounted',
    icon: Zap,
    image: '/compressor-10hp.png',
    link: '/products/compressors?highlight=screw-compressor-10-hp-rotary-screw-compressor'
  },
  {
    name: '5 HP Compact Piston',
    category: 'Piston Compressor',
    specs: 'Direct Drive',
    icon: Target,
    image: '/compressor-5hp.png',
    link: '/products/compressors?highlight=piston-compressor-5-hp-air-compressor'
  },
  {
    name: '50 HP Industrial',
    category: 'Screw Compressor',
    specs: '190-220 CFM',
    icon: Shield,
    image: '/compressor-50hp.png',
    link: '/products/compressors?highlight=screw-compressor-50-hp-industrial-screw-compressor'
  },
  {
    name: '7.5 HP Heavy Duty',
    category: 'Piston Compressor',
    specs: 'Industrial Base',
    icon: Gauge,
    image: '/compressor-7.5hp.png',
    link: '/products/compressors?highlight=piston-compressor-7.5-hp-air-compressor'
  }
];

export default function HeroProducts() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-20 bg-zinc-50 dark:bg-[#030014] border-t-4 border-[#0ea5e9] transition-colors duration-500 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-10 z-0 invert dark:invert-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-200 dark:border-white/10 pb-8 transition-colors duration-500">
            <div className="max-w-3xl">
              <h2 className="font-heading font-black text-5xl md:text-7xl text-slate-900 dark:text-white uppercase tracking-tighter mb-4 leading-none transition-colors duration-500">
                Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-cyan-400 dark:to-cyan-300">Series</span>
              </h2>
              <p className="font-body text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl transition-colors duration-500">
                Engineered for continuous duty. Our most requested high-performance industrial compression systems.
              </p>
            </div>
            <Link 
              href="/products/compressors"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0ea5e9] text-white font-bold font-mono text-sm uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-500 rounded-sm shrink-0 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-xl"
            >
              Explore All Series <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <ScrollReveal key={idx} animation="fade" delay={idx * 0.1} className="h-full">
                <Link href={product.link} className="block h-full group cursor-pointer">
                  {/* Cyberpunk/Industrial Card */}
                  <div className="h-full flex flex-col bg-white/80 dark:bg-[#050505]/80 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-8 hover:border-[#0ea5e9]/60 transition-all duration-700 relative overflow-hidden group-hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-[#0ea5e9]/10 rounded-xl">
                    
                    {/* Giant Number Background */}
                    <div className="absolute -right-4 top-10 font-black text-[120px] leading-none text-slate-900/[0.03] dark:text-white/5 group-hover:text-[#0ea5e9]/10 group-hover:-translate-x-4 transition-all duration-700 font-heading select-none pointer-events-none">
                      0{idx + 1}
                    </div>

                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-[#0ea5e9] group-hover:w-full transition-all duration-700 ease-out" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      
                      {/* Top Meta */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-zinc-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center rounded-xl group-hover:bg-[#0ea5e9]/10 group-hover:border-[#0ea5e9]/50 transition-all duration-500">
                          <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#0ea5e9] transition-colors duration-500" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0ea5e9] font-bold text-right max-w-[120px]">
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Product Image floating in center */}
                      <div className="w-full h-64 md:h-72 relative my-auto flex items-center justify-center mb-6">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                        <Image 
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-contain drop-shadow-2xl filter group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 z-10 scale-105 mx-auto"
                        />
                      </div>

                      {/* Content block pinned to bottom */}
                      <div className="flex-grow flex flex-col justify-end pt-4 border-t border-slate-200 dark:border-white/10 relative z-20">
                        <h3 className="font-heading font-black text-2xl md:text-3xl text-slate-900 dark:text-white leading-tight mb-6 group-hover:text-[#0ea5e9] dark:group-hover:text-cyan-300 transition-colors duration-500">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Configuration</span>
                            <span className="font-sans text-sm text-slate-700 dark:text-slate-300 font-bold tracking-wide transition-colors duration-500">{product.specs}</span>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#0ea5e9] group-hover:border-[#0ea5e9] transition-all duration-500 bg-white dark:bg-transparent shrink-0">
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
