import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import ComingSoonButton from './ComingSoonButton';

const CATALOG_ITEMS = [
  { 
    id: 'hoses',
    brand: 'Polyhose', 
    name: 'Hydraulic Hoses', 
    desc: 'Rubber Hoses, Thermoplastic Hoses, PTFE Hoses, and Industrial Hoses.', 
    img: '/booklet/hoses.jpg' 
  },
  { 
    id: 'couplings',
    brand: 'Hydax & Hyloc', 
    name: 'Gear & Fluid Couplings', 
    desc: 'Precision industrial couplings for fluid and mechanical power transmission.', 
    img: '/booklet/coupling.jpg' 
  },
  { 
    id: 'pneumatics',
    brand: 'FESTO & Janatics', 
    name: 'Pneumatic Systems', 
    desc: 'Cylinders, FRL units, Solenoid Valves, and Air automation equipment.', 
    img: '/booklet/pneumatics.jpg' 
  },
  { 
    id: 'pumps',
    brand: 'Yuken & Rexroth', 
    name: 'Hydraulic Pumps', 
    desc: 'Vane Pumps, Gear Pumps, Axial Piston Pumps, and Directional Controls.', 
    img: '/booklet/pumps.jpg' 
  },
  { 
    id: 'fittings',
    brand: 'Amal Engineering', 
    name: 'Fittings & Connectors', 
    desc: 'High-tolerance joint mechanics and custom fluid power solutions.', 
    img: '/booklet/fiiting.jpeg' 
  },
  { 
    id: 'steering',
    brand: 'Danfoss & Hydroline', 
    name: 'Steering Units', 
    desc: 'Heavy duty orbital steering units and hydrostatic steering controls.', 
    img: '/booklet/steering unit.jpg' 
  },
  { 
    id: 'compressors',
    brand: 'AEC & Kelvin', 
    name: 'Air Compressors', 
    desc: 'Amal Engg manufactured compressors and industrial air automation spares.', 
    img: '/booklet/new air compressoer.png' 
  }
];

export default function CategoryGrid() {
  return (
    <section className="w-full py-16 relative z-10" id="products">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="font-body text-[#0ea5e9] font-semibold tracking-wider uppercase mb-3">Full Catalog</h4>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-zinc-900 dark:text-white leading-tight transition-colors duration-500">
              Our Products & Brands
            </h2>
          </div>
          <ComingSoonButton className="mt-6 md:mt-0 text-zinc-900 dark:text-white border-b border-[#0ea5e9] pb-1 font-body font-medium hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] transition-colors duration-500 flex items-center">
            Download PDF Catalog <ArrowUpRight className="w-4 h-4 ml-2" />
          </ComingSoonButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATALOG_ITEMS.map((item, idx) => {
            const isLastAndOrphanedLg = idx === CATALOG_ITEMS.length - 1 && CATALOG_ITEMS.length % 3 === 1;
            
            return (
            <Link 
              key={idx}
              href={`/products/${item.id}`}
              className={`group cursor-pointer rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-[#030014]/40 backdrop-blur-md overflow-hidden hover:border-[#0ea5e9]/40 dark:hover:border-[#0ea5e9]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,32,70,0.1)] dark:hover:shadow-[0_20px_40px_rgba(11,32,70,0.5)] block ${isLastAndOrphanedLg ? 'lg:col-start-2' : ''}`}
            >
              <div className="w-full h-72 relative overflow-hidden flex items-center justify-center border-b border-zinc-200 dark:border-white/5 bg-white transition-colors duration-500">
                <Image 
                  src={item.img} 
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="font-mono text-[10px] text-[#0ea5e9] tracking-widest uppercase mb-2">
                  {item.brand}
                </div>
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white mb-3 group-hover:text-[#0ea5e9] transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="font-body text-zinc-600 dark:text-slate-400 font-light transition-colors duration-500">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center text-[#0ea5e9] font-body text-sm font-medium">
                  View Specifications Table <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
