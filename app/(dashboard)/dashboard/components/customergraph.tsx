import { walsheim_bold, walsheim_regular } from "@/components/constants";
import React from "react";

interface CustomerGraphProps {
  title: string;
  totalIntent: number | string;
  percentageChange: string;
  data: {
    label: string;
    percentage: number;
    count: number;
    color: string;
  }[];
}

const CustomerGraph: React.FC<CustomerGraphProps> = ({
  title,
  totalIntent,
  percentageChange,
  data,
}) => {
  return (
    <div className="p-3 bg-white rounded-[30] dark:bg-gray-800 dark:shadow-gray-600 dark:border-gray-700 border-gray-100 shadow-md border ">
      <h1
        className={`text-lg font-bold ml-3 text-black dark:text-white mb-1 ${walsheim_bold.className}`}
      >
        {title}
      </h1>
      <p className="text-s text-gray-500 dark:text-grey-200 ml-3 mb-2">
        <span
          className={`text-black dark:text-white ${walsheim_bold.className}`}
        >
          {totalIntent}
        </span>{" "}
        <span
          className={`text-green-500 font-semibold ${walsheim_regular.className}`}
        >
          {percentageChange}
        </span>
      </p>
      <div className="space-y-3 ml-3 dark:bg-gray-800 dark:border-gray-700 border-gray-100 ">
        {data.map((item, index) => (
          <div className="flex items-center" key={index}>
            <div
              className="rounded-lg relative h-9"
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
            >
              {index < 3 && (
                <span
                  className={`absolute left-2 text-xs font-semibold text-white top-2 ${walsheim_bold.className}`}
                >
                  {item.label}
                </span>
              )}
            </div>
            {index >= 3 && (
              <span
                className={`ml-3 font-semibold text-sm ${walsheim_bold.className}`}
                style={{ color: item.color }}
              >
                {item.label}
              </span>
            )}
            <span
              className="ml-3 font-semibold text-sm"
              style={{ color: item.color }}
            >
              {item.count} ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerGraph;
