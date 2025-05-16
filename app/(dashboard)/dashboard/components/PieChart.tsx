import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  walsheim_medium
} from "@/components/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

type CustomerSatisfactionChartProps = {
  title: string;
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
    }[];
  };
};

const CustomerSatisfactionChart: React.FC<CustomerSatisfactionChartProps> = ({
  title,
  data,
}) => {
  if (!data || !data.datasets || data.datasets.length === 0) {
    return <div>Loading...</div>; 
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable default tooltip
      },
    },
    cutout: "60%", // Reduced cutout size
  };

  const renderLabels = () => (
    <div className="flex flex-col justify-center ml-2 space-y-3">
      {data.labels.map((label, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
          ></span>
          <span className={`text-sm ${walsheim_medium.className}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );

  const renderPercentage = () => {
    const total = data?.datasets?.[0]?.data?.reduce((acc, value) => acc + value, 0);
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {data.datasets[0].data.map((value, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `translate(${
                Math.cos(index * (Math.PI / 1.5)) * 20
              }px, ${Math.sin(index * (Math.PI / 1.5)) * 20}px)`,
            }}
          >
            <div
              className={`text-[10px] ${walsheim_medium.className}`}
              style={{ color: data.datasets[0].backgroundColor[index] }}
            >
              {Math.round((value / total) * 100)}%
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col p-2 bg-white rounded-[40px] dark:shadow-gray-600 w-full max-w-xs md:max-w-sm dark:bg-gray-800 dark:border-gray-700 border-gray-100 shadow-md border">
      <div className="flex justify-between w-full  ml-2">
        <h2
          className={`text-lg font-semibold mb-2 ml-3 text-left ${walsheim_medium.className}`}
        >
          {title}
        </h2>
      </div>
      <div className="flex items-center">
        <div className="relative ml-2 w-36 h-36">
          {" "}
          {/* Reduced chart size */}
          <Doughnut data={data} options={options} />
          {renderPercentage()}
        </div>
        {renderLabels()}
      </div>
    </div>
  );
};

export default CustomerSatisfactionChart;
