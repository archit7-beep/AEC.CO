'use client';

import React from 'react';
import Link from 'next/link';
import { Factory, Box, Wrench } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { INDUSTRIES, FEATURES } from '@/data/home';

export function IndustriesServed() {
  return (
    <section className="w-full py-16 md:py-32 relative z-10 bg-transparent overflow-hidden" id="industries">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 border-b border-zinc-300 dark:border-zinc-800 pb-12 transition-colors duration-500">
            <div>
              <h4 className="font-mono text-[#0055A4] font-bold tracking-[0.2em] uppercase mb-4 border-l-4 border-[#0055A4] pl-4">Global Reach</h4>
              <h2 className="font-heading font-black text-5xl lg:text-7xl text-zinc-900 dark:text-white uppercase tracking-tighter leading-none transition-colors duration-500">
                Sectors We <br/> <span className="text-[#0055A4]">Empower</span>
              </h2>
            </div>
            <p className="font-body text-zinc-600 dark:text-zinc-400 max-w-md text-right hidden md:block leading-relaxed transition-colors duration-500">
              From heavy manufacturing to precision aerospace, our fluid power systems drive the world's most demanding industrial operations.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[180px]">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={idx} animation="scale" delay={idx * 0.1} className={ind.colSpan}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#0055A4] dark:hover:border-[#0055A4] rounded-sm p-8 flex flex-col items-center justify-center text-center group transition-all duration-700 overflow-hidden cursor-crosshair h-full w-full shadow-sm hover:shadow-xl hover:shadow-[#0055A4]/10`}
                >
                {/* Image Reveal Background */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={ind.bgImage} 
                    alt={`Industrial application and machinery for ${ind.name} sector`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                
                {/* Hover Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                
                {/* Giant faint icon in background */}
                <Icon className="absolute -right-4 -bottom-4 w-32 h-32 text-zinc-900 dark:text-white opacity-[0.02] group-hover:scale-150 group-hover:-rotate-12 group-hover:opacity-[0.1] group-hover:text-white transition-all duration-700 z-0" />
                
                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-[#09090b] border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9] group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-500 mx-auto">
                    <Icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="font-heading font-black text-xl md:text-2xl text-zinc-900 dark:text-white uppercase tracking-wide group-hover:text-white drop-shadow-md transition-colors duration-500">
                    {ind.name}
                  </span>
                </div>
                
                {/* Technical crosshairs corners */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-300 dark:border-zinc-700 group-hover:border-[#0055A4] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-300 dark:border-zinc-700 group-hover:border-[#0055A4] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-300 dark:border-zinc-700 group-hover:border-[#0055A4] group-hover:scale-150 transition-all duration-500 z-10" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-300 dark:border-zinc-700 group-hover:border-[#0055A4] group-hover:scale-150 transition-all duration-500 z-10" />
                </motion.div>
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
    <section className="w-full py-16 md:py-24 relative z-10 overflow-hidden bg-zinc-100/50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500" id="services">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        <ScrollReveal animation="fade">
          <div className="text-center mb-12 md:mb-20 relative z-20 flex flex-col items-center">
            <div className="bg-[#0055A4] text-white font-mono font-bold px-4 py-2 uppercase tracking-[0.3em] inline-block shadow-sm rounded-sm">
              Core Expertise
            </div>
            <h2 className="font-heading font-black text-5xl md:text-[5rem] text-zinc-900 dark:text-white mt-6 md:mt-8 leading-none tracking-tighter uppercase transition-colors duration-500">
              Our <span className="text-[#0055A4]">Services</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Manufacturing */}
          <ScrollReveal animation="slide-up" delay={0.1}>
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm group hover:border-[#0055A4] dark:hover:border-[#0055A4] hover:shadow-xl hover:shadow-[#0055A4]/10 transition-all duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/booklet/new-air-compressor.png" alt="Industrial Air Compressor Manufacturing Facility" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent transition-colors duration-500" />
                 <Factory className="absolute bottom-6 left-6 w-12 h-12 text-[#0055A4]" />
              </div>
              <div className="p-8 pt-6 mt-4">
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white uppercase mb-3 tracking-tight transition-colors duration-500">Manufacturing</h3>
                <p className="font-body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 transition-colors duration-500">
                  We manufacture high-grade industrial equipment including Air Compressors, Air Dryers, custom Filters, and Auto Drain Valves designed for rigorous industrial demands.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Service 2: Supply */}
          <ScrollReveal animation="slide-up" delay={0.2}>
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm group hover:border-[#0055A4] dark:hover:border-[#0055A4] hover:shadow-xl hover:shadow-[#0055A4]/10 transition-all duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/vs_products/product_8.png" alt="Global Supply Chain and Spare Parts Distribution" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent transition-colors duration-500" />
                 <Box className="absolute bottom-6 left-6 w-12 h-12 text-[#0055A4]" />
              </div>
              <div className="p-8 pt-6 mt-4">
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white uppercase mb-3 tracking-tight transition-colors duration-500">Global Supply</h3>
                <p className="font-body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 transition-colors duration-500">
                  Extensive inventory of 10,000+ OEM and aftermarket spares for compressors, excavators, rock breakers, and drilling rigs. 
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Service 3: Servicing */}
          <ScrollReveal animation="slide-up" delay={0.3}>
            <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm group hover:border-[#0055A4] dark:hover:border-[#0055A4] hover:shadow-xl hover:shadow-[#0055A4]/10 transition-all duration-500 overflow-hidden relative">
              <div className="h-64 relative overflow-hidden">
                 <Image src="/booklet/pneumatics.jpg" alt="Industrial Maintenance and Pneumatic System Diagnostics" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent transition-colors duration-500" />
                 <Wrench className="absolute bottom-6 left-6 w-12 h-12 text-[#0055A4]" />
              </div>
              <div className="p-8 pt-6 mt-4">
                <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white uppercase mb-3 tracking-tight transition-colors duration-500">Maintenance</h3>
                <p className="font-body text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 transition-colors duration-500">
                  Specialized repair and overhauling of all major compressor brands. We bring dead units back to factory specifications with certified service protocols.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-20 bg-zinc-100 dark:bg-slate-900 relative z-10 overflow-hidden border-y-4 border-[#0055A4] transition-colors duration-500">
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          
          <ScrollReveal animation="slide-right" className="w-full lg:w-1/3 flex flex-col gap-6 mt-8 md:mt-12">
            <div className="bg-[#0055A4] text-white px-6 py-2 uppercase tracking-[0.3em] font-mono font-bold w-fit rounded-sm">
              The AEC Advantage
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-zinc-900 dark:text-white uppercase leading-tight tracking-tight mt-2 transition-colors duration-500">
              WHY CHOOSE <br/> AEC?
            </h2>
            <p className="font-mono text-zinc-700 dark:text-slate-300 text-base leading-relaxed border-l-4 border-[#0055A4] pl-6 mt-4 transition-colors duration-500">
              We don't just supply parts; we engineer reliability. Our strict ISO 9001:2015 protocols ensure every component performs flawlessly under extreme pressure, minimizing downtime and maximizing productivity.
            </p>
            <Link href="/products" className="bg-white text-slate-900 font-heading font-black uppercase tracking-widest text-sm px-8 py-4 w-fit hover:bg-slate-200 transition-all mt-8 rounded-sm inline-block">
              View Catalog
            </Link>
          </ScrollReveal>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={idx} animation="slide-up" delay={0.1 * idx}>
                  <div className="bg-white dark:bg-slate-800 p-6 border border-zinc-200 dark:border-slate-700 hover:border-[#0055A4] dark:hover:border-[#0055A4] transition-colors duration-500 group relative overflow-hidden rounded-sm h-full">
                    <div className="absolute -right-6 -bottom-6 opacity-[0.05] group-hover:scale-110 group-hover:opacity-10 transition-transform duration-700">
                      <Icon className="w-24 h-24 text-zinc-300 dark:text-white" />
                    </div>
                    <div className="relative z-10">
                      <Icon className="w-8 h-8 text-[#0055A4] mb-4" />
                      <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white uppercase mb-2 tracking-tight transition-colors duration-500">{feat.title}</h3>
                      <p className="font-body text-zinc-600 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-500">{feat.desc}</p>
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
