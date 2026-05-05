import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Updated Metadata for the Job Market
export const metadata: Metadata = {
  title: "Leonard Kombo | Frontend Engineer",
  description: "Specializing in Booking Systems, Marketplaces, and M-Pesa Integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning here handles extension-injected attributes on <html>
    <html lang="en" suppressHydrationWarning>
      <body 
        // 2. Applied font variables and the hydration fix to the body tag
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}