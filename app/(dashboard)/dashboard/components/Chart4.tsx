import { useState, useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { walsheim_bold, walsheim_medium } from "@/components/constants";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
    borderWidth: number;
    tension: number;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointRadius: number;
    pointHoverRadius: number;
  }[];
}

interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      display: boolean;
    };
    tooltip: {
      enabled: boolean;
    };
    zoom: {
      pan: {
        enabled: boolean;
        mode: string;
      };
      zoom: {
        wheel: {
          enabled: boolean;
        };
        pinch: {
          enabled: boolean;
        };
        mode: string;
      };
    };
  };
  scales: {
    x: {
      grid: {
        display: boolean;
      };
      ticks: {
        padding: number;
        font?: {
          size: number;
        };
      };
      categoryPercentage?: number;
      barPercentage?: number;
    };
    y: {
      grid: {
        display: boolean;
        drawBorder: boolean;
      };
      ticks: {
        display: boolean;
      };
      beginAtZero: boolean;
    };
  };
}


interface Chart4Props {
  impressionData: { data: number, label: string }[];
  revenueData: { data: number, label: string }[];
  connectionsData: { data: number, label: string}[];
}

const Home: React.FC<Chart4Props> = ({ impressionData, revenueData, connectionsData }) => {


  const chartDatasets: { [key: string]: number[] } = {
    Revenue: revenueData?.map((item) => item.data),
    Impression: impressionData?.map((item) => item.data),
    Connections: connectionsData?.map((item) => item.data),
  };

  const generateChartData = (label: string, data: number[]): ChartData => ({
    labels:  activeHeading === "Revenue" ? revenueData?.map((item) => item.label)
           : activeHeading === "Impression" ? impressionData?.map((item) => item.label)
           : activeHeading === "Connections" ? connectionsData?.map((item) => item.label) : [],
    datasets: [
      {
        label: `${label} Data`,
        data: data,
        borderColor: "#6B46C1",
        backgroundColor: "rgba(107, 70, 193, 0.2)",
        fill: true,
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#6B46C1",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  });

  const [activeHeading, setActiveHeading] = useState("Revenue");
  const [chartData, setChartData] = useState<ChartData>(generateChartData("Revenue", chartDatasets["Revenue"]));
  useEffect(() => {
    setChartData(generateChartData(activeHeading, chartDatasets[activeHeading]));
  }, [activeHeading, revenueData, impressionData, connectionsData]);
  

  const handleHeadingClick = (heading: string) => {
    setActiveHeading(heading);
    setChartData(generateChartData(heading, chartDatasets[heading]));
  };

  const chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 0,
          font: {
            size: 12,
          },
        },
        categoryPercentage: 0.6,
        barPercentage: 0.6,
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className=" mt-3 p-6 rounded-[40] bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-100 dark:shadow-gray-600 shadow-md border ">
      {/* Headings */}
      <div className="flex space-x-4 mb-3">
        {["Revenue", "Impression", "Connections"].map(heading => (
          <button
            key={heading}
            onClick={() => handleHeadingClick(heading)}
            className={`text-sm font-medium ${activeHeading === heading ? walsheim_bold.className : walsheim_medium.className} ${activeHeading === heading
              ? "text-purple-600 "
              : "text-black dark:text-white"
              }`}
          >
            {heading}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="relative w-full h-64">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Home;
