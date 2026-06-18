'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const TOP_BRANDS = [
  { 
    name: 'Yuken Hydraulic Pumps', 
    division: 'Hydraulic Systems',
    route: '/brands/yuken', 
    img: '/booklet/yuken-hydraulic.jpg' 
  },
  { 
    name: 'Polyhydron Radial Pumps', 
    division: 'Industrial Pumps',
    route: '/brands/polyhydron', 
    img: '/booklet/polyhydron pumps.jpg' 
  },
  { 
    name: 'Hydroline Filters & Valves', 
    division: 'Steering & Filtration',
    route: '/brands/hydroline', 
    img: '/booklet/hydroline prd.jpg' 
  },
  { 
    name: 'Hyloc Industrial Couplings', 
    division: 'Mechanical Drive',
    route: '/brands/hyloc', 
    img: '/booklet/hyloc coupling prd.jpg' 
  },
];

export default function FeaturedCarousel() {
  return (
    <section className="w-full py-32 bg-white dark:bg-zinc-950 relative z-10 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Corporate Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-200 dark:border-zinc-800 pb-8 transition-colors duration-500">
          <div>
            <div className="font-mono text-[#0055A4] font-bold tracking-[0.3em] uppercase mb-4 flex items-center">
              <span className="w-8 h-1 bg-[#0055A4] mr-4 inline-block"></span>
              Featured Partners
            </div>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-zinc-900 dark:text-white uppercase tracking-tighter leading-none transition-colors duration-500">
              Top <br/> <span className="text-[#0055A4]">Brands</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <p className="font-body text-zinc-600 dark:text-zinc-400 leading-relaxed border-l-4 border-[#0055A4] pl-4 transition-colors duration-500">
              We partner with the world's leading engineering manufacturers to deliver uncompromising quality.
            </p>
          </div>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {TOP_BRANDS.map((brand, idx) => (
            <Link 
              href={brand.route} 
              key={idx} 
              className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#0055A4] dark:hover:border-[#0055A4] transition-all duration-300 overflow-hidden flex flex-col h-[450px] shadow-sm hover:shadow-xl rounded-sm"
            >
              {/* Image Section */}
              <div className="w-full h-[60%] relative bg-white p-8 flex items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
                 <Image 
                   src={brand.img} 
                   alt={brand.name}
                   fill
                   className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col justify-between relative bg-zinc-50 dark:bg-zinc-900 group-hover:bg-[#0055A4] dark:group-hover:bg-[#0055A4] transition-colors duration-300">
                <div>
                  <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-500 group-hover:text-white/80 tracking-widest uppercase mb-2 transition-colors">
                    {brand.division}
                  </div>
                  <h3 className="font-heading font-black text-2xl text-zinc-900 dark:text-white group-hover:text-white uppercase tracking-wide leading-tight transition-colors">
                    {brand.name}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-white/30 rounded-full flex items-center justify-center transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-zinc-800 group-hover:bg-transparent dark:group-hover:bg-transparent">
                  <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
