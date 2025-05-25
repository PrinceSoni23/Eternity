"use client";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Eternity Labs</title>
            <meta name="description" content="Description" />
        </head>

        <body className="antialiased flex flex-col min-h-screen bg-white relative">
            {children}
        </body>
        </html>
    );
}

