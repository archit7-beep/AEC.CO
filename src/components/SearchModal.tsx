'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Component } from 'lucide-react';
import { CATALOG_DATA } from '@/data/catalogData';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  categoryId: string;
  categoryName: string;
  categoryBrand: string;
  subCategoryTitle: string;
  productModel: string;
  productType: string;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key and click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden'; // prevent background scrolling
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
      setResults([]);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Search Algorithm
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const foundResults: SearchResult[] = [];

    // Optimize: limit to 50 results
    for (const category of Object.values(CATALOG_DATA)) {
      if (foundResults.length >= 50) break;

      const catMatch = 
        category.name.toLowerCase().includes(searchTerm) || 
        category.brand.toLowerCase().includes(searchTerm) ||
        category.id.toLowerCase().includes(searchTerm);

      for (const sub of category.subCategories) {
        if (foundResults.length >= 50) break;
        const subMatch = sub.title.toLowerCase().includes(searchTerm);

        for (const prod of sub.products) {
          if (foundResults.length >= 50) break;
          
          const prodMatch = 
            prod.model.toLowerCase().includes(searchTerm) || 
            prod.size.toLowerCase().includes(searchTerm) ||
            (prod.maxPressure && prod.maxPressure.toLowerCase().includes(searchTerm)) ||
            (prod.flowRate && prod.flowRate.toLowerCase().includes(searchTerm)) ||
            (prod.material && prod.material.toLowerCase().includes(searchTerm));

          // If the product explicitly matches, or the subcategory/category matches
          if (prodMatch || subMatch || catMatch) {
            foundResults.push({
              categoryId: category.id,
              categoryName: category.name,
              categoryBrand: category.brand,
              subCategoryTitle: sub.title,
              productModel: prod.model,
              productType: prod.size,
            });
          }

          // Deep search inside variations
          if (prod.variations) {
            for (const v of prod.variations) {
              if (foundResults.length >= 50) break;
              const varMatch = 
                v.partNumber.toLowerCase().includes(searchTerm) || 
                v.specs.toLowerCase().includes(searchTerm);

              if (varMatch && !prodMatch) {
                // If the variation matches but the parent didn't, push the variation specifically!
                foundResults.push({
                  categoryId: category.id,
                  categoryName: category.name,
                  categoryBrand: category.brand,
                  subCategoryTitle: `${sub.title} (Part No: ${v.partNumber})`,
                  productModel: v.partNumber, 
                  productType: v.specs,
                });
              }
            }
          }
        }
      }
    }

    setResults(foundResults);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/50 dark:bg-[#030014]/80 animate-in fade-in duration-200 transition-colors">
      
      {/* Sleek Command Palette Container */}
      <div 
        ref={modalRef}
        className="w-full max-w-2xl bg-white dark:bg-[#110b29] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 transition-colors"
      >
        {/* Header / Input Area */}
        <div className="relative flex items-center border-b border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#030014]/50 px-4 transition-colors">
          <Search className="w-5 h-5 text-[#0284c7] shrink-0" />
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search parts, brands, or categories..."
            className="w-full bg-transparent border-none py-5 pl-4 pr-10 text-lg text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-slate-500 focus:outline-none font-body transition-colors"
          />
          <button 
            onClick={onClose}
            className="absolute right-4 p-1 rounded-md text-zinc-500 dark:text-slate-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Results Area */}
        <div className="flex-1 overflow-y-auto max-h-[50vh] p-2 bg-white dark:bg-[#110b29] custom-scrollbar transition-colors">
          
          {query.trim().length < 2 && (
            <div className="py-10 text-center flex flex-col items-center justify-center opacity-50">
               <Component className="w-10 h-10 text-zinc-500 dark:text-slate-400 mb-3 transition-colors" />
               <p className="font-body text-zinc-500 dark:text-slate-400 text-sm transition-colors">Start typing to search the catalog</p>
            </div>
          )}

          {query.trim().length >= 2 && results.length === 0 && (
            <div className="py-10 text-center">
              <p className="font-body text-zinc-500 dark:text-slate-400 text-sm transition-colors">No components found for "<span className="text-zinc-900 dark:text-white">{query}</span>"</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="flex flex-col gap-1">
              {results.map((res, idx) => (
                <Link 
                  href={`/products/${res.categoryId}#${res.productModel.replace(/\s+/g, '-').toLowerCase()}`} 
                  key={idx}
                  onClick={onClose}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#030014] hover:border hover:border-[#0ea5e9]/30 border border-transparent transition-all cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-zinc-900 dark:text-white text-base group-hover:text-[#0ea5e9] transition-colors">
                      {res.productModel} <span className="font-body font-light text-zinc-500 dark:text-slate-400 text-sm ml-2 transition-colors">- {res.productType}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[#0284c7] uppercase tracking-widest mt-1">
                      {res.categoryBrand} • {res.subCategoryTitle}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-[#0ea5e9] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          )}
          
          {/* Footer */}
          <div className="p-3 border-t border-zinc-200 dark:border-white/5 mt-2 flex justify-between items-center text-[10px] font-mono text-zinc-500 dark:text-slate-500 uppercase tracking-widest transition-colors">
            <span>{results.length} {results.length === 1 ? 'Result' : 'Results'}</span>
            <span className="flex items-center gap-2">Press <kbd className="bg-zinc-200 dark:bg-white/10 px-2 py-1 rounded text-zinc-900 dark:text-white font-sans text-xs transition-colors">ESC</kbd> to close</span>
          </div>

        </div>
      </div>
      
    </div>
  );
}
