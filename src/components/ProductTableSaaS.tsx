'use client';

import React, { useEffect, useState } from 'react';
import { ProductRow } from '@/lib/catalogData';
import { ChevronDown, ChevronUp, Box, Activity, Layers, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductTableProps {
  headers: string[];
  products: ProductRow[];
}

export default function ProductTableSaaS({ headers, products }: ProductTableProps) {
  const [targetId, setTargetId] = useState('');
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (idx: number) => {
    const newSet = new Set(expandedRows);
    if (newSet.has(idx)) newSet.delete(idx);
    else newSet.add(idx);
    setExpandedRows(newSet);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const updateTarget = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash) {
        setTargetId(currentHash);
        products.forEach((prod, idx) => {
          if (prod.variations?.some(v => v.partNumber.replace(/\s+/g, '-').toLowerCase() === currentHash)) {
            setExpandedRows(prev => {
              const newSet = new Set(prev);
              newSet.add(idx);
              return newSet;
            });
          }
        });
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => { setTargetId(''); }, 2000);
      }
    };
    updateTarget();
    window.addEventListener('hashchange', updateTarget);
    return () => { window.removeEventListener('hashchange', updateTarget); clearTimeout(timeoutId); };
  }, [products]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Modern Data Grid Header (Hidden on small screens) */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-4 bg-white dark:bg-[#030014] rounded-2xl border border-slate-200 dark:border-white/5 mb-2">
        {headers.map((header, i) => (
          <div key={i} className={`font-sans text-xs text-slate-500 dark:text-white/40 tracking-widest uppercase font-semibold ${
            i === 0 ? 'col-span-3' : 
            i === headers.length - 1 ? 'col-span-2 text-right' : 'col-span-2'
          }`}>
            {header}
          </div>
        ))}
      </div>

      {/* New Age Listing Cards */}
      {products.map((row, idx) => {
        const rowId = row.model.replace(/\s+/g, '-').toLowerCase();
        const isTarget = targetId === rowId;
        const isExpanded = expandedRows.has(idx);
        
        return (
          <motion.div 
            key={idx}
            id={rowId}
            layout
            className={`flex flex-col bg-white dark:bg-[#030014] rounded-[2rem] border transition-all duration-500 overflow-hidden ${
              isTarget 
                ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500' 
                : 'border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5'
            }`}
          >
            {/* Primary Row Content */}
            <div 
              onClick={() => row.variations && toggleRow(idx)}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-8 py-8 ${row.variations ? 'cursor-pointer group' : ''}`}
            >
              {/* Model / Name */}
              <div className="col-span-1 lg:col-span-3 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 dark:from-cyan-500/10 to-transparent flex items-center justify-center border border-blue-500/20 dark:border-cyan-500/20 group-hover:border-blue-500/40 dark:group-hover:border-cyan-500/40 transition-colors shadow-[inset_0_0_20px_rgba(59,130,246,0.05)]">
                  <Box className="w-5 h-5 text-blue-400 dark:text-cyan-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-slate-900 dark:text-white text-2xl tracking-tighter">{row.model}</h4>
                  <p className="font-sans text-[10px] text-blue-500/80 dark:text-cyan-400/80 uppercase tracking-[0.2em] mt-1 font-semibold">System Core</p>
                </div>
              </div>

              {/* Specs (Size, Pressure, Flow) */}
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
                <span className="font-mono font-bold text-slate-900 dark:text-white text-xl tracking-tight">{row.size}</span>
                <span className="lg:hidden text-[10px] text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">{headers[1]}</span>
              </div>
              
              <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
                <span className="font-mono font-bold text-slate-900 dark:text-white text-xl tracking-tight">{row.maxPressure}</span>
                <span className="lg:hidden text-[10px] text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">{headers[2]}</span>
              </div>

              <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
                <span className="font-mono font-bold text-slate-900 dark:text-white text-xl tracking-tight">{row.flowRate || row.material || 'N/A'}</span>
                <span className="lg:hidden text-[10px] text-slate-500 dark:text-white/40 mt-1 uppercase tracking-widest">{headers[3]}</span>
              </div>

              {/* Status & Toggle */}
              <div className="col-span-1 lg:col-span-3 flex items-center justify-start lg:justify-end gap-6">
                {row.inStock ? (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">In Stock</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-white/40" />
                    <span className="text-slate-400 dark:text-white/40 text-xs font-bold uppercase tracking-widest">MTO Build</span>
                  </div>
                )}
                
                {row.variations && (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-blue-500 dark:bg-cyan-500 text-slate-100 shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(34,211,238,0.2)]' : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white group-hover:bg-slate-200 dark:group-hover:bg-white/10 border border-slate-200 dark:border-white/10 group-hover:border-slate-300 dark:group-hover:border-white/20'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                  </div>
                )}
              </div>
            </div>

            {/* Expandable Variations Data Grid */}
            <AnimatePresence>
              {isExpanded && row.variations && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Layers className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
                      <h5 className="font-sans font-semibold text-slate-700 dark:text-white tracking-wide">Available Configurations</h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {row.variations.map((v, vIdx) => {
                        const vId = v.partNumber.replace(/\s+/g, '-').toLowerCase();
                        const isVTarget = targetId === vId;

                        return (
                          <div 
                            key={vIdx}
                            id={vId}
                            className={`flex flex-col p-5 rounded-2xl border transition-all ${
                              isVTarget 
                                ? 'bg-blue-50 dark:bg-cyan-500/10 border-blue-500/50 dark:border-cyan-500/50' 
                                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <span className="font-sans text-sm font-medium text-slate-700 dark:text-zinc-300 pr-4 leading-relaxed">{v.specs}</span>
                              {v.inStock ? (
                                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest shrink-0 mt-1">Stocked</span>
                              ) : (
                                <span className="text-slate-500 dark:text-white/40 text-xs font-bold uppercase tracking-widest shrink-0 mt-1">MTO</span>
                              )}
                            </div>
                            
                            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
                              <Hash className="w-3.5 h-3.5 text-slate-500 dark:text-white/40" />
                              <span className="font-mono text-sm text-slate-500 dark:text-white/40">{v.partNumber}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
