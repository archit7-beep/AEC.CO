import React from 'react';
import { IndustriesServed } from '@/components/InformationSections';

export default function IndustriesPage() {
  return (
    <div className="flex-1 flex flex-col w-full relative z-10 font-body">
      <div className="pt-24 text-center border-b border-white/5 pb-12">
        <h1 className="font-heading font-black text-5xl text-white mb-4">Industries Served</h1>
        <p className="font-body text-slate-400">Discover how Amal Engineering Corporation empowers diverse global sectors.</p>
      </div>
      
      <IndustriesServed />
      
      <footer className="w-full bg-[#030014] border-t border-white/5 py-12 text-center mt-auto">
        <p className="font-body text-slate-500 text-sm">&copy; {new Date().getFullYear()} Amal Engineering Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
