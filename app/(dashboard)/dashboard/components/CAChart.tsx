import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { walsheim_bold } from "@/components/constants";
import { TooltipItem } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);


interface PropsData {
  dataValues?: {customerAcquired : number , dateTime : string}[];
}

const CustomerAcquisitionChart: React.FC<PropsData> = ({dataValues}) => {
  const days = dataValues?.map((item:any) => item?.dateTime) || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // const dataPoints = [3500, 4200, 5000, 4890, 4600, 3800, 4000];
  const dataPoints = dataValues?.map((item : any) => item?.customerAcquired) || [3500, 4200, 5000, 4890, 4600, 3800, 4000]; // Sample data
  // Highlight the day with the highest sales
const maxSales = Math.max(...dataPoints);
const maxDayIndex = dataPoints.indexOf(maxSales);
  const data = {
    labels: days,
    datasets: [
      // Diminishing bar graph in the background
      {
        type: "bar" as const,
        label: "Customers Connected",
        data: dataPoints.map((point) => point * 0.8), // Dimmed bars
        backgroundColor: "#A79AFF", // Tailwind's "indigo-600" with opacity
        borderRadius: 5,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      // Line chart
      {
        type: "line" as const,
        label: "Customer Acquisition",
        data: dataPoints,
        borderColor: "#4F46E5", // Tailwind's "indigo-600"
        borderWidth: 2,
        pointBackgroundColor: days.map((_, index) =>
          index === maxDayIndex ? "#9333EA" : "#4F46E5" // Highlight max sales day
        ),
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.3, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'line'>) => {
            if (context.dataIndex === 4) {
              return "4,890: Low sales on Friday";
            }
            return `${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false }, // Remove grid lines on X axis
        ticks: { color: "#4B5563" }, // Tailwind's "gray-600"
      },
      y: {
        grid: { display: false }, // Remove grid lines on Y axis
        ticks: { display: false }, // Hide Y-axis ticks
      },
    },
    elements: {
      line: {
        fill: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-[40] p-4 dark:bg-gray-800 dark:shadow-gray-600 dark:border-gray-700 border-gray-100  border">
      <h2 className={`text-lg mb-4 ${walsheim_bold.className}`}>Customer Acquisition</h2>
      {/* Reduced height */}
      <div className="h-60 w-auto">

        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomerAcquisitionChart;
