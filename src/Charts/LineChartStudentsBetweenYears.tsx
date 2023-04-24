import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { SubData, submissionsData } from "../data/submissions";

ChartJS.register(...registerables);

const LineChartStudentsBetweenYears = () => {
  const labels = [2017, 2018, 2019];
  const data = {
    labels,
    datasets: [
      {
        label: "Prestigious Science University",
        data: submissionsData.map((data: SubData) => {
          if (data.institution_id === "EA8BBED7-4106-94AF-48DD-A1414E386AFB") {
            return data.staff_total;
          }
          return null;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Top University of Mathematics",
        data: submissionsData.map((data: SubData) => {
          if (data.institution_id === "DEA4606B-4A21-D497-40E9-A5FB7589B536") {
            return data.staff_total;
          }
          return null;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Technology Institute",
        data: submissionsData.map((data: SubData) => {
          if (data.institution_id === "8C8A804F-7A43-5840-4296-8A0117325921") {
            return data.staff_total;
          }
          return null;
        }),
        borderColor: "rgb(65, 235, 53)",
        backgroundColor: "rgba(65, 235, 53, 0.5)",
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
        text: "Student Numbers Between 2017 - 2019 By Institution",
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
      <Line data={data} height={400} options={options} />
    </div>
  );
};

export default LineChartStudentsBetweenYears;
