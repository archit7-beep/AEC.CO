'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('GLOBAL SYSTEM PANIC:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex items-center justify-center font-mono selection:bg-red-500/30 p-4 md:p-12">
        <div className="w-full max-w-5xl text-center p-8 md:p-16 border border-red-500/30 bg-red-950/20 rounded-[2rem] shadow-[0_0_80px_rgba(239,68,68,0.15)]">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-red-500/10 border border-red-500/30 rounded-3xl mx-auto flex items-center justify-center mb-8 md:mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 md:w-16 md:h-16">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <path d="M12 9v4"/>
              <path d="M12 17h.01"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-red-500 uppercase">Total System Failure</h1>
          <p className="text-zinc-400 mb-10 md:mb-14 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A fatal error occurred at the highest level of the matrix. The environment layout could not be rendered.
          </p>
          <button 
            onClick={() => reset()}
            className="bg-red-500 text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-red-600 transition-colors shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
            Force Reboot
          </button>
        </div>
      </body>
    </html>
  );
}
