import { ShieldCheck, Clock, Wrench, Award, Settings, Zap, Factory, Box, Building2, Flame, Car, TestTube, Droplets, Plane } from 'lucide-react';
import { SiSiemens, SiSchneiderelectric, SiBosch, SiMitsubishi } from 'react-icons/si';

export const INDUSTRIES = [
  { name: 'Manufacturing', icon: Factory, colSpan: 'md:col-span-2 md:row-span-2', bgImage: '/booklet/manufacturing.jpg' },
  { name: 'Construction', icon: Building2, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/construction.png' },
  { name: 'Oil & Gas', icon: Flame, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/Oil-Gas-2.jpg' },
  { name: 'Automotive', icon: Car, colSpan: 'md:col-span-2 md:row-span-1', bgImage: '/booklet/automotive.jpg' },
  { name: 'Chemical Plants', icon: TestTube, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/chemical plant.jpg' },
  { name: 'Power Gen', icon: Zap, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/power-gen.jpg' },
  { name: 'Water Treatment', icon: Droplets, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/water treatment.webp' },
  { name: 'Aerospace', icon: Plane, colSpan: 'md:col-span-1 md:row-span-1', bgImage: '/booklet/aerospace.jpg' }
];

export const FEATURES = [
  { icon: Clock, title: '15+ Years Experience', desc: 'Over a decade of trusted industry experience.' },
  { icon: ShieldCheck, title: 'Proven Reliability', desc: 'Fast service and dependable support network.' },
  { icon: Award, title: 'Genuine Parts', desc: 'Authentic parts from leading global brands.' },
  { icon: Wrench, title: 'Custom Repair', desc: 'Expert repair and maintenance services.' },
  { icon: Settings, title: 'Flexible Rentals', desc: 'Short and long-term compressor rental options.' },
];

export const PORTFOLIO_IMAGES = [
  '/vs_products/product_7.png',
  '/vs_products/product_8.png',
  '/vs_products/product_9.png',
  '/vs_products/product_10.png',
  '/vs_products/product_11.png',
  '/vs_products/product_12.png',
];

export const PARTNERS = [
  { name: 'BOSCH', icon: SiBosch, color: '#EA0016' },
  { name: 'SIEMENS', icon: SiSiemens, color: '#009999' },
  { name: 'SCHNEIDER', icon: SiSchneiderelectric, color: '#3DCD58' },
  { name: 'MITSUBISHI', icon: SiMitsubishi, color: '#E60012' },
  { name: 'DANFOSS', src: '/logos/danfoss.png' },
  { name: 'HYDROLINE', src: '/logos/hydroline.jpg' },
  { name: 'YUKEN', src: '/logos/yuken.jpg' }
];
