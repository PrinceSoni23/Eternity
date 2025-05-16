import React from "react";
import { walsheim_bold, walsheim_regular } from "@/components/constants";
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
import { TooltipProps } from 'recharts';

import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-lg">
        <p className="text-blue-500 font-bold">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

interface Chart3Props {
  title: string;
  totalRevenue: string | number;
  percentageChange: string;
  strokeColor: string; 
  data: { day: string; revenue: number }[]; // Add data prop
}

const Chart3: React.FC<Chart3Props> = ({ title, totalRevenue, percentageChange, strokeColor, data }) => {
  return (
    <div className="bg-white rounded-[40px] p-3 w-full max-w-screen-lg mx-auto dark:bg-gray-800  dark:border-gray-700 dark:shadow-gray-600 border-gray-100 shadow-md border">
      {/* Top Section */}
      <div className="bg-transparent rounded-[40px] w-full space-y-1">
        <div className="ml-10">
          <h2 className={`text-black dark:text-white text-xl font-bold ${walsheim_regular.className}`}>{title}</h2>
          <div className="flex flex-row items-center gap-1">
            <p className={`text-black dark:text-white text-xl font-semibold ml-0 ${walsheim_bold.className}`}>{totalRevenue}</p>
            <p
              className={`text-sm font-medium ${walsheim_regular.className} ${
                parseFloat(percentageChange) >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {percentageChange}%
            </p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="h-[calc(30vh)] sm:h-[calc(20vh)] lg:h-36 mr-7 sm:mr-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Gradient for the fill area */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={strokeColor} stopOpacity={0.4} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <YAxis
              ticks={[20, 40, 60]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains("dark") ? "#fff" : "#888" }}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: document.documentElement.classList.contains("dark") ? "#fff" : "#888" }}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Area type="monotone" dataKey="revenue" stroke="none" fill="url(#gradient)" />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke={strokeColor}
              strokeWidth={3}
              dot={{ r: 6, fill: "transparent", strokeWidth: 1, stroke: "transparent" }}
            />

            <ReferenceLine
              x={data[data.length - 1].day}
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
