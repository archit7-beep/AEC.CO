import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMAL ENGG CORP",
  description: "Authorized Distributor - Established 2008",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="text-slate-100 min-h-screen relative selection:bg-[#FBCC13]/30 selection:text-white font-body">
        
        {/* FIXED BACKGROUND STACK FRAMEWORK */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
          
          {/* Layer 0: The Deep Void Base */}
          <div className="absolute inset-0 bg-[#0A192F]" />
          
          {/* Layer 1: Luminous Ambient Nebula Orbs (Fluid Center Glows) */}
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#112240]/60 blur-[140px] bg-nebula-1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#1e3a8a]/40 blur-[160px] bg-nebula-2" />
          <div className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-[#0A192F]/50 blur-[120px] bg-nebula-1" />

          {/* Layer 2: Technical Drafting Blueprint Grid Overlay */}
          <div className="absolute inset-0 blueprint-grid opacity-80" />

          {/* Architectural Coordinate Tick Crosshairs */}
          <div className="absolute top-12 left-12 font-mono text-[8px] text-[#FBCC13]/20 tracking-widest">SYS.LOC // 45.09.21</div>
          <div className="absolute bottom-12 right-12 font-mono text-[8px] text-[#FBCC13]/20 tracking-widest">GRID.MATRIX // ACTIVE</div>
        </div>

        {/* Layer 4: Active Application Content Layout Viewport */}
        <div className="relative z-10 min-h-screen">
          {/* Navigation Frame */}
          <Navbar />

          {/* Dynamic Page Rendering */}
          <main className="w-full flex-grow flex flex-col items-center">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
