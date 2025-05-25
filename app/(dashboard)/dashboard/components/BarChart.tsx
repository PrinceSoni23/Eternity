import {
  walsheim_bold,
  walsheim_medium,
} from "@/components/constants";
import React from "react";

interface LocationTrafficChartProps {
  title: string; // Dynamic title
  data: { label: string; value: number }[]; // Dynamic data
  maxValue?: number; // Optional: max value for scaling
  barColor?: string; // Optional: bar color
  scaleFactor?: number; // Optional: scale factor for bar height
}

const LocationTrafficChart: React.FC<LocationTrafficChartProps> = ({
  title,
  data,
  maxValue = 100, // Default maximum value
  barColor = "bg-[#A79AFF]", // Default bar color
  scaleFactor = 200, // Default scaling factor
}) => {
  return (
    <div className="bg-white rounded-[40px] h-full p-2 w-full mx-auto dark:shadow-gray-600 dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border">
      <h2
        className={`text-lg font-semibold text-black dark:text-white ml-8 mt-4 text-start ${walsheim_bold.className}`}
      >
        {title}
      </h2>
      <div className="flex justify-center gap-2 items-end mt-20 h-48 relative">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-10 sm:w-12">
            {/* Bar */}
            <div
              className={`${barColor} rounded-t-md transition-all duration-300`}
              style={{
                height: `${(item.value / maxValue) * scaleFactor}px`, // Scale height dynamically
                width: "32px", // Reduced bar width
              }}
            ></div>
            {/* Label */}
            <span
              className={`mt-1 text-xs dark:text-white text-black ${walsheim_medium.className}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTrafficChart;
