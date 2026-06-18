'use client';

import dynamic from 'next/dynamic';

const Compressor3DScene = dynamic(() => import('./Compressor3DScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#110b29] rounded-xl border border-white/10">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#0ea5e9] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-mono text-[#0ea5e9] text-sm uppercase tracking-widest">Loading 3D Engine...</p>
      </div>
    </div>
  )
});

export default function Compressor3DViewer() {
  return (
    <div className="w-full h-full bg-[#030014] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="font-heading font-black text-white text-xl uppercase tracking-widest">AEC Model 400X</h3>
        <p className="font-mono text-[#0ea5e9] text-xs mt-1">INTERACTIVE 3D BLUEPRINT</p>
      </div>
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="font-mono text-white/50 text-[10px] uppercase">Live Render</span>
      </div>
      
      <Compressor3DScene />
    </div>
  );
}
