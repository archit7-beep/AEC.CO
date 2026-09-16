import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Contact Amal Engineering | Compressor Maintenance & Support in Pune",
  description: "Contact our engineering team in Pimpri, Pune for industrial compressor repair, pneumatic system maintenance, and authorized spare parts dispatch.",
  openGraph: {
    title: "Contact Amal Engineering | Compressor Maintenance & Support in Pune",
    description: "Contact our engineering team in Pimpri, Pune for industrial compressor repair, pneumatic system maintenance, and authorized spare parts dispatch.",
  }
};

export default function ContactPage() {
  return (
    <div className="w-full pt-24 min-h-screen">
      <ContactSection />
    </div>
  );
}
