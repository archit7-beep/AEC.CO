import React from 'react';
import Hero from '@/components/Hero';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import { WhyChooseUs, IndustriesServed, OurServices } from '@/components/InformationSections';
import { PartnerLogos } from '@/components/PortfolioSections';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full relative z-10 font-body">
      <Hero />
      <PartnerLogos />
      <IndustriesServed />
      <OurServices />
      <WhyChooseUs />
      <FeaturedCarousel />
      <ContactSection />
      
      {/* Basic Footer */}
      <footer className="w-full bg-[#030014] border-t border-white/5 py-12 text-center">
        <p className="font-body text-slate-500 text-sm">&copy; {new Date().getFullYear()} Amal Engineering Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
