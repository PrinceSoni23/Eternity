"use client";

import { buttonVariants } from "@/components/ui/button";
import Lottie from "lottie-react";
import Link from "next/link";
import animationData from "./lotties/404.json";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-2 text-white">
        <div className="flex justify-center">
          <Lottie
            animationData={animationData}
            className="w-96 h-96"
            loop={true}
          />
        </div>
        <h2 className="text-7xl font-bold pr-1 text-white">404</h2>
        <p className="text-muted-foreground text-md font-medium text-white">
          Page not found {":("}
        </p>
        <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
      <Link href="/" className={buttonVariants({})}>
        Back to homepage
      </Link>
    </div>
  );
}
