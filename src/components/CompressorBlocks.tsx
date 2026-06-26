'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Box, ArrowRight, Settings, Zap } from 'lucide-react';

interface CompressorBlock {
  id: string;
  title: string;
  image: string | null;
  description: string;
  models: { name: string; specs: string }[];
  accessories: { name: string; specs: string }[];
}

const BLOCKS: CompressorBlock[] = [
  {
    id: 'air',
    title: 'Screw Compressor',
    image: '/booklet/screw-compressor.png',
    description: 'High efficiency oil-injected rotary screw compressors for continuous industrial applications.',
    models: [
      { name: '10 HP Rotary Screw Compressor', specs: '10 HP / Tank Mounted' },
      { name: '15 HP Rotary Screw Compressor', specs: '15 HP / Rotary Screw' },
      { name: '30 HP Screw Compressor', specs: '30 HP / Heavy Duty' },
      { name: '50 HP Industrial Screw Compressor', specs: '50 HP / 12 Bar / 190-220 CFM' },
      { name: 'Screw Compressor for Pharmaceutical', specs: 'Tank & Dryer Included' }
    ],
    accessories: []
  },
  {
    id: 'piston',
    title: 'Piston Compressor',
    image: '/booklet/piston-compressor.png',
    description: 'Heavy duty reciprocating air compressors built with cast iron blocks for maximum durability and peak loads.',
    models: [
      { name: '1 HP Air Compressor', specs: '1 HP / General Duty' },
      { name: '2 HP Double Piston Compressor', specs: '2 HP / 5.96 CFM / 100 LTR Tank' },
      { name: 'Base Plate Mounted Air Compressor', specs: '2 HP / Compact Mount' },
      { name: '3 HP Air Compressor', specs: '3 HP / Medium Duty' },
      { name: '5 HP Single Stage Air Compressor', specs: '5 HP / Single Stage' },
      { name: '5 HP Two Stage Compressor', specs: '5 HP / Two Stage' },
      { name: '7.5 HP Air Compressor', specs: '7.5 HP / Industrial' },
      { name: '10 HP Air Compressor', specs: '10 HP' },
      { name: '15 HP PET Bottle High Pressure Compressor', specs: '15 HP / PET Blowing' },
      { name: 'Mini Air Compressor', specs: 'Compact Applications' },
      { name: 'Air Cooled Compressor', specs: '1 HP to 25 HP' },
      { name: 'Motor Driven Compressor', specs: '0-100% Displacement Adjustment' },
      { name: 'Air Compressor For Tyre Works', specs: '17.32 CFM' },
      { name: 'Air Compressor For Laser Machine', specs: 'Reliable High Pressure' },
      { name: 'Low Pressure Compressor', specs: 'Low Pressure Applications' },
      { name: 'Car Cleaning Air Compressor', specs: 'Car Wash Applications' },
      { name: 'Multi Stage High Pressure Air Compressor', specs: 'High Pressure Output' },
      { name: '20 HP High Pressure Air Compressor', specs: '20 HP / Heavy Duty' },
      { name: '25 HP High Pressure Air Compressor', specs: '25 HP / Extreme Duty' },
      { name: 'Two Stage Compressor', specs: 'Standard Two Stage' },
      { name: 'Single Stage Dry Vacuum Pumps', specs: 'Dry Vacuum Applications' }
    ],
    accessories: []
  },
  {
    id: 'dryer',
    title: 'Air Dryer',
    image: '/booklet/air dryer.png',
    description: 'Refrigerated and desiccant air dryers for complete moisture control and high-quality air treatment.',
    models: [
      { name: 'Compressed Air Dryer', specs: 'Standard Drying' },
      { name: 'Automatic Air Dryer', specs: 'Constant Dew Point' },
      { name: 'Industrial Air Dryers', specs: 'Heavy Duty Applications' },
      { name: 'Low Pressure Air Dryers', specs: 'Low Pressure Applications' },
      { name: '80 Cfm Refrigerated Air Dryer', specs: '80 CFM' }
    ],
    accessories: []
  },
  {
    id: 'spares',
    title: 'Spare Parts',
    image: '/booklet/spare parts.jpg',
    description: 'Genuine OEM replacement parts, lubricants, and filtration components for maximum reliability.',
    models: [
      { name: 'Air Compressor Bare Block', specs: 'OEM Replacement Blocks' },
      { name: 'Compressor Top Block', specs: 'Top Block Assembly' },
      { name: 'Bare Block Air Compressor', specs: 'Complete Bare Block' },
      { name: 'Connecting Rods', specs: 'Precision Forged' },
      { name: 'Automotive Pistons', specs: 'High Durability' },
      { name: 'Air/Oil Separators', specs: 'OEM Replacement Parts' },
      { name: 'Air Intake Filters', specs: 'Heavy Duty Filtration' },
      { name: 'Rotary Screw Oil', specs: 'Synthetic Lubricant' },
      { name: 'Piston Oil', specs: 'High Temp Lubricant' },
      { name: 'Vertical Air Receivers', specs: 'Storage Tanks' }
    ],
    accessories: []
  }
];

export default function CompressorBlocks() {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && BLOCKS.find(b => b.id === hash)) {
        setExpandedBlock(hash);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };
    
    // Check on mount
    handleHashChange();
    
    // Listen for hash changes if user clicks link while already on page
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 mb-32 z-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        {BLOCKS.map((block) => {
          const isExpanded = expandedBlock === block.id;

          return (
            <motion.div
              layout
              id={block.id}
              key={block.id}
              className={`relative flex flex-col bg-white dark:bg-[#030014] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-cyan-500/30 ${isExpanded ? 'shadow-[0_0_40px_rgba(34,211,238,0.1)]' : 'shadow-sm'}`}
            >
              {/* Image Header Area */}
              <div 
                className="relative h-[250px] md:h-[320px] w-full cursor-pointer group bg-transparent overflow-hidden"
                onClick={() => setExpandedBlock(isExpanded ? null : block.id)}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                
                {block.image ? (
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-contain p-2 md:p-4 transform scale-100 group-hover:scale-105 transition-transform duration-700 z-10"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10">
                    <Box className="w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-6 text-slate-800 dark:text-white" strokeWidth={1} />
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-slate-800 dark:text-white">Image Pending</span>
                  </div>
                )}
              </div>

              {/* Text & Toggle Area */}
              <div 
                className="p-8 md:p-10 flex flex-col flex-grow bg-white dark:bg-[#030014] cursor-pointer group"
                onClick={() => setExpandedBlock(isExpanded ? null : block.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight">
                    {block.title}
                  </h3>
                  <div className={`w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-white/5 backdrop-blur-md transition-transform duration-500 shrink-0 ${isExpanded ? 'rotate-180 bg-cyan-50 dark:bg-cyan-500/20 border-cyan-200 dark:border-cyan-500/30' : 'group-hover:-translate-y-2'}`}>
                    <ChevronDown className={`w-6 h-6 ${isExpanded ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-white/40'}`} />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-zinc-400 font-body mb-2 leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Expandable Content Area */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-t border-slate-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 flex flex-col"
                  >
                    <div className={`p-8 md:p-12 grid grid-cols-1 gap-10 md:gap-16 ${block.accessories.length > 0 ? 'md:grid-cols-2' : ''}`}>
                      
                      {/* Models Column */}
                      <div>
                        <h4 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 mb-6 border-b border-slate-200 dark:border-white/10 pb-3">{block.id === 'spares' ? 'Available Spare Parts' : 'Models & Types'}</h4>
                        <div className={block.accessories.length === 0 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "flex flex-col gap-4"}>
                          {block.models.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer group">
                              <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                {block.id === 'spares' ? <Settings className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-sans font-semibold text-slate-900 dark:text-white text-base md:text-lg leading-tight">{item.name}</span>
                                <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xs md:text-sm uppercase tracking-wider mt-1.5">{item.specs}</span>
                              </div>
                              <ArrowRight className="w-5 h-5 text-slate-300 dark:text-white/20 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Accessories / Parts Column */}
                      {block.accessories.length > 0 && (
                        <div>
                          <h4 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-slate-400 dark:text-white/40 mb-6 border-b border-slate-200 dark:border-white/10 pb-3">Service & Accessories</h4>
                          <div className="flex flex-col gap-4">
                            {block.accessories.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-5 p-4 rounded-xl hover:bg-white dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer group">
                                <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/60 group-hover:scale-110 transition-transform">
                                  <Settings className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-sans font-semibold text-slate-900 dark:text-white text-base md:text-lg leading-tight">{item.name}</span>
                                  <span className="font-mono text-slate-500 dark:text-white/40 text-xs md:text-sm uppercase tracking-wider mt-1.5">{item.specs}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 dark:text-white/20 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 md:p-12 pt-0">
                       <button className="w-full py-5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-900/60 dark:text-white/60 font-mono text-sm uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white text-center hover:text-white dark:hover:text-black hover:border-slate-900 dark:hover:border-white transition-all duration-300">
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
