"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, motionValue } from "framer-motion";
import { useRef } from "react";
import { walsheim_bold, walsheim_medium } from "@/components/constants";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: number;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(motionValue(progress), range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="w-full h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: "rgba(23, 23, 23, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "25px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative top-[-25%] w-full max-w-[1000px] p-6 md:p-12 transform-origin-top rounded-2xl"
      >
        <h2
          className={`${walsheim_bold.className} text-white text-2xl text-center m-0`}
        >
          {title}
        </h2>
        <div className="flex flex-col md:flex-row h-full mt-8 gap-6 md:gap-12">
          <div className="w-full md:w-2/5 relative top-10">
            <p className={`${walsheim_medium.className} text-white text-base`}>
              {description}
            </p>
            <span className="flex items-center gap-2 mt-4">
              <a
                href="#"
                className="text-sm text-white underline cursor-pointer"
              >
                Learn more
              </a>
            </span>
          </div>
          <div className="relative w-full md:w-3/5 h-3/4 sm:h-[300px] md:h-full rounded-[20px] border overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                src={src}
                width={500}
                height={300}
                alt="linear board demo"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
