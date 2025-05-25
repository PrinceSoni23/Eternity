"use client";

// import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/contexts/theme-provider";
// import { Space_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/context/theme-provider";
import Footer from "../(landing)/(homepage)/components/Footer";
import Navbar from "../(landing)/(homepage)/components/Navbar";

// const sansFont = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
//   display: "swap",
//   weight: "400",
// });

// const monoFont = Space_Mono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
//   display: "swap",
//   weight: "400",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <main className="sm:container mx-auto mt-20 w-[90vw] h-auto scroll-smooth">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
