import { useState , useEffect} from "react";
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

const generateChartData = (label: string, data: number[], activeLabels : string[]): ChartData => ({
  labels: activeLabels,
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
interface ChartCall4Props {
  // Define any props if needed
  durationData?: { data: number, label: string }[];
  totalCalls : { data: number, label: string }[];
  pickedCalls : { data: number, label: string }[];
  holdTimeData? : { data: number, label: string }[];
  airTimeData? : { data: number, label: string }[];
  
}
const ChartCall4: React.FC<ChartCall4Props> = ({totalCalls, pickedCalls, durationData, holdTimeData, airTimeData }) => {

  const chartDatasets: { [key: string]: number[] } = {
    Duration: durationData?.map( (x:any) => x.data) ?? [0,0,0],
    Calls: totalCalls?.map( (x:any) => x.data),
    CallsPicked: pickedCalls?.map( (x:any) => x.data),
    HoldTime: holdTimeData?.map( (x:any) => x.data) ?? [0,0,0],
    AirTime: airTimeData?.map( (x:any) => x.data) ?? [0,0,0],
  };

  const chartLabels : { [key:string]: string[] } = {
    Duration : durationData?.map( (x:any) => x.label) ?? ["Jan", "Feb", "Mar"],
    Calls: totalCalls?.map( (x:any) => x.label) ?? ["Jan", "Feb", "Mar"],
    CallsPicked: pickedCalls?.map( (x:any) => x.label) ?? ["Jan", "Feb", "Mar"],
    HoldTime: holdTimeData?.map( (x:any) => x.label) ?? ["Jan", "Feb", "Mar"],
    AirTime: airTimeData?.map( (x:any) => x.label) ?? ["Jan", "Feb", "Mar"],
  }
    const [activeHeading, setActiveHeading] = useState("Duration");
    const [chartData, setChartData] = useState<ChartData>(
      generateChartData("Duration", chartDatasets["Duration"], chartLabels["Duration"])
    );

    useEffect(() => {
      const data = chartDatasets[activeHeading] ?? [];
      if (data.length > 0) {
        setChartData(generateChartData(activeHeading, data));
      }
    }, [activeHeading, chartDatasets]);
  
    const handleHeadingClick = (heading: string) => {
      setActiveHeading(heading);
      setChartData(generateChartData(heading, chartDatasets[heading], chartLabels[heading]));
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
    <div className=" mt-3 p-6 bg-white rounded-[40] dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border ">
      {/* Headings */}
      <div className="flex space-x-4 mb-3">
        {["Duration", "Calls", "CallsPicked", "HoldTime", "AirTime"].map((heading) => (
          <button
            key={heading}
            onClick={() => handleHeadingClick(heading)}
            className={`text-sm font-medium ${activeHeading === heading ? walsheim_bold.className : walsheim_medium.className}
              ${
              activeHeading === heading
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

export default ChartCall4;
