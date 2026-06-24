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
      <ClientThemeWrapper>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </ClientThemeWrapper>
    </html>
  );
}
