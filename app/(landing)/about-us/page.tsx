import React from "react";
import { CardHoverEffectDemo } from "../../../components/card-hover";
import {
  walsheim_bold,
  walsheim_medium,
  walsheim_regular,
} from "@/components/constants";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="relative top-10 text-white">
      <div className="row1 md:px-16 md:h-screen flex flex-col-reverse mb-16 md:mb-0 md:flex-row items-center justify-center relative">
        <div className="flex flex-col justify-center items-center w-[80%] text-center md:text-start md:items-start md:w-[50%] gap-4 relative md:left-20 ">
          <h1 className={`text-5xl mb-5 ${walsheim_bold.className}`}>
            Transforming Traditions with Innovation and Inventions
          </h1>
          <p
            className={`text-xl md:text-2xl  md:text-start mb-5 ${walsheim_regular.className}`}
          >
            Eternity Labs is at the forefront of redefining traditional
            practices with a blend of groundbreaking innovation and
            transformative inventions. Our mission is to seamlessly integrate
            visionary solutions into conventional systems, fostering a future
            where creativity and progress go hand in hand.
          </p>
          <InteractiveHoverButton text="Demo" />
        </div>
        <div className="relative md:left-16 top-5 z-20">
          <Image className="w-[900px]" src="/eternity.png" width={2000} height={2000} alt="" />
        </div>
      </div>

      <div className="row2 flex justify-center items-center relative">
        <div className="flex flex-col w-[70%] border border-white/40 gap-6 text-center p-5 py-10 overflow-hidden rounded-2xl relative z-20">
          <div className={`text-5xl font-bold mb-6 ${walsheim_bold.className}`}>
            In Pursuit of Excellence
          </div>
          <div className={`text-xl ${walsheim_medium.className}`}>
            At Eternity Labs, we strive to redefine the future by transforming
            conventional ideas into extraordinary innovations. Our goal is to
            inspire progress and empower individuals and organizations to unlock
            their full potential through groundbreaking solutions.
          </div>
          <div className="w-full h-full overflow-hidden rounded-2xl absolute left-0 top-0 z-0">
            <Image
              className="w-full h-full opacity-20"
              src="/whiteBG.jpg"
              width={2000}
              height={2000}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-32">
        <div
          className={`text-5xl text-center md:text-start ${walsheim_bold.className} mb-6`}
        >
          The Heart of Who We Are
        </div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default AboutUs;
