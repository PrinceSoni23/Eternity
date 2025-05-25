import React from "react";
import Image from "next/image";
import { walsheim_bold } from "./constants";

interface EternalCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const EternalCard: React.FC<EternalCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className="bg-black p-5 shadow-lg w-[280px] sm:w-[340px] h-[320px] rounded-[20px] relative"
      style={{
        boxShadow: "inset 0 -5px 20px rgba(255, 255, 255, 0.25)",
        border: "0.5px solid #494949",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-44 h-44 mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            priority
          />
        </div>
        <h2
          className={`text-white text-lg font-bold mb-2 text-center ${walsheim_bold.className}`}
        >
          {title}
        </h2>
        <p
          className={`text-gray-300 text-[0.70rem] text-center ${walsheim_bold.className}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default EternalCard;
