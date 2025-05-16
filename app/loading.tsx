'use client';

import Lottie from "lottie-react";
import animationData from "./lotties/loading.json"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
        <div className="flex justify-center">
          <Lottie 
            animationData={animationData}
            className="w-96 h-96"
            loop={true}
          />
        </div>
    </div>
  );
}
