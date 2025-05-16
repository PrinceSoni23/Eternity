"use client";
import "../../globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex items-center justify-center flex-1 z-10 overflow-hidden">
        {children}
      </main>
      <div className="w-full absolute bottom-0">
        <Image
          src="/registration_bottom.png"
          alt="Bottom Image"
          className="w-full object-cover"
        />
      </div>
    </>
  );
}
