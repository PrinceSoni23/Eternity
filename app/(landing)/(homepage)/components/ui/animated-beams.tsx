"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[250px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-lg p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/call.svg"
              width={2000}
              height={2000}
              alt="Call"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
          <Circle ref={div5Ref} className="relative w-8 h-8 rounded-full ">
            <Image
              src="/gmail.svg"
              width={20}
              height={20}
              alt="Gmail"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/message.svg"
              width={20}
              height={20}
              alt="Message"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
          <Circle ref={div4Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/ai.svg"
              width={20}
              height={20}
              alt="AI"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
          <Circle ref={div6Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/whats.svg"
              width={20}
              height={20}
              alt="WhatsApp"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/fb.svg"
              width={20}
              height={20}
              alt="Facebook"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
          <Circle ref={div7Ref} className="relative w-8 h-8 rounded-full">
            <Image
              src="/insta.svg"
              width={20}
              height={20}
              alt="Instagram"
              className="absolute w-full h-full object-cover"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
