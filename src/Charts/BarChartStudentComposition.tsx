import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { SubData, consolidatedSubmissions } from "../data/submissions";

ChartJS.register(...registerables);

const BarChartStudentComposition = () => {
  const data = {
    labels: consolidatedSubmissions.map((data: SubData) => {
      if (data.institution_id === "EA8BBED7-4106-94AF-48DD-A1414E386AFB") {
        return "Prestigious Science University";
      } else if (
        data.institution_id === "DEA4606B-4A21-D497-40E9-A5FB7589B536"
      ) {
        return "Top University of Mathmatics";
      } else if (
        data.institution_id === "8C8A804F-7A43-5840-4296-8A0117325921"
      ) {
        return "Technology Institute";
      }
      return null;
    }),
    datasets: [
      {
        label: "Undergraduates",
        data: consolidatedSubmissions.map((data: SubData) => data.undergraduates_total),
        backgroundColor: "SlateBlue",
        stack: "Stack 0",
        borderWidth: 1,
      },
      {
        label: "Postgraduates",
        data: consolidatedSubmissions.map((data: SubData) => data.postgraduates_total),
        backgroundColor: "MediumSeaGreen",
        stack: "Stack 0",
        borderWidth: 1,
      },
      {
        label: "Academic Papers",
        data: consolidatedSubmissions.map((data: SubData) => data.academic_papers),
        backgroundColor: "Tomato",
        stack: "Stack 1",
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
        text: "A Bar Chart Showing Students By Type (Undergraduate vs Postgraduate) and Academic Papers produced",
      },
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
