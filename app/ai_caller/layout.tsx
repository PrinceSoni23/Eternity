import React from 'react';
import Footer from "../../components/footer";
import Navbar from "../(landing)/(homepage)/components/Navbar";

import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { Toaster } from "@/components/ui/sonner";
// import Providers from "@/app/ai_caller/components/global/providers";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={cn(
          "min-h-screen bg-black text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide"
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />

        {/* Background effect */}
        <div
          id="home"
          className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full mt-[63px]"
        />

        <Navbar />

        <main className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-40 relative">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
