'use client';

import React, { useEffect, useState } from 'react';
import { ProductRow } from '@/data/catalogData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductTableProps {
  headers: string[];
  products: ProductRow[];
}

export default function ProductTable({ headers, products }: ProductTableProps) {
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
        
        // Auto-expand parent row if a variation is targeted
        products.forEach((prod, idx) => {
          if (prod.variations?.some(v => v.partNumber.replace(/\s+/g, '-').toLowerCase() === currentHash)) {
            setExpandedRows(prev => {
              const newSet = new Set(prev);
              newSet.add(idx);
              return newSet;
            });
          }
        });

        // Clear highlight after 1.5 seconds so it fades out
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setTargetId('');
        }, 1500);
      }
    };
    
    updateTarget();
    window.addEventListener('hashchange', updateTarget);

    return () => {
      window.removeEventListener('hashchange', updateTarget);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-white/80 dark:bg-[#030014]/60 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-xl mt-12 mb-24 transition-colors duration-500">
      <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-full">
        <thead>
          <tr className="border-b-2 border-[#0ea5e9]/30 bg-zinc-50 dark:bg-[#110b29] transition-colors duration-500">
            {headers.map((header, i) => (
              <th key={i} className="py-5 px-6 font-mono text-[11px] text-[#0ea5e9] tracking-widest uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-body text-zinc-600 dark:text-slate-300 transition-colors duration-500">
          {products.map((row, idx) => {
            const rowId = row.model.replace(/\s+/g, '-').toLowerCase();
            const isTarget = targetId === rowId;
            const isExpanded = expandedRows.has(idx);
            
            return (
              <React.Fragment key={idx}>
                <tr 
                  id={rowId}
                  onClick={() => row.variations && toggleRow(idx)}
                  className={`border-b border-zinc-200 dark:border-white/5 transition-all duration-500 group scroll-mt-32 ${row.variations ? 'cursor-pointer' : ''} ${
                    isTarget 
                      ? 'bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20 border-l-4 border-l-[#0ea5e9] shadow-[inset_0_0_20px_rgba(251,204,19,0.1)] dark:shadow-[inset_0_0_20px_rgba(251,204,19,0.2)]' 
                      : 'hover:bg-zinc-50 dark:hover:bg-white/5 border-l-4 border-l-transparent'
                  }`}
                >
                  <td className="py-4 px-6 font-heading font-semibold text-zinc-900 dark:text-white transition-colors duration-500 flex items-center gap-2">
                    {row.model}
                    {row.variations && (
                      <span className="text-zinc-400 dark:text-slate-400 group-hover:text-[#0ea5e9] transition-colors duration-500">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm">{row.size}</td>
                  <td className="py-4 px-6 font-mono text-sm">{row.maxPressure}</td>
                  <td className="py-4 px-6 text-sm text-zinc-500 dark:text-slate-400 transition-colors duration-500">
                    {row.flowRate || row.material || 'N/A'}
                  </td>
                  <td className="py-4 px-6">
                    {row.inStock ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 transition-colors duration-500">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-slate-400 border border-zinc-200 dark:border-slate-700 transition-colors duration-500">
                        Made to Order
                      </span>
                    )}
                  </td>
                </tr>

                {/* Expanded Variations Table */}
                {isExpanded && row.variations && (
                  <tr className="bg-zinc-50 dark:bg-[#050B14] transition-colors duration-500">
                    <td colSpan={5} className="p-0 border-b border-zinc-200 dark:border-white/5 transition-colors duration-500">
                      <div className="p-6 pl-12 animate-in slide-in-from-top-2 duration-300">
                        <div className="mb-4 flex items-center gap-2">
                          <h4 className="font-heading font-bold text-[#0284c7] uppercase text-sm">Available Part Numbers</h4>
                          <div className="h-px bg-zinc-200 dark:bg-white/10 flex-1 transition-colors duration-500"></div>
                        </div>
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="text-zinc-500 dark:text-slate-500 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-200 dark:border-white/5 transition-colors duration-500">
                              <th className="pb-2 font-normal w-1/2">Specifications</th>
                              <th className="pb-2 font-normal">Part Number</th>
                              <th className="pb-2 font-normal">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {row.variations.map((v, vIdx) => {
                              // We can add IDs to specific variations too
                              const vId = v.partNumber.replace(/\s+/g, '-').toLowerCase();
                              const isVTarget = targetId === vId;
                              
                              return (
                                <tr 
                                  key={vIdx} 
                                  id={vId}
                                  className={`border-b border-zinc-200 dark:border-white/5 last:border-0 transition-colors duration-500 ${
                                    isVTarget ? 'bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/20' : 'hover:bg-zinc-100 dark:hover:bg-white/5'
                                  }`}
                                >
                                  <td className={`py-3 font-semibold transition-colors duration-500 ${isVTarget ? 'text-[#0ea5e9]' : 'text-zinc-700 dark:text-slate-200'}`}>
                                    {v.specs}
                                  </td>
                                  <td className="py-3 font-mono text-zinc-500 dark:text-slate-400 transition-colors duration-500">
                                    {v.partNumber}
                                  </td>
                                  <td className="py-3">
                                    {v.inStock ? (
                                      <span className="text-green-600 dark:text-green-400 text-xs font-bold transition-colors duration-500">In Stock</span>
                                    ) : (
                                      <span className="text-zinc-500 dark:text-slate-500 text-xs transition-colors duration-500">MTO</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
