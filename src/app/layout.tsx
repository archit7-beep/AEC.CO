import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import ClientThemeWrapper from "@/components/ClientThemeWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://amalengg.com'),
  title: {
    default: "Amal Engineering Corporation",
    template: "%s | Amal Engineering"
  },
  description: "Established in 2008, Amal Engineering Corporation is a trusted industrial engineering company and the best compressor dealer in Pimpri-Chinchwad (PCMC) and Pune. Supplying top-rated air compressors, pneumatics, and fluid power equipment to Bhosari MIDC and across India.",
  keywords: ["Amal Engineering", "air compressors", "pneumatics", "hydraulic pumps", "industrial fittings", "compressor spares", "best compressor dealer in PCMC", "good compressor dealer", "best dealer in Bhosari MIDC", "Pimpri-Chinchwad", "Pune"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amalengg.com",
    siteName: "Amal Engineering Corporation",
    title: "Amal Engineering Corporation",
    description: "Industrial fluid power, pneumatic systems, and heavy-duty air compressors.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

import SmoothScroll from "@/components/SmoothScroll";
import { EnquiryProvider } from '@/context/EnquiryContext';
import EnquiryDrawer from '@/components/EnquiryDrawer';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://amalengg.com/#organization",
                  "name": "Amal Engineering Corporation",
                  "url": "https://amalengg.com",
                  "logo": "https://amalengg.com/booklet/logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/amal-engineering-corporation",
                    "https://www.facebook.com/amalengcorp"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://amalengg.com/#localbusiness",
                  "name": "Amal Engineering Corporation",
                  "image": "https://amalengg.com/booklet/logo.png",
                  "description": "Amal Engineering Corporation is a trusted industrial engineering company and the best compressor dealer in Pimpri-Chinchwad (PCMC) and Pune. We supply and service industrial air compressors, pneumatics, and fluid power equipment near Bhosari MIDC.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Shop No.2, Near Hockey Stadium, Nehrunagar",
                    "addressLocality": "Pimpri, Pune",
                    "addressRegion": "Maharashtra",
                    "postalCode": "411018",
                    "addressCountry": "IN"
                  },
                  "telephone": "+91-9860222875",
                  "email": "amalengcorp@gmail.com",
                  "url": "https://amalengg.com",
                  "priceRange": "$$",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Do you supply and service air compressors in Bhosari MIDC?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Amal Engineering supplies and services rotary screw and piston compressors for manufacturing plants throughout Bhosari MIDC, Pimpri-Chinchwad, and Pune."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What types of industrial compressors do you sell in PCMC?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We are a top dealer for high-pressure piston compressors, rotary screw compressors, and PET blowing compressors in the PCMC area."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you provide compressor overhauling and repair?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we provide full maintenance, overhauling, and repair services for industrial air compressors, along with genuine OEM spare parts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Who is the best compressor dealer in Pimpri-Chinchwad?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Amal Engineering Corporation is widely considered the best and most reliable compressor dealer in Pimpri-Chinchwad (PCMC) and Bhosari MIDC, offering top-tier machines and rapid service."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you supply spare parts for all compressor and pneumatic brands?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we are a good dealer for all parts and all brands. We supply valves, cylinders, and fittings for major B2B industrial brands including Janatics, Festo, SMC, and compressor spares for Atlas Copco, ELGi, and Chicago Pneumatic."
                      }
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://amalengg.com/#website",
                  "url": "https://amalengg.com",
                  "name": "Amal Engineering Corporation",
                  "publisher": {
                    "@id": "https://amalengg.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen text-slate-900 dark:text-slate-100 bg-[#FAFAFA] dark:bg-[#050505] selection:bg-cyan-500/30 selection:text-white font-body transition-colors duration-500">
        <EnquiryProvider>
          <ClientThemeWrapper>
            <SmoothScroll>
              {children}
              <EnquiryDrawer />
            </SmoothScroll>
          </ClientThemeWrapper>
        </EnquiryProvider>
      </body>
    </html>
  );
}
