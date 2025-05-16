import { walsheim_bold } from "@/components/constants";
import React from "react";
import Image from "next/image";

const Bar2: React.FC = () => {
  const sources = [
    {
      icon: <Image src="/Ccall.svg" alt="icon" width={20} height={24} />,
      color: "from-green-400 to-green-300",
      height: 70, // Percentage-based height
      value: "70",
    },
    {
      icon: <Image src="/Cmessage.svg" alt="icon" width={20} height={24} />,
      color: "from-blue-400 to-blue-300",
      height: 50,
      value: "50",
    },
    {
      icon: <Image src="/Cfb.svg" alt="icon" width={20} height={24} />,
      color: "from-blue-600 to-blue-400",
      height: 80,
      value: "80",
    },
    {
      icon: <Image src="/Cgmail.svg" alt="icon" width={20} height={24} />,
      color: "from-red-500 to-orange-400",
      height: 90,
      value: "90",
    },
    {
      icon: <Image src="/Cwhatsapp.svg" alt="icon" width={20} height={24} />,
      color: "from-green-500 to-green-400",
      height: 75,
      value: "75",
    },
    {
      icon: <Image src="/Cinsta.svg" alt="icon" width={20} height={24} />,
      color: "from-purple-500 to-orange-400",
      height: 40,
      value: "40",
    },
  ];

  return (
    <div className="bg-white  rounded-[40px] md:p-4 max-w-4xl mx-auto dark:shadow-gray-600 dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border ">
      <h2
        className={`text-lg font-semibold -mt-2 mb-8 text-center ${walsheim_bold.className}`}
      >
        Business Sources
      </h2>
      <div className="flex justify-between items-end mt-8 space-x-3">
        {sources.map((source, index) => (
          <div
            key={index}
            className="flex flex-col items-center group relative"
          >
            {/* Bar */}
            <div
              className={`w-10 md:w-12 bg-gradient-to-t ${source.color} rounded-t-lg`}
              style={{ height: source.height * 1.5 }}
            >
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-black text-white text-sm rounded px-2 py-1">
                {source.value}
              </div>
            </div>
            {/* Icon */}
            <div className="mt-2">{source.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar2;
