import React from 'react';
import HeroSaaS from '@/components/preview/HeroSaaS';
import HeroEditorial from '@/components/preview/HeroEditorial';
import NavbarEditorial from '@/components/preview/NavbarEditorial';
import HeroMinimal from '@/components/preview/HeroMinimal';

export default function PreviewPage() {
  return (
    <div className="w-full bg-[#000000] overflow-x-hidden">
      {/* Hide the global layout navbar purely for the preview route */}
      <style dangerouslySetInnerHTML={{ __html: `
        #global-navbar { display: none !important; }
      `}} />

      {/* =========================================
          OPTION 1: THE MODERN SAAS
          ========================================= */}
      <section className="relative w-full min-h-[150vh]">
        <div className="sticky top-0 w-full h-screen">
          <HeroSaaS />
        </div>
      </section>

      {/* SaaS Secondary Section */}
      <section className="w-full min-h-screen bg-[#000000] flex flex-col items-center justify-center relative z-40 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="text-center mb-24">
            <h2 className="font-body font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 text-3xl md:text-5xl tracking-tight mb-6">
              Industrial grade. Cloud scale.
            </h2>
            <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
              Built for performance, reliability, and precision. Explore our suite of zero-tolerance components.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SaaS Card 1 */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 hover:bg-[#0f0f0f] transition-colors group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="font-body font-semibold text-white text-xl mb-3">Fluid Power</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                Hydraulic pumps, valves, and high-torque steering units designed for maximum pressure environments.
              </p>
              <span className="text-blue-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more &rarr;</span>
            </div>

            {/* SaaS Card 2 */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 hover:bg-[#0f0f0f] transition-colors group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 2v20"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m16 6-4 4-4-4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
              </div>
              <h3 className="font-body font-semibold text-white text-xl mb-3">Pneumatics</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                High-efficiency air compressors and precise pneumatic cylinders from elite global manufacturers.
              </p>
              <span className="text-emerald-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more &rarr;</span>
            </div>

            {/* SaaS Card 3 */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-[#0f0f0f] transition-colors group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3 className="font-body font-semibold text-white text-xl mb-3">Accessories</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed mb-6">
                Heavy-duty hoses, high-pressure fittings, and couplings that never fail under stress.
              </p>
              <span className="text-purple-400 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Learn more &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer between options */}
      <div className="w-full py-16 bg-[#000000] flex justify-center items-center border-t border-white/10">
        <div className="text-white/30 font-mono text-xs tracking-widest uppercase">END OF OPTION 1</div>
      </div>
      <div className="w-full h-32 bg-gradient-to-b from-[#000000] to-[#F9F6F0]" />

      {/* =========================================
          OPTION 2: THE EDITORIAL BOLD
          ========================================= */}

      {/* Option 2: The Editorial Bold */}
      <section className="relative w-full min-h-[150vh]">
        <div className="sticky top-0 w-full h-screen">
          <HeroEditorial />
        </div>
      </section>

      {/* Realistic Secondary Section to test scroll transitions */}
      <section className="w-full min-h-screen bg-[#F0EBE1] flex flex-col items-center justify-center relative z-40 py-32 border-t border-[#1C1C1C]/10">
        <div className="max-w-6xl mx-auto px-8 w-full">
          
          {/* Editorial Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#1C1C1C]/20 pb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-[#8C2F2F] tracking-[0.2em] uppercase text-sm mb-6 font-bold">
                01 — The standard of excellence
              </p>
              <h2 className="font-heading font-black text-[#1C1C1C] text-5xl md:text-7xl leading-[0.9] uppercase tracking-tighter">
                Building the backbone of modern industry.
              </h2>
            </div>
            <div className="max-w-xs mt-8 md:mt-0 text-right">
              <p className="font-mono text-[#1C1C1C]/70 text-sm leading-relaxed">
                We deliver uncompromising quality components for high-pressure systems across the globe.
              </p>
            </div>
          </div>
          
          {/* Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="group cursor-pointer">
              <div className="w-full h-64 bg-[#1C1C1C]/5 mb-8 rounded-2xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#8C2F2F]/10 group-hover:bg-[#8C2F2F]/20 transition-colors duration-500" />
                 <h1 className="absolute bottom-4 left-4 font-heading font-black text-6xl text-[#1C1C1C]/10 group-hover:text-[#1C1C1C]/20 transition-colors duration-500">01</h1>
              </div>
              <h3 className="font-heading font-black text-3xl text-[#1C1C1C] mb-4 tracking-tight uppercase">Fluid Power</h3>
              <p className="text-[#1C1C1C]/70 font-mono text-sm leading-relaxed">
                Heavy duty pumps, valves, and steering units designed for maximum pressure and zero tolerance environments.
              </p>
            </div>
            
            <div className="group cursor-pointer mt-0 md:mt-12">
              <div className="w-full h-64 bg-[#1C1C1C]/5 mb-8 rounded-2xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#8C2F2F]/10 group-hover:bg-[#8C2F2F]/20 transition-colors duration-500" />
                 <h1 className="absolute bottom-4 left-4 font-heading font-black text-6xl text-[#1C1C1C]/10 group-hover:text-[#1C1C1C]/20 transition-colors duration-500">02</h1>
              </div>
              <h3 className="font-heading font-black text-3xl text-[#1C1C1C] mb-4 tracking-tight uppercase">Pneumatics</h3>
              <p className="text-[#1C1C1C]/70 font-mono text-sm leading-relaxed">
                High-efficiency air compressors and pneumatic cylinders from elite global manufacturers.
              </p>
            </div>
            
            <div className="group cursor-pointer mt-0 md:mt-24">
              <div className="w-full h-64 bg-[#1C1C1C]/5 mb-8 rounded-2xl overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#8C2F2F]/10 group-hover:bg-[#8C2F2F]/20 transition-colors duration-500" />
                 <h1 className="absolute bottom-4 left-4 font-heading font-black text-6xl text-[#1C1C1C]/10 group-hover:text-[#1C1C1C]/20 transition-colors duration-500">03</h1>
              </div>
              <h3 className="font-heading font-black text-3xl text-[#1C1C1C] mb-4 tracking-tight uppercase">Accessories</h3>
              <p className="text-[#1C1C1C]/70 font-mono text-sm leading-relaxed">
                Industrial-grade hoses, high-pressure fittings, and couplings that never fail under stress.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Spacer between options */}
      <div className="w-full h-32 bg-gradient-to-b from-[#F0EBE1] to-[#FAFAFA]" />
      
      {/* Option 3: The Ultra Minimalist */}
      <section className="relative w-full min-h-[150vh]">
        <div className="sticky top-0 w-full h-screen">
          <HeroMinimal />
        </div>
      </section>

      <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center relative z-40 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32">
            <h2 className="font-heading font-light text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-2xl">
              Precision components. <br/>
              <span className="text-gray-400">Engineered for endurance.</span>
            </h2>
            <p className="font-mono text-gray-500 text-[11px] uppercase tracking-[0.2em] max-w-xs mt-8 md:mt-0 leading-loose">
              02 &mdash; Core Competencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {/* Minimal Card 1 */}
            <div className="border-t border-gray-200 pt-8 group cursor-pointer">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-gray-300 text-sm tracking-widest">01</span>
                <span className="font-mono text-[#8C2F2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase">Explore</span>
              </div>
              <h3 className="font-heading font-normal text-2xl text-gray-900 mb-6 tracking-tight">Fluid Power Systems</h3>
              <p className="font-body font-light text-gray-500 text-sm leading-relaxed mb-8">
                Industrial-grade hydraulic pumps, directional control valves, and high-torque steering units built for zero-tolerance environments.
              </p>
              <ul className="space-y-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Danfoss</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Polyhydron</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Yuken</li>
              </ul>
            </div>

            {/* Minimal Card 2 */}
            <div className="border-t border-gray-200 pt-8 group cursor-pointer">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-gray-300 text-sm tracking-widest">02</span>
                <span className="font-mono text-[#8C2F2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase">Explore</span>
              </div>
              <h3 className="font-heading font-normal text-2xl text-gray-900 mb-6 tracking-tight">Pneumatic Solutions</h3>
              <p className="font-body font-light text-gray-500 text-sm leading-relaxed mb-8">
                High-efficiency air compressors, precise pneumatic cylinders, and air preparation units from elite global manufacturers.
              </p>
              <ul className="space-y-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Festo</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> SMC</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Norgren</li>
              </ul>
            </div>

            {/* Minimal Card 3 */}
            <div className="border-t border-gray-200 pt-8 group cursor-pointer">
              <div className="flex justify-between items-center mb-8">
                <span className="font-mono text-gray-300 text-sm tracking-widest">03</span>
                <span className="font-mono text-[#8C2F2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase">Explore</span>
              </div>
              <h3 className="font-heading font-normal text-2xl text-gray-900 mb-6 tracking-tight">Fittings & Accessories</h3>
              <p className="font-body font-light text-gray-500 text-sm leading-relaxed mb-8">
                Heavy-duty hoses, leak-proof high-pressure fittings, and quick-release couplings that never fail under stress.
              </p>
              <ul className="space-y-3 font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Parker</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Gates</li>
                <li className="flex items-center gap-4"><span className="w-4 h-[1px] bg-gray-300"></span> Aeroquip</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
