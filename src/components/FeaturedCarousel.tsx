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
    <section className="w-full py-32 bg-[#030014] relative z-10 border-t-4 border-[#0ea5e9]">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Brutalist Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-2 border-white/10 pb-8">
          <div>
            <div className="font-mono text-[#0ea5e9] font-bold tracking-[0.3em] uppercase mb-4 flex items-center">
              <span className="w-8 h-1 bg-[#0ea5e9] mr-4 inline-block"></span>
              Featured Partners
            </div>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
              Top <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Brands</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <p className="font-mono text-sm text-slate-400 uppercase tracking-wider leading-relaxed border-l-2 border-[#0ea5e9] pl-4">
              We partner with the world's leading engineering manufacturers to deliver uncompromising quality.
            </p>
          </div>
        </div>

        {/* Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {TOP_BRANDS.map((brand, idx) => (
            <Link 
              href={brand.route} 
              key={idx} 
              className="group relative bg-[#110b29] border-2 border-transparent hover:border-[#0ea5e9] transition-all duration-300 overflow-hidden flex flex-col h-[450px]"
            >
              {/* Image Section */}
              <div className="w-full h-[60%] relative bg-white p-8 flex items-center justify-center overflow-hidden">
                 <Image 
                   src={brand.img} 
                   alt={brand.name}
                   fill
                   className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-[#030014]/10 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
              </div>
              
              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col justify-between relative bg-[#030014] border-t-2 border-white/5 group-hover:bg-[#0ea5e9] transition-colors duration-300">
                <div>
                  <div className="font-mono text-[10px] text-slate-400 group-hover:text-[#030014]/70 tracking-widest uppercase mb-2 transition-colors">
                    {brand.division}
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white group-hover:text-[#030014] uppercase tracking-wide leading-tight transition-colors">
                    {brand.name}
                  </h3>
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-white/20 group-hover:border-[#030014] rounded-full flex items-center justify-center transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#030014]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
