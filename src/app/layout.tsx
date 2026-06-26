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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://amalengcorp.com'),
  title: {
    default: "Amal Engineering Corporation",
    template: "%s | Amal Engineering"
  },
  description: "Established in 2008, Amal Engineering is a leading manufacturer and authorized supplier of industrial air compressors, pneumatic systems, and fluid power equipment in India.",
  keywords: ["Amal Engineering", "air compressors", "pneumatics", "hydraulic pumps", "industrial fittings", "compressor spares", "Janatics dealer"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amalengcorp.com",
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
      <body suppressHydrationWarning className="min-h-screen text-slate-900 dark:text-slate-100 bg-[#FAFAFA] dark:bg-[#050505] selection:bg-cyan-500/30 selection:text-white font-body transition-colors duration-500">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amal Engineering Corporation",
              "image": "https://amalengcorp.com/booklet/logo.png",
              "description": "Established in 2008, Amal Engineering is a trusted manufacturer and authorized supplier of industrial air compressors, pneumatic systems, and fluid power equipment.",
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
              "url": "https://amalengcorp.com"
            })
          }}
        />
        <ClientThemeWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
