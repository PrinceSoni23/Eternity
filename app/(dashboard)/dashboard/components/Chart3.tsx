import { walsheim_bold, walsheim_regular } from "@/components/constants";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  CartesianGrid,
} from "recharts";

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number }[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-lg">
        <p className="text-blue-500 font-bold">${payload[0]?.value}</p>
      </div>
    );
  }
  return null;
};

interface Chart3Props {
  title: string;
  total: string | number;
  percentageChange: string;
  strokeColor: string;
  data?: { day?: string; revenue?: number }[]; // Add data prop
  plotData? : {data? : number, label?:string}[];
  
}

const Chart3: React.FC<Chart3Props> = ({ title, total, percentageChange, strokeColor,  plotData }) => {
  return (
    <div className="bg-white rounded-[40px] dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-600 border-gray-100 shadow-md border p-1 w-full max-w-screen-lg mx-auto">
      {/* Top Section */}
      <div className="bg-transparent rounded-[40px] mt-4 w-full space-y-6">
        <div className="ml-2">
          <h2 className={`text-black dark:text-white text-lg ml-7 font-extrabold ${walsheim_regular.className}`}
          >{title}</h2>
          <div className="flex flex-row items-center gap-1">
            <p className={`text-black dark:text-white text-xl font-semibold ml-7 ${walsheim_bold.className}`}>{total}</p>
            <p
              className={`text-sm font-medium ${walsheim_regular.className} ${parseFloat(percentageChange) >= 0 ? "text-green-500" : "text-red-500"
                }`}
            >
              {percentageChange}%
            </p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="h-[calc(30vh)] p-2 sm:h-[calc(20vh)] lg:h-36 mr-7 sm:mr-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={plotData}>
            {/* Gradient for the fill area */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={strokeColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <YAxis
              ticks={plotData && plotData[0]?.data && plotData[0].data <= 100 ? [0 , 10 , 50 , 100 , 150 , 200]   : 
                plotData && plotData[0]?.data && plotData[0].data <= 500 ? [150 , 200 , 250 , 300, 350, 400]   : 
                [2500, 3000, 3500, 4000, 4500, 5000] }
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains("dark") ? "#fff" : "#888" }}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains("dark") ? "#fff" : "#888" }}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Area type="monotone" dataKey="data" stroke="none" fill="url(#gradient)" />

            <Line
              type="monotone"
              dataKey="data"
              stroke={strokeColor}
              strokeWidth={3}
              dot={{ r: 6, fill: "transparent", strokeWidth: 1, stroke: "transparent" }}
            />

            <ReferenceLine
              x={(plotData?.[0]?.label) ?? ""}
              stroke={strokeColor}
              strokeWidth={2}
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart3;
