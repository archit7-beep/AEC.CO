import React from 'react';
import { Metadata } from 'next';
import AboutPreview from '@/components/AboutPreview';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Amal Engineering Corporation's history, mission, and commitment to delivering industrial excellence since 2008.",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <AboutPreview />
    </div>
  );
}
