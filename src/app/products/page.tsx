import React from 'react';
import { Metadata } from 'next';
import CategoryGrid from '@/components/CategoryGrid';

export const metadata: Metadata = {
  title: "Industrial Product Catalog",
  description: "Browse our extensive catalog of pneumatic systems, hydraulic pumps, air compressors, and precision industrial fittings.",
};

export default function ProductsPage() {
  return (
    <div className="flex-1 flex flex-col w-full relative z-10 font-body">
      <div className="pt-24 text-center border-b border-zinc-200 dark:border-white/5 pb-12 transition-colors duration-500">
        <h1 className="font-heading font-black text-5xl text-zinc-900 dark:text-white mb-4 transition-colors duration-500">Product Catalog</h1>
        <p className="font-body text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-500">Explore our extensive range of high-tolerance fluid power equipment, pneumatic components, and precision industrial fittings.</p>
      </div>
      
      <CategoryGrid />
      
      <footer className="w-full bg-zinc-50 dark:bg-[#030014] border-t border-zinc-200 dark:border-white/5 py-12 text-center mt-auto transition-colors duration-500">
        <p className="font-body text-zinc-500 dark:text-slate-500 text-sm transition-colors duration-500">&copy; {new Date().getFullYear()} Amal Engineering Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
