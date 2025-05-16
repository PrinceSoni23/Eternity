import React from "react";
import { Cover } from "./ui/Cover";
import { walsheim_medium } from "@/components/constants";

export function CoverDemo() {
  return (
    <div className="px-4 -mb-60 lg:px-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto text-start sm:ml-8 md:ml-16 lg:ml-24 -mt-24 sm:-mt-36 md:-mt-48 lg:-mt-72 mb-12 relative z-40 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-200 dark:via-white dark:to-white">
        <Cover>Accelerating Growth</Cover> with Eternity
      </h1>

      <div
        className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl -mt-6 sm:-mt-10 md:-mt-10 lg:-mt-12 sm:ml-8 md:ml-16 lg:ml-24 ${walsheim_medium.className}`}
      >
        <h2>Empowering Businesses with AI-Driven Innovation</h2>
      </div>
    </div>
  );
}
