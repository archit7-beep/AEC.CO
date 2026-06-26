import React from 'react';
import { Metadata } from 'next';
import { IndustriesServed } from '@/components/InformationSections';

export const metadata: Metadata = {
  title: "Industries Served | Amal Engineering Corporation",
  description: "Discover how Amal Engineering Corporation's industrial fluid power and pneumatic systems empower diverse global sectors.",
  openGraph: {
    title: "Industries We Serve",
    description: "Amal Engineering Corporation empowers manufacturing, construction, automotive, and power generation sectors.",
  }
};

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
