import "@/styles/globals.css";
import { cn } from "@/lib";
import { generateMetadata } from "./utils/index";
import { base, heading } from "./constants/fonts";
import { Toaster } from "@/components/ui/sonner";
import { subheading } from "./constants/fonts";

export const metadata = generateMetadata();
import StoreProvider from "./StoreProvider";
import RefreshSession from "./refreshSession"; //

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
      <body className="antialiased flex flex-col min-h-screen relative">
        <StoreProvider>
          <RefreshSession /> 
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
