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
      <footer className="w-full bg-zinc-100 dark:bg-slate-900 border-t border-zinc-200 dark:border-slate-800 py-12 text-center transition-colors duration-500">
        <p className="font-body text-zinc-600 dark:text-slate-400 text-sm transition-colors duration-500">&copy; {new Date().getFullYear()} Amal Engineering Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
