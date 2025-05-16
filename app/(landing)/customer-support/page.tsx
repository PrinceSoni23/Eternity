import React from "react";
import {
  walsheim_medium,
  walsheim_regular,
  walsheim_ultra_bold,
} from "@/components/constants";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="text-white">
        <div className="flex flex-col items-center justify-center mt-36">
          <div className="flex flex-col items-center justify-center w-[80%] mb-10">
            <h1 className={`text-5xl text-center md:text-6xl ${walsheim_ultra_bold.className} mb-7`}>
              How can we Help?
            </h1>
            <p
              className={`w-[85%] text-center md:text-center text-xl ${walsheim_regular.className}`}
            >
              Whether you are seeking answers to your queries or need
              personalized support, we are here to assist you. Explore our
              comprehensive resources or get in touch with our team for expert
              guidance. At Eternity Labs, we are committed to providing the help
              you need to ensure your experience is seamless and your questions
              are answered promptly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:mt-14 md:gap-16 relative">
            <div className="border-2 h-44 w-72 rounded-2xl border-[#494949] flex flex-col justify-center gap-6 items-center">
              <Image className="relative z-20" src="/chat.svg" alt="" />
              <h1
                className={`text-xl relative z-20 ${walsheim_medium.className}`}
              >
                Live Chat
              </h1>
              <div className="absolute z-10">
                <Image 
                  className="w-72 h-44 opacity-20 rounded-2xl"
                  src="/whiteBG.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="border-2 h-44 w-72 rounded-2xl border-[#494949] flex flex-col justify-center gap-6 items-center">
              <Image className="relative z-20" src="/contact.svg" alt="" />
              <h1
                className={`text-xl relative z-20 ${walsheim_medium.className}`}
              >
                Contact Us
              </h1>
              <div className="absolute z-10">
                <Image
                  className="w-72 h-44 opacity-20 rounded-2xl"
                  src="/whiteBG.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="border-2 h-44 w-72 rounded-2xl border-[#494949] flex flex-col justify-center gap-6 items-center">
              <Image className="relative z-20" src="/technical.svg" alt="" />
              <h1
                className={`text-xl relative z-20 ${walsheim_medium.className}`}
              >
                Technical Support
              </h1>
              <div className="absolute z-10">
                <Image
                  className="w-72 h-44 opacity-20 rounded-2xl"
                  src="/whiteBG.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
