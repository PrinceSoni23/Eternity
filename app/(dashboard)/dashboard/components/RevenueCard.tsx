import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { walsheim_bold, walsheim_regular } from "@/components/constants";
import Image from "next/image";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

// Define Prop Types
interface VisitorData {
  count: number | string;
  trend: "up" | "down";
  description: string;
  color: string | "green" | "red";
  chartData: number[];
}

interface RevenueCardProps {
  data?: VisitorData[];
  data1?: number[];
  head1?:string;
  data2?: number[];
  head2?:string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({  data1, data2, head1 , head2}) => {
  
  const data1Trend = data1 && data1?.length > 1
    ? data1[data1?.length - 1] - data1[data1?.length - 2] >= 0
      ? "green"
      : "red"
    : "gray";
  const data2Trend = data2 && data2?.length > 1
    ? data2[data2?.length - 1] - data2[data2?.length - 2] >= 0
      ? "green"
      : "red"
    : "gray";

  return (
    <div className="bg-white dark:bg-gray-800  dark:border-gray-700 border-gray-100 dark:shadow-gray-600 shadow-md border rounded-[40] flex items-center justify-center">
      {
        data1 && data2 &&
        <div className="bg-white rounded-[40] -mt-1  p-1 w-full max-w-md space-y-6 dark:bg-gray-800">
             <div className="flex items-center space-x-4 mt-6">
            <div className="w-1/3">
              <Line
                data={{
                  labels: data1?.map((_, i) => i.toString()), // Dummy labels
                  datasets: [
                    {
                      data: data1?.map((item) => item),
                      borderColor: data1Trend,
                      backgroundColor: "transparent",
                      borderWidth: 2,
                      tension: 0.4,
                      pointBackgroundColor: data1?.map((_, i) =>
                        i === data1?.length - 1
                          ? "#ffffff"
                          : "transparent"
                      ),
                      pointBorderColor: data1?.map((_, i) =>
                        i === data1?.length - 1
                          // ? item.color === "green"
                          ? data1Trend
                          // : "#ef4444"
                          : "transparent"
                      ),
                      pointBorderWidth: data1?.map((_, i) =>
                        i === data1?.length - 1 ? 3 : 0
                      ), // Outline thickness for hollow dot
                      pointRadius: data1?.map((_, i) =>
                        i === data1?.length - 1 ? 6 : 0
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
            <div>
              <p className={`text-2xl text-black dark:text-white flex items-center ${walsheim_bold.className}`}>
                {data1?.reduce((acc, item) => acc + item, 0).toLocaleString()}
                {data1Trend === "green" ? (
                  <Image src="/up.svg" alt="" className="w-4 h-5 rotate-180" />
                ) : (
                  <Image src="/down.svg" alt="" className="w-4 h-5"   width={20} // Replace with the correct width
                  height={24} />
                )
                }
              </p>
              <p className={`text-gray-500 dark:text-white text-sm ${walsheim_regular.className}`}>{head1}</p>

            </div>
          </div>
          {/* //=========================== */}
          <div className="border-t border-gray-200 mt-6"></div>
          {/* //=========================== */}

          <div className="flex items-center space-x-4 mt-6">
            <div className="w-1/3">
              <Line
                data={{
                  labels: data2?.map((_, i) => i.toString()), // Dummy labels
                  datasets: [
                    {
                      data: data2?.map((item) => item),
                      borderColor: data2Trend,
                      backgroundColor: "transparent",
                      borderWidth: 2,
                      tension: 0.4,
                      pointBackgroundColor: data2?.map((_, i) =>
                        i === data2?.length - 1
                          ? "#ffffff"
                          : "transparent"
                      ),
                      pointBorderColor: data2?.map((_, i) =>
                        i === data2?.length - 1
                          // ? item.color === "green"
                          ? data2Trend
                          // : "#ef4444"
                          : "transparent"
                      ),
                      pointBorderWidth: data2?.map((_, i) =>
                        i === data2?.length - 1 ? 3 : 0
                      ), // Outline thickness for hollow dot
                      pointRadius: data2?.map((_, i) =>
                        i === data2?.length - 1 ? 6 : 0
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
            <div>
              <p className={`text-2xl text-black dark:text-white flex items-center ${walsheim_bold.className}`}>
                {data2?.reduce((acc, item) => acc + item, 0).toLocaleString()}
                {data2Trend === "green" ? (
                  <Image src="/up.svg" alt="" className="w-4 h-5 rotate-180" />
                ) : (
                  <Image src="/down.svg" alt="" className="w-4 h-5"    width={20} // Replace with the correct width
                  height={24}/>
                )
                }
              </p>
              <p className={`text-gray-500 dark:text-white text-sm ${walsheim_regular.className}`}>{head2}</p>
            </div>
          </div>

        </div>
      }
    </div>
  );
};
export default RevenueCard;