'use client';

import React, { useState } from 'react';
import { Product, SizeVariant } from '@/types/store';
import { X, ArrowRight } from 'lucide-react';

interface DetailDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailDrawer({ product, isOpen, onClose }: DetailDrawerProps) {
  const [selectedVariant, setSelectedVariant] = useState<SizeVariant | null>(null);

  React.useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  const weightBase = 450; 
  const volumeBase = 1.2; 
  const multiplier = selectedVariant ? (product.variants.indexOf(selectedVariant) + 1) * 1.5 : 1;
  const currentWeight = (weightBase * multiplier).toFixed(1);
  const currentVolume = (volumeBase * multiplier).toFixed(2);
  const shippingTariff = selectedVariant ? (selectedVariant.priceUSD * 0.12).toFixed(2) : '0.00';
  const total = selectedVariant ? (selectedVariant.priceUSD + parseFloat(shippingTariff)).toFixed(2) : '0.00';

  return (
    <div className="fixed inset-0 z-[100] flex justify-end pointer-events-none">
      
      {/* Mask */}
      <div 
        className="absolute inset-0 bg-[#010204]/60 pointer-events-auto transition-opacity duration-500" 
        onClick={onClose}
      />
      
      {/* High-Refraction Sliding Spec Drawer */}
      <div 
        className={`w-full md:w-[650px] lg:w-[900px] h-full backdrop-blur-3xl bg-slate-950/40 border-l border-white/10 rounded-l-3xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto flex flex-col shadow-[-40px_0_100px_rgba(0,0,0,0.8)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-12 pb-8">
          <div>
            <div className="font-mono text-[9px] text-[#0ea5e9] tracking-[0.2em] uppercase mb-3">
              MATRIX CONFIGURATION // {product.baseSku}
            </div>
            <h2 className="text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight">{product.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-[#0ea5e9] transition-colors p-4 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-12 py-4 space-y-12 no-scrollbar">
          
          {/* Borderless Size Configuration Chart */}
          <div>
            <h3 className="font-mono text-[10px] text-slate-500 tracking-[0.15em] mb-6 uppercase">
              // Dimension Configuration Matrix
            </h3>
            
            <div className="flex flex-col gap-2">
              {product.variants.map((v) => {
                const isActive = selectedVariant?.skuExtension === v.skuExtension;
                return (
                  <div 
                    key={v.skuExtension}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex items-center cursor-pointer transition-all duration-300 rounded-md p-5 ${
                      isActive 
                      ? 'bg-blue-900/20 text-[#0ea5e9] shadow-[inset_0_0_30px_rgba(197,160,89,0.05)]' 
                      : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-300'
                    }`}
                  >
                    <div className="w-1/4 font-mono text-xs tracking-widest uppercase flex items-center">
                      {isActive && <span className="inline-block w-1 h-1 rounded-full bg-[#0ea5e9] mr-3 shadow-[0_0_8px_rgba(197,160,89,0.8)]" />}
                      {v.skuExtension}
                    </div>
                    
                    <div className="w-1/2 flex flex-wrap gap-4 font-mono text-[10px] uppercase">
                      {Object.entries(v.dimensions).map(([k, val]) => (
                        <span key={k} className={`${isActive ? 'text-[#0ea5e9]/80' : 'text-slate-500'}`}>
                          {k}: <span className={isActive ? 'text-[#0ea5e9]' : 'text-slate-300'}>{val}</span>
                        </span>
                      ))}
                    </div>
                    
                    <div className="w-1/4 text-right font-mono text-xs">
                      ${v.priceUSD.toLocaleString('en-US', {minimumFractionDigits: 2})}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Real-time Metric Totals */}
          <div className="pt-8 border-t border-white/5">
            <h3 className="font-mono text-[10px] text-slate-500 tracking-[0.15em] mb-6 uppercase">
              // Logistics & Pricing Real-Time Matrix
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">Total Weight</div>
                <div className="font-sans text-xl font-bold text-white">{currentWeight} <span className="text-sm font-normal text-slate-500">KG</span></div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">Total Volume</div>
                <div className="font-sans text-xl font-bold text-white">{currentVolume} <span className="text-sm font-normal text-slate-500">M³</span></div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-[#0ea5e9] uppercase tracking-widest mb-1">Global Tariff</div>
                <div className="font-sans text-xl font-bold text-[#0ea5e9]">${shippingTariff}</div>
              </div>
              <div>
                <div className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-1">Total Price</div>
                <div className="font-sans text-xl font-bold text-white">${total}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-12 border-t border-white/5">
          <button 
            disabled={!selectedVariant}
            className="w-full flex items-center justify-between bg-white/[0.02] border border-white/10 hover:border-[#0ea5e9]/40 text-slate-300 hover:text-[#0ea5e9] hover:bg-[#0ea5e9]/5 rounded-xl font-mono text-xs uppercase tracking-[0.15em] p-6 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>AUTHORIZE SECURE FREIGHT ROUTING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
