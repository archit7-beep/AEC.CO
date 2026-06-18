'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Hexagon } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  return (
    <section className="w-full py-32 relative z-10 bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-500" id="contact">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white dark:from-[#09090b] to-transparent pointer-events-none transition-colors duration-500" />
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-2 rounded-sm mb-6 shadow-sm transition-colors duration-500">
              <Hexagon className="w-4 h-4 text-[#0055A4]" />
              <h4 className="font-mono text-[#0055A4] text-sm font-bold tracking-widest uppercase">Global Support Desk</h4>
            </div>
            <h2 className="font-heading font-black text-5xl md:text-7xl text-zinc-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
              Contact <span className="text-[#0055A4]">AEC</span>
            </h2>
            <p className="font-body text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6 text-lg transition-colors duration-500">
              Connect with our engineering team for precision fluid power solutions, authentic spare parts, or emergency repair dispatch.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 rounded-sm overflow-hidden shadow-xl relative transition-colors duration-500">
          
          {/* Decorative Edge */}
          <div className="absolute top-0 left-0 w-1 h-full bg-[#0055A4]" />

          {/* Left Column: Contact Info */}
          <div className="w-full xl:w-[45%] bg-white dark:bg-zinc-900 p-6 md:p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden group border-r border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
            <div className="relative z-10">
              <h3 className="font-heading font-black text-3xl text-zinc-900 dark:text-white mb-10 uppercase tracking-wide border-b-2 border-zinc-200 dark:border-zinc-800 pb-6 inline-block pr-12 transition-colors duration-500">
                Headquarters
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-[#0055A4] dark:group-hover/item:border-[#0055A4] transition-all shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg transition-colors duration-500">Location</h5>
                    <p className="font-body text-zinc-600 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed transition-colors duration-500">Shop No.2, Near Hockey Stadium<br/>Nehrunagar, Pimpri<br/>Pune - 18, India</p>
                  </div>
                </div>

                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-[#0055A4] dark:group-hover/item:border-[#0055A4] transition-all shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg transition-colors duration-500">Direct Lines</h5>
                    <p className="font-body text-zinc-600 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed transition-colors duration-500">9860 222 875<br/>7620 510 747</p>
                  </div>
                </div>

                <div className="flex items-start group/item cursor-default">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mr-4 md:mr-6 group-hover/item:border-[#0055A4] dark:group-hover/item:border-[#0055A4] transition-all shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#0055A4]" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-1 md:mb-2 text-base md:text-lg transition-colors duration-500">Digital Dispatch</h5>
                    <p className="font-body text-zinc-600 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed hover:text-[#0055A4] transition-colors cursor-pointer">amalengcorp@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Hours Block */}
            <div className="relative z-10 mt-16 bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 p-8 rounded-sm shadow-sm transition-colors duration-500">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-[#0055A4] mr-3" />
                <h5 className="font-heading font-bold text-zinc-900 dark:text-white uppercase tracking-widest text-sm transition-colors duration-500">Operating Window</h5>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-2 transition-colors duration-500">
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-500">MON - SUN</span>
                <span className="font-mono text-xs text-[#0055A4] font-bold">09:30 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal animation="fade" delay={0.2} className="w-full xl:w-[55%] p-6 md:p-10 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 100 100" className="stroke-[#0055A4] fill-none stroke-2">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="mb-10 relative z-10">
              <h3 className="font-heading font-black text-2xl md:text-3xl text-zinc-900 dark:text-white mb-2 uppercase tracking-wide transition-colors duration-500">
                System Inquiry Form
              </h3>
              <p className="font-body text-zinc-600 dark:text-zinc-400 text-sm md:text-base transition-colors duration-500">
                Submit your specifications below. Our technical team typically responds within 4 hours.
              </p>
            </div>

            <form className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative group">
                  <label htmlFor="name" className="absolute -top-3 left-4 bg-zinc-50 dark:bg-[#09090b] px-2 text-[10px] md:text-xs font-bold font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest z-10 group-focus-within:text-[#0055A4] transition-colors duration-500">
                    Contact Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Engineer"
                    className="w-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-4 md:py-5 rounded-sm focus:outline-none focus:border-[#0055A4] focus:ring-1 focus:ring-[#0055A4] transition-all font-body text-sm md:text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
                
                <div className="relative group">
                  <label htmlFor="company" className="absolute -top-3 left-4 bg-zinc-50 dark:bg-[#09090b] px-2 text-[10px] md:text-xs font-bold font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest z-10 group-focus-within:text-[#0055A4] transition-colors duration-500">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    id="company"
                    placeholder="Global Manufacturing Corp"
                    className="w-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-4 md:py-5 rounded-sm focus:outline-none focus:border-[#0055A4] focus:ring-1 focus:ring-[#0055A4] transition-all font-body text-sm md:text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="email" className="absolute -top-3 left-4 bg-zinc-50 dark:bg-[#09090b] px-2 text-[10px] md:text-xs font-bold font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest z-10 group-focus-within:text-[#0055A4] transition-colors duration-500">
                  Business Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="john@manufacturing.com"
                  className="w-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-4 md:py-5 rounded-sm focus:outline-none focus:border-[#0055A4] focus:ring-1 focus:ring-[#0055A4] transition-all font-body text-sm md:text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
              </div>

              <div className="relative group">
                <label htmlFor="message" className="absolute -top-3 left-4 bg-zinc-50 dark:bg-[#09090b] px-2 text-[10px] md:text-xs font-bold font-mono text-zinc-600 dark:text-zinc-500 uppercase tracking-widest z-10 group-focus-within:text-[#0055A4] transition-colors duration-500">
                  Technical Requirements
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Specify part numbers, pressure requirements, or repair needs..."
                  className="w-full bg-zinc-50 dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-4 md:py-5 rounded-sm focus:outline-none focus:border-[#0055A4] focus:ring-1 focus:ring-[#0055A4] transition-all font-body text-sm md:text-base resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="group w-full md:w-auto flex items-center justify-center gap-3 bg-[#0055A4] text-white font-heading font-bold text-sm md:text-base px-10 py-5 rounded-sm hover:bg-[#004080] transition-colors shadow-lg"
              >
                <span>Transmit Request</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
