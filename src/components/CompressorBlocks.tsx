'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Box, ArrowRight, Settings, Zap } from 'lucide-react';

const BLOCKS = [
  {
    id: 'air',
    title: 'AIR Compressor',
    image: '/booklet/blue-compressor.png',
    description: 'High efficiency oil-injected rotary screw compressors for continuous industrial applications.',
    models: [
      { name: '11kW - 30kW Series', specs: '7 - 13 Bar | High Efficiency' },
      { name: '37kW - 75kW Series', specs: '7 - 10 Bar | Heavy Duty' },
      { name: '90kW - 250kW Series', specs: '7 - 10 Bar | Industrial Scale' },
      { name: 'Variable Speed Drive (VSD)', specs: 'Energy Saving | 22kW - 160kW' }
    ],
    accessories: [
      { name: 'Rotary Screw Oil', specs: 'Synthetic Lubricant' },
      { name: 'Air/Oil Separators', specs: 'OEM Replacement Parts' },
      { name: 'Refrigerated Air Dryers', specs: 'Moisture Control Systems' }
    ]
  },
  {
    id: 'piston',
    title: 'Piston Compressor',
    image: null,
    description: 'Heavy duty reciprocating air compressors built with cast iron blocks for maximum durability and peak loads.',
    models: [
      { name: '2HP - 5HP Single Stage', specs: '8 Bar | Light Industrial' },
      { name: '7.5HP - 15HP Two Stage', specs: '12 Bar | Heavy Industrial' },
      { name: '20HP - 30HP Multi-Stage', specs: '15 Bar | High Pressure' }
    ],
    accessories: [
      { name: 'Piston Oil', specs: 'High Temp Lubricant' },
      { name: 'Air Intake Filters', specs: 'Heavy Duty Filtration' },
      { name: 'Vertical Air Receivers', specs: 'Storage Tanks' }
    ]
  },
  {
    id: 'oilfree',
    title: 'Oil-Free Compressor',
    image: null,
    description: '100% oil-free air compressors for critical applications in food, beverage, and medical industries.',
    models: [
      { name: 'Oil-Free Rotary Screw', specs: 'ISO Class 0 Air | 15kW - 300kW' },
      { name: 'Oil-Free Scroll', specs: 'Ultra Quiet | 2kW - 22kW' },
      { name: 'Oil-Free Piston', specs: 'Medical / Dental | 8 Bar' }
    ],
    accessories: [
      { name: 'Desiccant Air Dryers', specs: 'Ultra Dry Air Solutions' },
      { name: 'Sterile Filters', specs: 'Medical Grade Filtration' },
      { name: 'Teflon Coating Kits', specs: 'Maintenance Spares' }
    ]
  },
  {
    id: 'portable',
    title: 'Portable Compressor',
    image: null,
    description: 'Diesel and electric driven portable air compressors for construction, mining, and outdoor applications.',
    models: [
      { name: 'Diesel Portable', specs: 'Rugged | 175 - 1200 CFM' },
      { name: 'Electric Portable', specs: 'Emission-Free | 130 - 400 CFM' },
      { name: 'Skid Mounted', specs: 'Heavy Duty Transportable' }
    ],
    accessories: [
      { name: 'Pneumatic Hoses', specs: 'High Pressure Delivery' },
      { name: 'Jack Hammers & Drills', specs: 'Construction Tools' },
      { name: 'Tow Hitch Assemblies', specs: 'Transport Accessories' }
    ]
  }
];

export default function CompressorBlocks() {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-16 mb-32 z-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {BLOCKS.map((block) => {
          const isExpanded = expandedBlock === block.id;

          return (
            <motion.div
              layout
              key={block.id}
              className={`relative flex flex-col bg-[#080808] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${isExpanded ? 'shadow-[0_0_40px_rgba(34,211,238,0.1)]' : 'shadow-2xl'}`}
            >
              {/* Image Header Area - Clickable to Expand */}
              <div 
                className="relative h-[300px] md:h-[400px] w-full cursor-pointer group bg-[#0A0A0A] overflow-hidden"
                onClick={() => setExpandedBlock(isExpanded ? null : block.id)}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                
                {block.image ? (
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-contain p-8 transform group-hover:scale-105 transition-transform duration-700 z-10"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10">
                    <Box className="w-24 h-24 mb-6 text-white" strokeWidth={1} />
                    <span className="font-mono text-sm tracking-widest uppercase text-white">Image Rendering...</span>
                  </div>
                )}
                
                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none" />

                <div className="absolute bottom-0 left-0 w-full p-8 z-30 flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight uppercase">
                      {block.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base font-body max-w-md line-clamp-2">
                      {block.description}
                    </p>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md transition-transform duration-500 shrink-0 ${isExpanded ? 'rotate-180 bg-cyan-500/20 border-cyan-500/50' : 'group-hover:-translate-y-2'}`}>
                    <ChevronDown className={`w-6 h-6 ${isExpanded ? 'text-cyan-400' : 'text-white'}`} />
                  </div>
                </div>
              </div>

              {/* Expandable Content Area */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-t border-white/5 bg-[#050505] flex flex-col"
                  >
                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                      
                      {/* Models Column */}
                      <div>
                        <h4 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-white/40 mb-6 border-b border-white/10 pb-3">Compressor Models</h4>
                        <div className="flex flex-col gap-4">
                          {block.models.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group">
                              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                                <Zap className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-sans font-semibold text-white/90 text-base md:text-lg leading-tight">{item.name}</span>
                                <span className="font-mono text-cyan-500/60 text-xs md:text-sm uppercase tracking-wider mt-1.5">{item.specs}</span>
                              </div>
                              <ArrowRight className="w-5 h-5 text-white/20 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Accessories / Parts Column */}
                      <div>
                        <h4 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-white/40 mb-6 border-b border-white/10 pb-3">Required Parts & Accessories</h4>
                        <div className="flex flex-col gap-4">
                          {block.accessories.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer group">
                              <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white transition-colors">
                                <Settings className="w-5 h-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-sans font-semibold text-white/80 text-base md:text-lg leading-tight">{item.name}</span>
                                <span className="font-mono text-white/40 text-xs md:text-sm uppercase tracking-wider mt-1.5">{item.specs}</span>
                              </div>
                              <ArrowRight className="w-5 h-5 text-white/20 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                    
                    <div className="p-8 md:p-12 pt-0">
                       <button className="w-full py-5 rounded-xl border border-white/10 text-white/60 font-mono text-sm uppercase tracking-widest hover:bg-white text-center hover:text-black hover:border-white transition-all duration-300">
                         Request Full Specifications
                       </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
