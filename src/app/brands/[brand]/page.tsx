import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, Factory, Globe } from 'lucide-react';

interface BrandData {
  name: string;
  subtitle: string;
  description: string;
  catalogRoute: string;
  img: string;
}

const BRAND_PROFILES: Record<string, BrandData> = {
  'yuken': {
    name: 'Yuken Hydraulic Pumps',
    subtitle: 'Advanced Hydraulic Systems',
    description: 'Yuken is a globally recognized leader in hydraulic equipment. Known for extreme precision and durability, Yuken pumps are utilized in the most demanding industrial applications ranging from injection molding to heavy aerospace manufacturing. Amal Engineering is proud to be a premier partner, supplying authentic Yuken systems with complete after-sales support.',
    catalogRoute: '/products/pumps',
    img: '/booklet/yuken-hydraulic.jpg'
  },
  'polyhydron': {
    name: 'Polyhydron Radial Pumps',
    subtitle: 'Industrial Power Generation',
    description: 'Polyhydron systems are synonymous with robust engineering and high-pressure fluid dynamics. Built to withstand continuous industrial cycles, their radial piston pumps and directional valves provide unmatched reliability. Explore our massive inventory of Polyhydron components engineered for peak performance.',
    catalogRoute: '/products/pumps',
    img: '/booklet/polyhydron pumps.jpg'
  },
  'hydroline': {
    name: 'Hydroline Filters & Valves',
    subtitle: 'Steering & Filtration Excellence',
    description: 'Protecting your hydraulic systems starts with world-class filtration. Hydroline offers superior tank-top, inline, and heavy-duty filters designed to eradicate microscopic contamination. Alongside their filtration units, Hydroline check valves and strainers ensure absolute control over your fluid power networks.',
    catalogRoute: '/products/steering',
    img: '/booklet/hydroline prd.jpg'
  },
  'hyloc': {
    name: 'Hyloc Industrial Couplings',
    subtitle: 'Mechanical Drive Synchronization',
    description: 'Hyloc specializes in high-torque fluid and gear couplings. When mechanical power transmission must be flawless, engineers rely on Hyloc to eliminate vibration and ensure seamless rotary motion. Review our technical specifications for Hyloc couplings below.',
    catalogRoute: '/products/couplings',
    img: '/booklet/hyloc coupling prd.jpg'
  }
};

export function generateStaticParams() {
  return Object.keys(BRAND_PROFILES).map((brand) => ({
    brand: brand,
  }));
}

interface BrandPageProps {
  params: Promise<{
    brand: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const brandData = BRAND_PROFILES[resolvedParams.brand];
  
  if (!brandData) return { title: 'Brand Not Found' };

  return {
    title: `${brandData.name} Authorized Dealer | Amal Engineering`,
    description: brandData.description,
    openGraph: {
      title: `${brandData.name} | Authorized Dealer in India`,
      description: brandData.description,
    }
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const resolvedParams = await params;
  const brandId = resolvedParams.brand.toLowerCase();
  const brandData = BRAND_PROFILES[brandId];

  if (!brandData) {
    notFound();
  }

  return (
    <div className="w-full relative z-10 font-body pb-32 bg-[#030014] min-h-screen">
      
      {/* Brand Hero Header */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden border-b-2 border-white/10">
        <div className="absolute inset-0 bg-[#110b29] z-0" />
        
        {/* Abstract Background Element */}
        <div className="absolute -left-32 top-0 w-[600px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col pt-24">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-[#0ea5e9] transition-colors mb-8 font-mono text-xs uppercase tracking-widest w-max">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <div className="font-mono text-sm text-[#0ea5e9] uppercase tracking-[0.3em] font-bold mb-4">
            Authorized Partnership
          </div>
          <h1 className="font-heading font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none max-w-4xl">
            {brandData.name}
          </h1>
        </div>
      </div>

      {/* Brand Profile Content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Info */}
        <div className="flex-1">
          <h2 className="font-heading font-bold text-3xl text-[#0ea5e9] mb-6">
            {brandData.subtitle}
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed mb-12 border-l-2 border-white/20 pl-6">
            {brandData.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 p-6 border border-white/10 flex flex-col items-start rounded-lg">
              <ShieldCheck className="w-8 h-8 text-[#0ea5e9] mb-4" />
              <h4 className="font-heading font-bold text-white mb-2">OEM Certified</h4>
              <p className="text-sm text-slate-400 font-mono">100% authentic components</p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 flex flex-col items-start rounded-lg">
              <Factory className="w-8 h-8 text-[#0ea5e9] mb-4" />
              <h4 className="font-heading font-bold text-white mb-2">Industrial Grade</h4>
              <p className="text-sm text-slate-400 font-mono">Built for extreme conditions</p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 flex flex-col items-start rounded-lg">
              <Globe className="w-8 h-8 text-[#0ea5e9] mb-4" />
              <h4 className="font-heading font-bold text-white mb-2">Global Support</h4>
              <p className="text-sm text-slate-400 font-mono">Full warranty & service</p>
            </div>
          </div>

          <div className="bg-[#110b29] p-8 border-l-4 border-[#0ea5e9] rounded-r-xl">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">View Technical Specifications</h3>
            <p className="text-slate-400 mb-8">Access our comprehensive database of sizes, flow rates, and stock availability for {brandData.name}.</p>
            <Link 
              href={brandData.catalogRoute}
              className="inline-flex items-center justify-center bg-[#0ea5e9] text-[#030014] font-heading font-black px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors"
            >
              Access Catalog <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-[500px] shrink-0">
          <div className="w-full aspect-square relative bg-white rounded-xl p-8 shadow-[12px_12px_0_#0ea5e9] border-4 border-white">
            <Image 
              src={brandData.img}
              alt={brandData.name}
              fill
              className="object-contain p-8"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
