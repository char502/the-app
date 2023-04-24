import BarChart from "./Charts/BarChart";
import BarChartStudentComposition from "./Charts/BarChartStudentComposition";
import BarChartAdminStats from "./Charts/BarChartAdminStats";
import PieChartAcademicPapers from "./Charts/PieChartAcademicPapers";
import LineChartStudentsBetweenYears from "./Charts/LineChartStudentsBetweenYears";

function App() {
  return (
    <div className="App" style={{ width: '800px', margin: '0 auto'}}>
      <div style={{ marginBottom: '40px'}}>
        <BarChart />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <BarChartStudentComposition />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <BarChartAdminStats />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <PieChartAcademicPapers />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <LineChartStudentsBetweenYears />
      </div>
    </div>
  );
}

export default App;
