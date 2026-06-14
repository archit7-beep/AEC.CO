'use client';
import React from 'react';

export default function ComingSoonButton({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <button onClick={(e) => { e.preventDefault(); alert("Coming soon!"); }} className={className}>
      {children}
    </button>
  );
}
