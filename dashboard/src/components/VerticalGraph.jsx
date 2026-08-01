import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          family: "Poppins, sans-serif",
          size: 13,
        },
        
      },
    },

    title: {
      display: true,
      text: "Holdings",
    },
  },

  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,

        font: {
          family: "Poppins, sans-serif",
          size: 11,
          weight: "500",
        },

        color: "#666",
  
      },
    },

    y: {
      ticks: {
        color: "#666",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
