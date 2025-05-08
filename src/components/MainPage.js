import { Routes, Route } from "react-router-dom";
import MainContent from './MainContent';
import Dashboard from './Components/Dashboard/Dashboard';
import FieldList from './Components/FieldList/FieldList';
import PerformanceList from './Components/Performance/PerformanceList';
import PlanList from './Components/Planning/PlanList';
import MaterialList from './Components/Material/MaterialList';
import Report from './Components/Report/Report';
import { useEffect } from "react";

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
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default MainPage;
