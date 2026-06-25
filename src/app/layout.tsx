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
  title: "AMAL ENGG CORP",
  description: "Authorized Distributor - Established 2008",
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
        <ClientThemeWrapper>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
