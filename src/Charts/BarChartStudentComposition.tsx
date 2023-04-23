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

const BarChartStudentComposition = () => {
  const data = {
    
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
        label: "Undergraduates",
        data: consolidatedSubmissions.map((data) => data.undergraduates_total),
        backgroundColor: 'SlateBlue',
        stack: 'Stack 0',
        borderWidth: 1,
      },
      {
        label: "Postgraduates",
        data: consolidatedSubmissions.map((data) => data.postgraduates_total),
        backgroundColor: 'MediumSeaGreen',
        stack: 'Stack 0',
        borderWidth: 1,
      },
      {
        label: "Academic Papers",
        data: consolidatedSubmissions.map((data) => data.academic_papers),
        backgroundColor: 'Tomato',
        stack: 'Stack 1',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'A Bar Chart Showing Students By Type (Undergraduate vs Postgraduate) and Academic Papers produced '
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

export default BarChartStudentComposition;
