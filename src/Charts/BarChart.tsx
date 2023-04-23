import React from "react";
import {
  Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
  registerables,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { submissionsData, consolidatedSubmissions } from "../data/submissions";

ChartJS.register(
  // CategoryScale,
  // BarElement,
  // LinearScale,
  ...registerables
);

console.log(consolidatedSubmissions);

const BarChart = () => {
  const data = {
    // @ts-ignore
    labels: consolidatedSubmissions.map((data) => {
       //  @ts-ignore
        if (data.institution_id === "EA8BBED7-4106-94AF-48DD-A1414E386AFB") {
            return 'Prestigious Science University'
            //  @ts-ignore
        } else if (data.institution_id === "DEA4606B-4A21-D497-40E9-A5FB7589B536") {
            return 'Top University of Mathmatics'
            //  @ts-ignore
        } else if (data.institution_id === "8C8A804F-7A43-5840-4296-8A0117325921") {
            return 'Technology Institute'
        }
      
      }),
    datasets: [
      {
        label: "Total Students By Institution",
        data: consolidatedSubmissions.map((data) => data.students_total),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'A Bar Chart Showing Total Students By Institution'
      }
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
