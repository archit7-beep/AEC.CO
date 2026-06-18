import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Download, PenTool } from 'lucide-react';
import { CATALOG_DATA } from '@/lib/catalogData';
import ProductTable from '@/components/ProductTable';
import ComingSoonButton from '@/components/ComingSoonButton';
import CompressorSaaSPage from '@/components/CompressorSaaSPage';

export function generateStaticParams() {
  return Object.keys(CATALOG_DATA).map((category) => ({
    category: category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryData = CATALOG_DATA[resolvedParams.category];

  if (!categoryData) {
    notFound();
  }

  // Intercept the compressors category and render the bespoke SaaS layout
  if (resolvedParams.category === 'compressors') {
    return <CompressorSaaSPage categoryData={categoryData} />;
  }

  return (
    <div className="w-full relative z-10 font-body pb-24">
      {/* Cinematic Header */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[#030014] z-0" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent z-0" />
        
        {/* Abstract Background Elements */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-[100px] z-0 pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
          <div className="flex-1">
            <Link href="/products" className="inline-flex items-center text-slate-400 hover:text-[#0ea5e9] transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
            </Link>
            <div className="font-mono text-sm text-[#0ea5e9] uppercase tracking-[0.3em] font-bold mb-4">
              {categoryData.brand}
            </div>
            <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-6 leading-none">
              {categoryData.heroText.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word} {i !== categoryData.heroText.split(' ').length - 1 && <br/>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-slate-400 max-w-xl font-light leading-relaxed border-l-2 border-[#0ea5e9] pl-6">
              {categoryData.desc}
            </p>
          </div>
          
          <div className="w-full md:w-1/3 aspect-square relative bg-white/5 rounded-2xl border border-white/10 p-0 md:p-8 backdrop-blur-sm hidden md:flex items-center justify-center overflow-hidden group">
            {/* SaaS-style glowing backdrop behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0ea5e9]/10 blur-[80px] rounded-full z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Image 
              src={categoryData.img} 
              alt={categoryData.name}
              fill
              className="object-contain p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Main Content & Tables */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div className="md:max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-white">Technical Specifications</h2>
            <p className="font-mono text-sm text-slate-500 mt-2 mb-4">Available Configurations & Part Numbers</p>
            <div className="bg-[#0ea5e9]/10 border-l-4 border-[#0ea5e9] p-4 rounded-r-md">
              <p className="font-body text-sm text-slate-300">
                <span className="font-bold text-[#0ea5e9]">Note:</span> All series are available in complete standard configurations (e.g. bore, stroke, flow rate, port size). Contact our sales team for exact part number availability and customized solutions.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            {resolvedParams.category === 'compressors' ? (
              <a 
                href="/booklet/Air Compressor Spec.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/50 px-6 py-3 rounded-md font-mono text-xs uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              >
                <Download className="w-4 h-4 mr-2" /> Download Spec Sheet
              </a>
            ) : (
              <ComingSoonButton className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-md font-mono text-xs uppercase tracking-widest transition-all">
                <Download className="w-4 h-4 mr-2" /> Spec Sheet PDF
              </ComingSoonButton>
            )}
            <Link href="/contact" className="flex items-center bg-[#0ea5e9] hover:bg-white text-[#030014] px-6 py-3 rounded-md font-heading font-bold uppercase tracking-widest transition-all">
              <PenTool className="w-4 h-4 mr-2" /> Request Quote
            </Link>
          </div>
        </div>

        {categoryData.subCategories.map((subCat, index) => {
          const sectionId = subCat.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <div key={index} id={sectionId} className="mb-16 scroll-mt-32">
              <h3 className="font-heading font-bold text-2xl text-[#0ea5e9] uppercase tracking-widest mb-6">
                {subCat.title}
              </h3>
              <ProductTable headers={subCat.tableHeaders} products={subCat.products} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
