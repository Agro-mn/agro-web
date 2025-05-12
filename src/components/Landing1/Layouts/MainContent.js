import { Routes, Route } from "react-router-dom";
import LandingPage1 from '../LandingPage1';
import WeatherPage from '../../Weather/WeatherPage';
import { Col, Row } from "antd";
import Dashboard from "../../Components/Dashboard/Dashboard";
import PlanList from "../../Components/Planning/PlanList";
import Report from "../../Components/Report/Report";
import PerformanceList from "../../Components/Performance/PerformanceList";

function MainContent() {
  return (
    <Row>
      <Col span={24} style={{ backgroundColor: 'ButtonShadow', minHeight: 'calc(100vh - 8rem)', padding: '2rem' }}>
        <Routes>
          <Route path="/landing1" element={<LandingPage1 />} />

          sys1/dashboard
          sys2/dashboard
          <Route path="/org" element={<WeatherPage />} />
          <Route path="/org/news" element={<WeatherPage />} />
          <Route path="/org/news1" element={<WeatherPage />} />
          <Route path="/org/news2" element={<WeatherPage />} />

          <Route path="/org1" element={<WeatherPage />} />
          <Route path="/org1/news" element={<WeatherPage />} />
          <Route path="/org1/news1" element={<WeatherPage />} />
          <Route path="/org1/news2" element={<WeatherPage />} />

          {/* wd;wljd */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planning" element={<PlanList />} />
          <Route path="/performance" element={<PerformanceList />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Col>
      <Col span={24} style={{ backgroundColor: 'rgb(140 201 164)', minHeight: '4rem' }}>
        footer
      </Col>
    </Row>
  );
}

export default MainContent;
