import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: "Contact Us | Amal Engineering Corporation",
  description: "Get in touch with Amal Engineering Corporation for heavy duty air compressors, pneumatics, and fluid power system inquiries.",
  openGraph: {
    title: "Contact Us | Amal Engineering Corporation",
    description: "Reach out to our experts for industrial air compressors and fluid power systems.",
  }
};

export default function ContactPage() {
  return (
    <div className="w-full pt-24 min-h-screen">
      <ContactSection />
    </div>
  );
}
