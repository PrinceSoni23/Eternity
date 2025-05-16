"use client";
import React, { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { ContainerScroll } from "./components/ui/container-scroll-animation.tsx";
import EternalDifference from "./components/EternalDifference";
import FAQ from "./components/FAQ";
import { walsheim_bold } from "@/components/constants";
import { CoverDemo } from "./components/CoverDemo";
import StickyScroll from "./components/sticky_scroll";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import features from "./components/ProductComparison.jsx";
import ProductComparison from "./components/ProductComparison";
import Image from "next/image.js";

const LandingPage: NextPage = () => {
  
  
  return (
    <>
      <div>
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
          <Head>
            <title>Eternity Labs</title>
            <meta
              name="description"
              content="Built in India, Built for India"
            />
          </Head>
          <div className="flex items-center justify-center w-full h-screen px-4 sm:px-8 relative">
            <video
              src="/videos/eternity_logo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[90%] max-w-[1200px] h-auto object-contain"
            />
          </div>
          <div className="absolute bottom-10 text-center px-4">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold ${walsheim_bold.className}`}
            >
              ETERNITY AI
            </h1>
            <p
              className={`mt-2 text-xs sm:text-sm md:text-lg ${walsheim_bold.className}`}
            >
              BUILT IN INDIA, BUILT FOR INDIA
            </p>
          </div>
        </div>

        {/* <div className="hidden md:flex items-center justify-center">
              <div className="hidden md:block">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black text-white bg-black dark:text-black flex items-center space-x-2"
                >
                  <h1 className={`text-white ${walsheim_bold.className}`}>Member Login</h1>
                </HoverBorderGradient>
              </div>
              </div> */}

             

        <div className=" -mt-64 bg-black px-4 sm:px-8">
        
          <ContainerScroll titleComponent={<h2></h2>}>
          
            <Image
              src="/dashboard.svg"
              width={2000}
              height={500}
              alt="Descriptive alt text"
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
            />
          </ContainerScroll>
          
        </div>
        <div className="-mt-80">
        <ProductComparison /></div>
        <div className=" mt-72 bg-black px-4 sm:px-8">
          <CoverDemo />
        </div>
        <div id="sticky" className="bg-black -mt-20 px-4 sm:px-8">
          <StickyScroll />
        </div>
        <div id="ED">
          <EternalDifference />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
