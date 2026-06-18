'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Hexagon } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  return (
    <section className="w-full py-32 relative z-10 bg-[#030014] overflow-hidden" id="contact">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[#110b29] to-transparent pointer-events-none" />
      <div className="absolute -left-[10%] bottom-[10%] w-[40vw] h-[40vw] bg-[#0ea5e9]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-2 bg-[#110b29] border border-[#0284c7]/30 px-6 py-2 rounded-full mb-6">
              <Hexagon className="w-4 h-4 text-[#0ea5e9] animate-pulse" />
              <h4 className="font-mono text-[#0284c7] text-sm font-bold tracking-widest uppercase">Global Support Desk</h4>
            </div>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-white tracking-tighter uppercase drop-shadow-xl">
              Contact <span className="text-[#0ea5e9]">AEC</span>
            </h2>
            <p className="font-body text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
              Connect with our engineering team for precision fluid power solutions, authentic spare parts, or emergency repair dispatch.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 bg-[#110b29]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative">
          
          {/* Decorative Edge Glow */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0284c7] via-[#0ea5e9] to-transparent" />

          {/* Left Column: Contact Info & Map Placeholder */}
          <div className="w-full xl:w-[45%] bg-[#110b29]/80 p-6 md:p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden group">
            {/* Hover Map Effect Layer */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-1000">
               <Image src="/booklet/fiiting.jpeg" alt="Background Texture" fill className="object-cover grayscale" />
            </div>

            <div className="relative z-10">
              <h3 className="font-heading font-black text-3xl text-white mb-10 uppercase tracking-wide border-b-2 border-white/10 pb-6 inline-block pr-12">
                Headquarters
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#030014] border border-white/10 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-[#0ea5e9] group-hover/item:shadow-[0_0_15px_rgba(251,204,19,0.3)] transition-all shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg">Location</h5>
                    <p className="font-body text-slate-300 font-light text-sm md:text-base leading-relaxed">Shop No.2, Near Hockey Stadium<br/>Nehrunagar, Pimpri<br/>Pune - 18, India</p>
                  </div>
                </div>

                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#030014] border border-white/10 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-[#0284c7] group-hover/item:shadow-[0_0_15px_rgba(0,168,204,0.3)] transition-all shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#0284c7]" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg">Direct Lines</h5>
                    <p className="font-body text-slate-300 font-light text-sm md:text-base leading-relaxed">9860 222 875<br/>7620 510 747</p>
                  </div>
                </div>

                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#030014] border border-white/10 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-white transition-all shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg">Digital Dispatch</h5>
                    <p className="font-body text-slate-300 font-light text-sm md:text-base leading-relaxed hover:text-[#0ea5e9] transition-colors cursor-pointer">amalengcorp@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brutalist Hours Block */}
            <div className="relative z-10 mt-16 bg-[#030014] border border-white/10 p-8 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-[#0ea5e9] mr-3" />
                <h5 className="font-heading font-bold text-white uppercase tracking-widest text-sm">Operating Window</h5>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                <span className="font-mono text-xs text-slate-400">MON - SUN</span>
                <span className="font-mono text-xs text-[#0284c7] font-bold">09:30 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal animation="fade" delay={0.2} className="w-full xl:w-[55%] p-6 md:p-10 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#0284c7] fill-none stroke-2">
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="30" strokeDasharray="5,5" />
                <path d="M50 10 L50 90 M10 50 L90 50" strokeOpacity="0.5" />
              </svg>
            </div>

            <h3 className="font-heading font-black text-3xl text-white mb-2 uppercase tracking-tight">Request an Estimate</h3>
            <p className="font-mono text-sm text-[#0284c7] mb-10 tracking-widest uppercase">System Initialization Protocol</p>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Transmitted Successfully! Our dispatch team will contact you shortly.'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group mt-2">
                  <input suppressHydrationWarning type="text" id="fname" className="peer w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors font-body placeholder-transparent" placeholder="John" />
                  <label htmlFor="fname" className="absolute left-4 -top-3 bg-[#110b29] px-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] peer-focus:bg-[#110b29] transition-all pointer-events-none">First Name</label>
                </div>
                <div className="relative group mt-2">
                  <input suppressHydrationWarning type="text" id="cname" className="peer w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors font-body placeholder-transparent" placeholder="Company" />
                  <label htmlFor="cname" className="absolute left-4 -top-3 bg-[#110b29] px-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] peer-focus:bg-[#110b29] transition-all pointer-events-none">Company Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group mt-2">
                  <input suppressHydrationWarning type="email" id="email" className="peer w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors font-body placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-4 -top-3 bg-[#110b29] px-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] peer-focus:bg-[#110b29] transition-all pointer-events-none">Email Address</label>
                </div>
                <div className="relative group mt-2">
                  <input suppressHydrationWarning type="tel" id="phone" className="peer w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors font-body placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-4 -top-3 bg-[#110b29] px-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] peer-focus:bg-[#110b29] transition-all pointer-events-none">Phone / WhatsApp</label>
                </div>
              </div>

              <div className="relative">
                <label className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2 ml-1">Inquiry Classification</label>
                <div className="relative">
                  <select suppressHydrationWarning className="w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors appearance-none cursor-pointer font-body">
                    <option value="fluid">Fluid Power Components</option>
                    <option value="spares">Compressor Spares (ELGI, Atlas Copco, etc.)</option>
                    <option value="repair">Repair & Rental Services</option>
                    <option value="general">General Engineering Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0ea5e9]">
                    ▼
                  </div>
                </div>
              </div>

              <div className="relative group mt-2">
                <textarea suppressHydrationWarning id="message" rows={4} className="peer w-full bg-[#030014]/50 border border-white/20 rounded-xl px-4 py-4 text-white focus:border-[#0ea5e9] focus:outline-none transition-colors font-body placeholder-transparent mt-4" placeholder="Message" />
                <label htmlFor="message" className="absolute left-4 top-1 bg-[#110b29] px-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-8 peer-placeholder-shown:bg-transparent peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-[#0ea5e9] peer-focus:bg-[#110b29] transition-all pointer-events-none">Requirement Details</label>
              </div>

              <button suppressHydrationWarning type="submit" className="w-full group relative overflow-hidden bg-[#0ea5e9] text-[#030014] font-heading font-black px-8 py-5 rounded-xl uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(251,204,19,0.5)]">
                <span className="relative z-10 flex items-center justify-center">
                  Transmit Request <Send className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-xl" />
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
