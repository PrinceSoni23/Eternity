'use client';

import Lottie from "lottie-react";
import animationData from "@/app/lotties/loading.json";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function UniversalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Prevent loader on initial mount if desired
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLoading(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setLoading(false), 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300"
      aria-busy="true"
      role="status"
    >
      <div className="flex justify-center">
        <Lottie
          animationData={animationData}
          className="w-48 h-48"
          loop={true}
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
