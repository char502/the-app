import React, { useState } from "react";
import BarChart from "./Charts/BarChart";
import BarChartStudentComposition from "./Charts/BarChartStudentComposition";
import BarChartAdminStats from "./Charts/BarChartAdminStats";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: '40px'}}>
        <BarChart />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <BarChartStudentComposition />
      </div>
      <div style={{ marginBottom: '40px'}}>
        <BarChartAdminStats />
      </div>
    </div>
  );
}

export default App;
