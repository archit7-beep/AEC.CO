'use client';
import React from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';

export default function FloatingActionButtons() {
  return (
    <>
      {/* Right Edge Fixed Buttons (WhatsApp & Phone) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20 transition-transform hover:scale-110"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href="tel:+1234567890" 
          className="w-12 h-12 bg-[#0ea5e9] hover:bg-[#0ea5e9] rounded-full flex items-center justify-center text-[#030014] shadow-lg shadow-[#0ea5e9]/20 transition-transform hover:scale-110"
          title="Call Us"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* Bottom Right Floating Button (Download Catalogues) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => alert("Coming soon!")}
          className="flex items-center gap-2 bg-[#110b29] border border-[#0ea5e9]/50 hover:bg-[#0ea5e9] hover:text-[#030014] text-[#0ea5e9] font-body font-semibold text-sm px-5 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 group"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          Download Catalogues
        </button>
      </div>
    </>
  );
}
