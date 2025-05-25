import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "./utils/index";
import { base, heading, subheading } from "./constants/fonts";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import Loading from "./loading";

// If you have any dynamic, client-only logic, wrap it in a ClientOnly component
// Example ClientOnly component at the end of this file

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-black text-foreground antialiased font-heading overflow-x-hidden !scrollbar-hide",
                    base.variable,
                    heading.variable,
                    subheading.variable,
                )}
            >
                {/* Toaster is likely a client component, so it's fine here */}
                <Toaster richColors theme="dark" position="top-right" />
                <StoreProvider>
                    <Suspense fallback={<Loading />}>
                        {/* 
                          If you know which children are client-only and cause hydration errors,
                          wrap them in <ClientOnly> (see below).
                          Otherwise, render children as usual:
                        */}
                        {children}
                    </Suspense>
                </StoreProvider>
            </body>
        </html>
    );
}
