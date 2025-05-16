"use client";
import "../globals.css";
import Footer from "../../components/footer";
import Navbar from "./(homepage)/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
