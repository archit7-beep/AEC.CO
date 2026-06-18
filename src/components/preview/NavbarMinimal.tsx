'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarMinimal() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-8 px-12 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/booklet/logo.png" 
          alt="AEC Logo" 
          width={150} 
          height={65} 
          className="object-contain" 
        />
      </Link>

      {/* Center Links - Ultra Minimal */}
      <div className="hidden md:flex items-center gap-16 font-mono text-[11px] uppercase tracking-[0.25em] text-[#111111]/60">
        <Link href="#" className="hover:text-[#111111] transition-colors duration-500">Products</Link>
        <Link href="#" className="hover:text-[#111111] transition-colors duration-500">Brands</Link>
        <Link href="#" className="hover:text-[#111111] transition-colors duration-500">About</Link>
      </div>

      {/* CTA - Minimal pill */}
      <div>
        <button className="bg-transparent border border-[#111111]/20 text-[#111111] font-mono text-[11px] px-8 py-3 rounded-full uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-white transition-all duration-500">
          Get Quote
        </button>
      </div>
    </nav>
  );
}
