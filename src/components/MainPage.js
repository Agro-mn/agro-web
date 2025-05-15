import { Routes, Route } from "react-router-dom";
import MainContent from './MainContent';
import Dashboard from './Components/Dashboard/Dashboard';
import FieldList from './Components/FieldList/FieldList';
import PerformanceList from './Components/Performance/PerformanceList';
import PlanList from './Components/Planning/PlanList';
import MaterialList from './Components/Material/MaterialList';

import { useEffect } from "react";
import Reports from "./Components/Report/Reports";
// import ReportPlantingOverview from './Components/Report/ReportPlantingOverview';
// import ReportPlantingByField from "./Components/Report/ReportPlantingByField";
// import ReportFieldJournal from "./Components/Report/ReportFieldJournal";
// import ReportFallowSummary from "./Components/Report/ReportFallowSummary";

const MainPage = ({ items }) => {

  useEffect(() => {
  }, [items])

  return (
    <Routes>
      <Route path="/" element={<MainContent items={items} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/field-list" element={<FieldList />} />
      <Route path="/planning" element={<PlanList />} />
      <Route path="/performance" element={<PerformanceList />} />
      <Route path="/material" element={<MaterialList />} />
      <Route path="/report" element={<Reports />} />
      {/* <Route path="/report-planting-overview" element={<ReportPlantingOverview />} />
      <Route path="/report-planting-by-field" element={<ReportPlantingByField />} />
      <Route path="/report-field-journal" element={<ReportFieldJournal />} />
      <Route path="/report-fallow-summary" element={<ReportFallowSummary />} /> */}
    </Routes>
  );
}

export default MainPage;
