import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { consolidatedSubmissions } from "../data/submissions";

ChartJS.register(...registerables);

const BarChart = () => {
  const data = {
    labels: consolidatedSubmissions.map((data) => {
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
        text: "A Bar Chart Showing Total Students By Institution",
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

export default BarChart;
