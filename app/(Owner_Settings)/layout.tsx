"use client";
import "../globals.css";
import Design from "./Owner_Settings/design";

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
      <Design>
        {children}
      </Design>
  </>;
}