"use client";

import {
    walsheim_medium_bold,
} from "@/components/constants";
import "../../globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <div className="flex items-center justify-center mt-10">
            <h1 className={`${walsheim_medium_bold.className} text-4xl`}>ETERNITY LABS</h1>
        </div>
        <main className="flex items-center justify-center">
            {children}
        </main>
        </>
    );
}
