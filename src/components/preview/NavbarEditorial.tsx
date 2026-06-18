'use client';

import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

export default function NavbarEditorial() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-transparent pointer-events-none">
      {/* Logo - Kept exactly as is, completely free of any color inversion */}
      <Link href="/" className="flex items-center pointer-events-auto">
        <Image 
          src="/booklet/logo.png" 
          alt="AEC Logo" 
          width={180} 
          height={80} 
          className="object-contain" 
        />
      </Link>

      {/* Center Links - Dark text for cream background */}
      <div className="hidden md:flex items-center gap-12 font-heading font-bold uppercase tracking-widest text-sm text-[#1C1C1C] pointer-events-auto">
        <Link href="#" className="hover:text-[#8C2F2F] transition-colors">Products</Link>
        <Link href="#" className="hover:text-[#8C2F2F] transition-colors">Brands</Link>
        <Link href="#" className="hover:text-[#8C2F2F] transition-colors">About</Link>
      </div>

      {/* CTA - Dark button for cream background */}
      <div className="pointer-events-auto">
        <button className="bg-[#1C1C1C] text-[#F9F6F0] font-heading font-black px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-md">
          Get Quote
        </button>
      </div>
    </nav>
  );
}
