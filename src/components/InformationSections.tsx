import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Clock, Wrench, Award, Settings, Zap, Factory, Box, Building2, Flame, Car, TestTube, Droplets, Plane } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const INDUSTRIES = [
  { name: 'Manufacturing', icon: Factory, colSpan: 'md:col-span-2 md:row-span-2', bgImage: '/vs_products/product_1.png' },
  { name: 'Construction', icon: Building2, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/vs_products/product_13.png' },
  { name: 'Oil & Gas', icon: Flame, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/fiiting.jpeg' },
  { name: 'Automotive', icon: Car, colSpan: 'md:col-span-2 md:row-span-1', bgImage: '/vs_products/product_4.png' },
  { name: 'Chemical Plants', icon: TestTube, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/vs_products/product_5.png' },
  { name: 'Power Gen', icon: Zap, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/pneumatics.jpg' },
  { name: 'Water Treatment', icon: Droplets, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/vs_products/product_7.png' },
  { name: 'Aerospace', icon: Plane, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/steering unit.jpg' }
];

const FEATURES = [
  { icon: Clock, title: '15+ Years Experience', desc: 'Over a decade of trusted industry experience.' },
  { icon: ShieldCheck, title: 'Proven Reliability', desc: 'Fast service and dependable support network.' },
  { icon: Award, title: 'Genuine Parts', desc: 'Authentic parts from leading global brands.' },
  { icon: Wrench, title: 'Custom Repair', desc: 'Expert repair and maintenance services.' },
  { icon: Settings, title: 'Flexible Rentals', desc: 'Short and long-term compressor rental options.' },
];

export function IndustriesServed() {
  return (
    <section className="w-full py-16 md:py-32 relative z-10 bg-[#030014] overflow-hidden" id="industries">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#0284c7]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 border-b border-white/10 pb-12">
            <div>
              <h4 className="font-mono text-[#0284c7] font-bold tracking-[0.2em] uppercase mb-4 border-l-4 border-[#0284c7] pl-4">Global Reach</h4>
              <h2 className="font-heading font-black text-5xl lg:text-7xl text-white uppercase tracking-tighter leading-none">
                Sectors We <br/> <span className="text-[#0ea5e9]">Empower</span>
              </h2>
            </div>
            <p className="font-body text-slate-400 max-w-md text-right hidden md:block leading-relaxed">
              From heavy manufacturing to precision aerospace, our fluid power systems drive the world's most demanding industrial operations.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[180px]">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={idx} animation="scale" delay={idx * 0.1} className={ind.colSpan}>
                <div 
                  className={`relative bg-[#110b29] border border-white/5 hover:border-[#0ea5e9] rounded-sm p-8 flex flex-col items-center justify-center text-center group transition-all duration-700 overflow-hidden cursor-crosshair h-full w-full`}
                >
                {/* Image Reveal Background */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={ind.bgImage} 
                    alt={ind.name} 
                    fill 
                    className="object-cover opacity-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity" 
                  />
                </div>
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-transparent to-[#0ea5e9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                
                {/* Giant faint icon in background */}
                <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white opacity-[0.02] group-hover:scale-150 group-hover:-rotate-12 group-hover:opacity-[0.15] group-hover:text-[#0ea5e9] transition-all duration-700 z-0" />
                
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#030014] border-2 border-[#0284c7] flex items-center justify-center mb-4 group-hover:bg-[#030014]/80 group-hover:border-[#0ea5e9] group-hover:backdrop-blur-md transition-all duration-500 mx-auto shadow-[0_0_20px_rgba(0,168,204,0.2)] group-hover:shadow-[0_0_40px_rgba(251,204,19,0.5)]">
                    <Icon className="w-8 h-8 text-[#0284c7] group-hover:text-[#0ea5e9] transition-colors duration-500" />
                  </div>
                  <span className="font-heading font-black text-xl md:text-2xl text-white uppercase tracking-wide group-hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors duration-500">
                    {ind.name}
                  </span>
                </div>
                
                {/* Technical crosshairs corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#0284c7]/50 group-hover:border-[#0ea5e9] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#0284c7]/50 group-hover:border-[#0ea5e9] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#0284c7]/50 group-hover:border-[#0ea5e9] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#0284c7]/50 group-hover:border-[#0ea5e9] group-hover:scale-150 transition-all duration-500 z-10" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OurServices() {
  return (
    <section className="w-full py-16 md:py-24 relative z-10 overflow-hidden bg-[#110b29]" id="services">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        <ScrollReveal animation="fade">
          <div className="text-center mb-12 md:mb-20 relative z-20 flex flex-col items-center">
            <div className="bg-[#0ea5e9] text-[#030014] font-mono font-bold px-4 py-2 uppercase tracking-[0.3em] -rotate-2 inline-block shadow-lg">
              Core Expertise
            </div>
            <h2 className="font-heading font-black text-5xl md:text-[5rem] text-white mt-6 md:mt-8 leading-none tracking-tighter uppercase drop-shadow-xl">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#005A7A] italic pr-4">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Manufacturing */}
          <ScrollReveal animation="slide-up" delay={0.1}>
            <div className="bg-[#030014] border-2 border-white/10 rounded-2xl group hover:border-[#0ea5e9] transition-colors duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/booklet/air comprsoor.png" alt="Manufacturing" fill className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                 <Factory className="absolute bottom-6 left-6 w-12 h-12 text-[#0ea5e9]" />
              </div>
              <div className="p-8 pt-0 mt-4">
                <h3 className="font-heading font-bold text-3xl text-white uppercase mb-4 tracking-tight">Manufacturing</h3>
                <p className="font-body text-slate-300 leading-relaxed mb-6">
                  We manufacture high-grade industrial equipment including Air Compressors, Air Dryers, custom Filters, and Auto Drain Valves designed for rigorous industrial demands.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 2: Supply */}
          <ScrollReveal animation="slide-up" delay={0.2}>
            <div className="bg-[#030014] border-2 border-white/10 rounded-2xl group hover:border-[#0284c7] transition-colors duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/vs_products/product_8.png" alt="Global Spares Supply" fill className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                 <Box className="absolute bottom-6 left-6 w-12 h-12 text-[#0284c7]" />
              </div>
              <div className="p-8 pt-0 mt-4">
                <h3 className="font-heading font-bold text-3xl text-white uppercase mb-4 tracking-tight">Spares Supply</h3>
                <p className="font-body text-slate-300 leading-relaxed mb-6">
                  Authorized suppliers of compressor spares for all major global brands including ELGI, KND, Kirloskar, Atlas Copco, Chicago Pneumatic, and Ingersoll Rand.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 3: Repair & Rental */}
          <ScrollReveal animation="slide-up" delay={0.3}>
            <div className="bg-[#030014] border-2 border-white/10 rounded-2xl group hover:border-white transition-colors duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/vs_products/product_10.png" alt="Repair and Rental" fill className="object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 filter contrast-125 saturate-150" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                 <Wrench className="absolute bottom-6 left-6 w-12 h-12 text-white" />
              </div>
              <div className="p-8 pt-0 mt-4">
                <h3 className="font-heading font-bold text-3xl text-white uppercase mb-4 tracking-tight">Repair & Rental</h3>
                <p className="font-body text-slate-300 leading-relaxed mb-6">
                  Complete compressor repair services by certified technicians. We also provide heavy-duty compressors on a flexible rental basis for short and long-term needs.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-20 bg-[#0ea5e9] relative z-10 overflow-hidden border-y-8 border-[#030014]">
      
      {/* Massive Background Text */}
      <div className="absolute top-[5%] left-[-5%] w-[110%] pointer-events-none opacity-20 flex whitespace-nowrap z-0">
        <h2 className="text-[20vw] font-heading font-black text-[#030014] leading-none tracking-tighter">
          ADVANTAGE ADVANTAGE
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          
          <ScrollReveal animation="slide-right" className="w-full lg:w-1/3 flex flex-col gap-6 mt-8 md:mt-12">
            <div className="bg-[#030014] text-white px-6 py-2 uppercase tracking-[0.3em] font-mono font-bold w-fit shadow-[8px_8px_0_rgba(255,255,255,0.3)] transform -rotate-2 rounded-lg">
              The AEC Advantage
            </div>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-[#030014] uppercase leading-[0.85] tracking-tighter drop-shadow-lg mt-2">
              WHY <br/> CHOOSE <br/> <span className="text-white drop-shadow-[4px_4px_0_#030014]">AEC?</span>
            </h2>
            <p className="font-mono text-[#030014] font-bold text-lg leading-relaxed border-l-4 border-white pl-6 mt-4">
              We don't just supply parts; we engineer reliability. Our strict ISO 9001:2015 protocols ensure every component performs flawlessly under extreme pressure, minimizing downtime and maximizing productivity.
            </p>
            <Link href="/products" className="bg-[#030014] text-white font-heading font-black uppercase tracking-widest text-xl px-12 py-6 w-fit shadow-[8px_8px_0_rgba(255,255,255,0.8)] hover:translate-y-1 hover:shadow-[4px_4px_0_rgba(255,255,255,0.8)] transition-all mt-8 rounded-xl inline-block">
              View Catalog
            </Link>
          </ScrollReveal>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={idx} animation="slide-up" delay={0.1 * idx}>
                  <div className="bg-[#030014] p-6 border-4 border-white transform hover:-translate-y-2 transition-transform duration-300 group shadow-xl relative overflow-hidden rounded-2xl h-full">
                    <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-150 transition-transform duration-700">
                      <Icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-10">
                      <Icon className="w-10 h-10 text-[#0ea5e9] mb-4" />
                      <h3 className="font-heading font-black text-xl text-white uppercase mb-2 tracking-tight">{feat.title}</h3>
                      <p className="font-body text-slate-300 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
