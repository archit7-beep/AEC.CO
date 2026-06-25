import React from 'react';
import { Award, Target, Factory, Wrench } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function AboutPreview() {
  return (
    <section className="w-full py-32 bg-slate-100 dark:bg-[#030014] relative z-10 overflow-hidden transition-colors duration-500" id="about-us">
      {/* Background brutalist numbers */}
      <div className="absolute -left-[5%] top-1/2 -translate-y-1/2 text-slate-200 dark:text-[#c29f2f]/10 font-heading font-black text-[40vw] leading-none pointer-events-none transition-colors duration-500">
        15+
      </div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-end">
        
        {/* Massive Headline */}
        <ScrollReveal animation="slide-up">
          <div className="w-full md:w-[80%] border-b-8 border-slate-900 dark:border-[#0ea5e9] pb-12 mb-12 transition-colors duration-500">
            <h2 className="font-heading font-black text-slate-900 dark:text-white text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase transition-colors duration-500">
              EST. 2008. <br/>
              <span className="text-[#0ea5e9] dark:text-[#0ea5e9] drop-shadow-[4px_4px_0_rgba(14,165,233,0.2)] dark:drop-shadow-[4px_4px_0_rgba(255,255,255,0.1)]">AUTHORISED</span> <br/>
              GLOBAL <br/>
              <span className="italic">PARTNERS.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Content Split */}
        <div className="w-full flex flex-col xl:flex-row gap-16 md:gap-32 justify-end">
          
          {/* Left / Top Info Text */}
          <div className="w-full xl:w-1/2 flex flex-col gap-12">
            <ScrollReveal animation="fade">
              <p className="font-mono text-slate-800 dark:text-slate-300 text-xl leading-relaxed font-bold border-l-4 border-[#0ea5e9] pl-6 transition-colors duration-500">
                Established in 2008, Amal Engineering is a trusted name in the field of industrial engineering solutions. We specialize in the manufacturing, authorized supply, repair, and rental of industrial air compression and fluid power systems, offering high-performance solutions tailored to diverse industrial applications.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal animation="slide-up" delay={0.1}>
                <div className="bg-slate-900 dark:bg-[#0ea5e9] text-white p-8 transform -rotate-1 hover:rotate-0 transition-all shadow-2xl h-full border border-transparent dark:border-[#0ea5e9]">
                  <Factory className="w-12 h-12 text-[#0ea5e9] dark:text-white mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Manufacturing</h3>
                  <p className="font-body text-slate-300 dark:text-white/90">
                    We manufacture heavy-duty Air Compressors, high-efficiency Air Dryers, Filters, and Auto Drain Valves.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={0.2}>
                <div className="bg-white dark:bg-white text-slate-900 dark:text-[#030014] p-8 transform rotate-1 hover:rotate-0 transition-all shadow-2xl h-full border border-slate-200 dark:border-white">
                  <Target className="w-12 h-12 text-[#0ea5e9] dark:text-[#0ea5e9] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Authorized Supply</h3>
                  <p className="font-body text-slate-600 dark:text-slate-700">
                    Authorized Distributors for Janatics Pneumatics. Suppliers of genuine OEM spares for ELGI, Atlas Copco, and Chicago Pneumatic.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={0.3}>
                <div className="bg-white dark:bg-white text-slate-900 dark:text-[#030014] p-8 transform -rotate-1 hover:rotate-0 transition-all shadow-2xl h-full border border-slate-200 dark:border-white">
                  <Wrench className="w-12 h-12 text-[#0ea5e9] dark:text-[#0ea5e9] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Repair & Rental</h3>
                  <p className="font-body text-slate-600 dark:text-slate-700">
                    Complete compressor repair services. Short-and long-term rental fleets available to keep your production lines moving without interruption.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={0.4}>
                <div className="bg-[#0ea5e9] text-white p-8 transform rotate-1 hover:rotate-0 transition-transform shadow-2xl h-full border border-transparent">
                  <Award className="w-12 h-12 text-white/90 mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Why Choose Us</h3>
                  <ul className="font-body text-white/90 space-y-2 list-disc list-inside">
                    <li>15+ Years Industry Experience</li>
                    <li>Authorized Janatics Partner</li>
                    <li>Genuine Global Brand Parts</li>
                    <li>Proven Fast Reliability</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Right / Bottom Visual */}
          <ScrollReveal animation="slide-left" className="w-full xl:w-1/2 relative h-[500px] md:h-auto min-h-[600px] border-4 border-slate-900 dark:border-[#0ea5e9] bg-slate-900 dark:bg-[#0ea5e9] overflow-hidden group transition-colors duration-500">
             <Image 
                src="/vs_products/product_1.png"
                alt="Industrial Facility"
                fill
                className="object-cover opacity-60 dark:opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
             />
             <div className="absolute inset-0 border-[20px] border-[#0ea5e9] dark:border-[#030014] m-8 mix-blend-overlay pointer-events-none" />
             <div className="absolute bottom-0 left-0 bg-slate-900 dark:bg-[#030014] text-white font-heading font-black text-4xl p-6 uppercase tracking-widest transition-colors duration-500">
                Trusted Excellence
             </div>
          </ScrollReveal>
          
        </div>

      </div>
    </section>
  );
}
