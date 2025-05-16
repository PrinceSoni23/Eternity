import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Image from "next/image";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

// Define Prop Types
interface VisitorData {
  count: number;
  trend: "up" | "down";
  description: string;
  color: "green" | "red";
  chartData: number[];
}

interface RevenueCardProps {
  data: VisitorData[];
}

const RevenueCard: React.FC<RevenueCardProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800  dark:border-gray-700 border-gray-100 dark:shadow-gray-600 shadow-md border rounded-[40] flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-white rounded-[40]  p-4 w-full max-w-md space-y-6 dark:bg-gray-800">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4 space-y-1">
              {/* Chart Section */}
              <div className="w-1/3">
                <Line
                  data={{
                    labels: item.chartData.map((_, i) => i.toString()), // Dummy labels
                    datasets: [
                      {
                        data: item.chartData,
                        borderColor:
                          item.color === "green" ? "#22c55e" : "#ef4444",
                        backgroundColor: "transparent",
                        borderWidth: 2,
                        tension: 0.4, // Smooth curve
                        pointBackgroundColor: item.chartData.map((_, i) =>
                          i === item.chartData.length - 1
                            ? "#ffffff"
                            : "transparent"
                        ),
                        pointBorderColor: item.chartData.map((_, i) =>
                          i === item.chartData.length - 1
                            ? item.color === "green"
                              ? "#22c55e"
                              : "#ef4444"
                            : "transparent"
                        ),
                        pointBorderWidth: item.chartData.map((_, i) =>
                          i === item.chartData.length - 1 ? 3 : 0
                        ), // Outline thickness for hollow dot
                        pointRadius: item.chartData.map((_, i) =>
                          i === item.chartData.length - 1 ? 6 : 0
                        ), // Hollow circle radius
                      },
                    ],
                  }}
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                    elements: {
                      point: { radius: 6 },
                    },
                    maintainAspectRatio: false,
                  }}
                  height={40}
                  width={120}
                />
              </div>

              {/* Text Section */}
              <div>
                <p className="text-2xl font-bold text-black dark:text-white flex items-center">
                  {item.count.toLocaleString()}
                  <span
                    className={`ml-3 text-4xl font-extrabold ${
                      item.color === "green"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {item.trend === "down" ? (
                      <Image src="/down.svg" alt="" className="w-4 h-5"    width={20} // Replace with the correct width
                      height={24}/>
                    ) : (
                      <Image src="/up.svg" alt="" className="w-4 h-5"   width={20} // Replace with the correct width
                      height={24} />
                    )}
                  </span>
                </p>
                <p className="text-gray-500 dark:text-white text-sm">{item.description}</p>
              </div>
            </div>
            {/* Divider for items */}
            {index < data.length - 1 && (
              <div className="border-t border-gray-200 mt-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueCard;
