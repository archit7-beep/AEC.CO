import React from 'react';
import { Award, Target, Factory, Wrench } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function AboutPreview() {
  return (
    <section className="w-full py-32 bg-[#FBCC13] relative z-10 overflow-hidden" id="about-us">
      {/* Background brutalist numbers */}
      <div className="absolute -left-[5%] top-1/2 -translate-y-1/2 text-[#c29f2f] font-heading font-black text-[40vw] leading-none pointer-events-none opacity-50">
        15+
      </div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-end">
        
        {/* Massive Headline */}
        <ScrollReveal animation="slide-up">
          <div className="w-full md:w-[80%] border-b-8 border-[#0A192F] pb-12 mb-12">
            <h2 className="font-heading font-black text-[#0A192F] text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter uppercase">
              EST. 2008. <br/>
              <span className="text-white drop-shadow-[4px_4px_0_#0A192F]">AUTHORISED</span> <br/>
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
              <p className="font-mono text-[#0A192F] text-xl leading-relaxed font-bold border-l-4 border-white pl-6">
                Established in 2008, Amal Engineering is a trusted name in the field of industrial engineering solutions. We specialize in the manufacturing, supply, repair, and rental of air compression and fluid power systems, offering high-performance solutions tailored to diverse industrial applications.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal animation="slide-up" delay={0.1}>
                <div className="bg-[#0A192F] text-white p-8 transform -rotate-1 hover:rotate-0 transition-transform shadow-2xl h-full">
                  <Factory className="w-12 h-12 text-[#00A8CC] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Manufacturing</h3>
                  <p className="font-body text-slate-300">
                    We manufacture high-grade Air Compressors, Air Dryers, Filters, and Auto Drain Valves.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={0.2}>
                <div className="bg-white text-[#0A192F] p-8 transform rotate-1 hover:rotate-0 transition-transform shadow-2xl h-full">
                  <Target className="w-12 h-12 text-[#FBCC13] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Authorized Supply</h3>
                  <p className="font-body text-slate-600">
                    Suppliers of compressor spares for all major brands including ELGI, KND, FOUJI, Kirloskar, Atlas Copco, Chicago Pneumatic, and Ingersoll Rand.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={0.3}>
                <div className="bg-white text-[#0A192F] p-8 transform -rotate-1 hover:rotate-0 transition-transform shadow-2xl h-full">
                  <Wrench className="w-12 h-12 text-[#FBCC13] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Repair & Rental</h3>
                  <p className="font-body text-slate-600">
                    Complete compressor repair services. Compressors available on a rental basis for both short-and long-term industrial needs.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={0.4}>
                <div className="bg-[#0A192F] text-white p-8 transform rotate-1 hover:rotate-0 transition-transform shadow-2xl h-full">
                  <Award className="w-12 h-12 text-[#00A8CC] mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2">Why Choose Us</h3>
                  <ul className="font-body text-slate-300 space-y-2 list-disc list-inside">
                    <li>15+ Years Industry Experience</li>
                    <li>Genuine Global Brand Parts</li>
                    <li>Custom Maintenance Services</li>
                    <li>Proven Fast Reliability</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

          </div>

          {/* Right / Bottom Visual */}
          <ScrollReveal animation="slide-left" className="w-full xl:w-1/2 relative h-[500px] md:h-auto min-h-[600px] border-4 border-[#0A192F] bg-[#0A192F] overflow-hidden group">
             <Image 
                src="/vs_products/product_1.png"
                alt="Industrial Facility"
                fill
                className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
             />
             <div className="absolute inset-0 border-[20px] border-[#FBCC13] m-8 mix-blend-overlay pointer-events-none" />
             <div className="absolute bottom-0 left-0 bg-[#0A192F] text-white font-heading font-black text-4xl p-6 uppercase tracking-widest">
                Trusted Excellence
             </div>
          </ScrollReveal>
          
        </div>

      </div>
    </section>
  );
}
