'use client';

import React, { useState } from 'react';
import { INVENTORY } from '@/data/inventory';
import { Product } from '@/types/store';
import DetailDrawer from './DetailDrawer';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenSpecs = (product: Product) => {
    setSelectedProduct(product);
    setDrawerOpen(true);
  };

  // Magazine style column spanning logic for 12-column grid
  const getColSpan = (index: number) => {
    const pattern = [
      'lg:col-span-8', // 66% width
      'lg:col-span-4', // 33% width
      'lg:col-span-5', // 40% width
      'lg:col-span-7', // 60% width
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section className="relative z-10 w-full max-w-[1600px] mx-auto px-12 pb-32">
      
      {/* Magazine Layout Section Header */}
      <ScrollReveal animation="fade">
        <div className="mb-16 flex items-baseline space-x-6 border-b border-white/5 pb-8">
          <h2 className="font-sans text-5xl font-black uppercase tracking-tighter text-white">
            THE <span className="text-[#FBCC13] font-light italic pr-2">PORTFOLIO</span>
          </h2>
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-[0.2em]">
            {INVENTORY.length} HIGH-TOLERANCE SYSTEMS INDEXED
          </span>
        </div>
      </ScrollReveal>

      {/* Alternating Magazine-Style Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {INVENTORY.map((item, index) => (
          <ScrollReveal 
            key={item.id} 
            animation="fade" 
            className={`group rounded-2xl border border-white/5 bg-white/[0.01] p-10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-blue-950/15 hover:border-[#FBCC13]/20 hover:shadow-[0_20px_60px_-15px_rgba(6,19,58,0.5)] ${getColSpan(index)}`}
          >
            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-[9px] text-[#FBCC13] tracking-[0.2em] uppercase">
                {item.category} // {item.baseSku}
              </span>
              <span className="w-1.5 h-1.5 bg-[#FBCC13] rounded-full shadow-[0_0_8px_rgba(197,160,89,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <h3 className="font-sans text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider leading-tight mb-8">
              {item.name}
            </h3>
            
            <div className="flex-1 mt-auto">
              <button 
                onClick={() => handleOpenSpecs(item)}
                className="flex items-center space-x-3 text-slate-400 group-hover:text-[#FBCC13] transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.15em]"
              >
                <span className="border-b border-[#FBCC13]/30 pb-1">EXAMINE SPECIFICATIONS MATRIX</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <DetailDrawer 
        product={selectedProduct} 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
      />
    </section>
  );
}
