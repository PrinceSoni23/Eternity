"use client";
import { walsheim_bold, walsheim_regular } from "@/components/constants";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { ImageDownIcon } from "lucide-react";

function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-80 md:mt-56">
      <div
        className={`footer flex flex-col md:flex-row relative z-30 mt-80 text-white ${walsheim_regular.className} `}
      >
        <div className="flex items-center justify-center md:justify-start absolute z-30 mb-20 -top-48 md:-top-52">
          <div className="flex flex-col gap-3 justify-center items-center md:ml-20 md:items-start text-center md:text-start w-[90%] md:w-[60%]">
            <h1
              className={`text-lg md:text-2xl text-white font-bold ${walsheim_bold.className}`}
            >
              Get ready till we bring innovation
            </h1>
            <p
              className={`text-sm md:text-lg text-white ${walsheim_regular.className}`}
            >
              Get a personalized demo to learn how Eternity AI can help you
              drive measurable business value.
            </p>
            <InteractiveHoverButton text="Demo" />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between border-t border-neutral-700 sm:px-20 md:px-24 z-20 gap-10 md:gap-0 w-full p-6 md:py-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            border: "none",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-xl font-bold hover:text-cyan-600">
              ETERNITY LABS
            </Link>
            <Link href="#" className="hover:text-cyan-600">
              Company
            </Link>
            <Link href="#" className="hover:text-cyan-600">
              Events
            </Link>
            <Link href="about-us" className="hover:text-cyan-600">
              About Us
            </Link>
            <h6 className="text-sm">© 2024 eternitylabs.ai</h6>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold">Products</h1>
            <Link href="#" className="hover:text-cyan-600">
              Saar.ai
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold">Discover</h1>
            <Link href="#" className="hover:text-cyan-600">
              Community
            </Link>
            <Link href="customer-support" className="hover:text-cyan-600">
              Technical Support
            </Link>
            <Link href="#" className="hover:text-cyan-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cyan-600">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-bold">Contact</h1>
            <p>457, Gomti Nagar, Lucknow 220022</p>
            <p>eternity.ai@gmail.com</p>
            <p>+91 99360000000032</p>
          </div>
        </div>
        <div className="absolute z-5 right-10 -top-24 sm:-top-40 md:-top-52">
          <Image
            className="h-56 sm:h-80 md:h-[500px] w-[500px] opacity-90"
            width={500}
            height={500}
            src="/globe01.png"
            alt="Decorative Globe"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
