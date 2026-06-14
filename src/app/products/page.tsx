import React from 'react';
import CategoryGrid from '@/components/CategoryGrid';

export default function ProductsPage() {
  return (
    <div className="flex-1 flex flex-col w-full relative z-10 font-body">
      <div className="pt-24 text-center border-b border-white/5 pb-12">
        <h1 className="font-heading font-black text-5xl text-white mb-4">Product Catalog</h1>
        <p className="font-body text-slate-400 max-w-2xl mx-auto">Explore our extensive range of high-tolerance fluid power equipment, pneumatic components, and precision industrial fittings.</p>
      </div>
      
      <CategoryGrid />
      
      <footer className="w-full bg-[#0A192F] border-t border-white/5 py-12 text-center mt-auto">
        <p className="font-body text-slate-500 text-sm">&copy; {new Date().getFullYear()} Amal Engineering Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
