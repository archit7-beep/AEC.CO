'use client';

import React from 'react';
import { Search } from 'lucide-react';

export default function CommandHub() {
  const categories = ['Motors', 'Pistons', 'Pipes', 'Valves'];

  return (
    <div className="w-full mt-24 mb-16 px-12 relative z-20">
      {/* Glass Monolith Sheet */}
      <div className="bg-white/[0.01] backdrop-blur-3xl border border-white/10 rounded-xl p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 w-full relative flex items-center">
          <Search className="h-4 w-4 text-[#0ea5e9] absolute left-0 pointer-events-none" />
          <input 
            type="text" 
            placeholder="ENTER SKU OR CONFIGURATION MODEL TO ROUTE SPECIFICATIONS..."
            className="w-full bg-transparent text-slate-300 placeholder-slate-600 tracking-widest font-mono text-xs outline-none pl-8 py-2 border-b border-transparent focus:border-[#0ea5e9]/40 transition-colors"
          />
        </div>

        <div className="flex items-center gap-12 overflow-x-auto w-full lg:w-auto no-scrollbar pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-12">
          {categories.map(cat => (
            <button 
              key={cat}
              className="tracking-[0.2em] font-mono text-[9px] uppercase text-slate-500 hover:text-[#0ea5e9] transition-colors duration-300 whitespace-nowrap"
            >
              // {cat}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
