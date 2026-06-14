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
    brand: 'AEC & Atlas Copco', 
    name: 'Air Compressors', 
    desc: 'Amal Engg manufactured compressors and industrial air automation spares.', 
    img: '/booklet/aec-compressor.png' 
  }
];

export default function CategoryGrid() {
  return (
    <section className="w-full py-16 relative z-10" id="products">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="font-body text-[#FBCC13] font-semibold tracking-wider uppercase mb-3">Full Catalog</h4>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white leading-tight">
              Our Products & Brands
            </h2>
          </div>
          <ComingSoonButton className="mt-6 md:mt-0 text-white border-b border-[#FBCC13] pb-1 font-body font-medium hover:text-[#FBCC13] transition-colors flex items-center">
            Download PDF Catalog <ArrowUpRight className="w-4 h-4 ml-2" />
          </ComingSoonButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATALOG_ITEMS.map((item, idx) => (
            <Link 
              key={idx}
              href={`/products/${item.id}`}
              className="group cursor-pointer rounded-xl border border-white/5 bg-[#0A192F]/40 backdrop-blur-md overflow-hidden hover:border-[#FBCC13]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,32,70,0.5)] block"
            >
              <div className="w-full h-72 relative overflow-hidden flex items-center justify-center border-b border-white/5 bg-white">
                <Image 
                  src={item.img} 
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="font-mono text-[10px] text-[#FBCC13] tracking-widest uppercase mb-2">
                  {item.brand}
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-[#FBCC13] transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-slate-400 font-light">
                  {item.desc}
                </p>
                <div className="mt-6 flex items-center text-[#FBCC13] font-body text-sm font-medium">
                  View Specifications Table <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
