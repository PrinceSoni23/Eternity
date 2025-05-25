// components/EternalDifference.tsx
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { AnimatedListDemo } from "./ui/animatedlist";
import { AnimatedBeamDemo } from "./ui/animated-beams";
import EternalCard from "@/components/eternal-card";
import { walsheim_bold } from "@/components/constants";
import Image from "next/image";

const EternalDifference: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // const containerRef = useRef<HTMLDivElement>(null);
  // const div1Ref = useRef<HTMLDivElement>(null);
  // const div2Ref = useRef<HTMLDivElement>(null);
  // const div3Ref = useRef<HTMLDivElement>(null);
  // const div4Ref = useRef<HTMLDivElement>(null);
  // const div5Ref = useRef<HTMLDivElement>(null);
  // const div6Ref = useRef<HTMLDivElement>(null);
  // const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-white py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          THE{" "}
          <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            ETERNAL
          </span>{" "}
          DIFFERENCE
        </h1>
        <p className="text-lg md:text-xl font-bold mt-4">
          YOUR COMPETITIVE EDGE IN TECHNOLOGY
        </p>
      </div>

      <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-4">
        <EternalCard
          title={"Competitive Pricing"}
          description={
            "At Eternity Labs, we prioritize innovation, offering affordable solutions without compromising on quality."
          }
          imageSrc={"/competitive-pricing.png"}
          imageAlt={"Competitive Pricing"}
        />

        <div
          className="bg-black p-5 shadow-lg rounded-2xl relative 
                    w-[280px]
          sm:w-[340px]
          md:w-[680px] md:h-[320px] 
          "
          style={{
            boxShadow: "inset 0 -5px 20px rgba(255, 255, 255, 0.25)",
            border: "0.5px solid #494949",
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex flex-col items-center">
              <div className="relative w-44 h-44 mb-4"></div>
              <div
                className="absolute w-72 h-[2%] left-5 z-10 hidden md:block"
                style={{
                  pointerEvents: "none",
                }}
              >
                <AnimatedListDemo />
              </div>
            </div>
            <div className="md:absolute md:top-56 md:left-10">
              <h2
                className={`text-white text-lg font-bold mb-2 text-center ${walsheim_bold.className}`}
              >
                Wherever You Are, We Are
              </h2>
              <p
                className={`text-gray-300 text-[0.70rem] text-center w-52 ${walsheim_bold.className}`}
              >
                Seamlessly connecting all your business platforms with Eternity
                AI.
              </p>
            </div>

            <div
              className="absolute -top-5 md:-top-24 right-0 w-[100%] md:w-[60%] h-10"
              style={{
                pointerEvents: "none",
              }}
            >
              <AnimatedBeamDemo />
            </div>
          </div>
        </div>

        <div
          className="bg-black p-5 shadow-lg w-[280px] sm:w-[340px] md:w-[680px] h-[320px] rounded-[20px] relative"
          style={{
            boxShadow: "inset 0 -5px 20px rgba(255, 255, 255, 0.25)",
            border: "0.5px solid #494949",
          }}
        >
          <div className="flex flex-row">
            <div
              className="absolute w-60 sm:w-72 h-[2%] left-0 top-[145px] sm:top-[110px] z-10"
              style={{
                pointerEvents: "none",
              }}
            >
              <Image
                src="/buisiness-need-card-1.png"
                
                width={2000}
                height={3000}
                alt="buisiness-need-card-1"
              />
            </div>
            <div
              className="absolute w-72 h-[2%] md:right-10 md:top-10 z-10"
              style={{
                pointerEvents: "none",
              }}
            >
              <div className="flex flex-col items-center justify-center absolute">
                <h2
                  className={`text-white text-base sm:text-lg font-bold mb-2 text-center ${walsheim_bold.className}`}
                >
                  Everything Your Business Need
                </h2>
                <p
                  className={`text-gray-300 text-[0.70rem] text-center w-52 ${walsheim_bold.className}`}
                >
                  Eternity AI provides everything your business needs to thrive.
                </p>
              </div>
            </div>
            <div
              className="absolute w-96 right-0 top-[138px] z-10 hidden md:block"
              style={{
                pointerEvents: "none",
              }}
            >
              <Image
                src="/buisiness-need-card-2.png"
                width={2000}
                height={2000}
                alt="buisiness-need-card-2"
              />
            </div>
          </div>

          <div className="flex flex-row items-start">
            <div className="flex flex-col items-center">
              <div className="relative w-44 h-44 mb-4"></div>
            </div>
            <div className="flex flex-col items-center"></div>
          </div>
        </div>

        <EternalCard
          title={"Seamless Integration"}
          description={
            "Effortlessly integrate with external APIs to expand your business capabilities and connect seamlessly with the tools you already use."
          }
          imageSrc={"/seamless-integration.png"}
          imageAlt={"Competitive Pricing"}
        />
      </div>
    </div>
  );
};

export default EternalDifference;
