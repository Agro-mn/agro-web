import { Col, Row } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import LandingPage from './Landing/LandingPage'
import LandingPage1 from './Landing1/LandingPage1'

function MainLayout() {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    setLoggedUser(localStorage.getItem('loggedUser'));
  }, [])

  return (
    <BrowserRouter>
      <Row>
        <Col span={24} style={{ backgroundColor: 'ButtonShadow', minHeight: 'calc(100vh - 8rem)',}}>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            {/*<Route path="/" element={<LandingPage1/>} />*/}
            <Route path="/landing1" element={<LandingPage1 />} />
            <Route path="/org/news" element={"<WeatherPage />"} />
            <Route path="/org/news1" element={"<WeatherPage />"} />
            <Route path="/org/news2" element={"<WeatherPage />"} />

            <Route path="/org1" element={"<WeatherPage />"} />
            <Route path="/org1/news" element={"<WeatherPage />"} />
            <Route path="/org1/news1" element={"<WeatherPage />"} />
            <Route path="/org1/news2" element={"<WeatherPage />"} />

            {/* wd;wljd */}
            <Route path="/dashboard" element={"<Dashboard />"} />
            <Route path="/planning" element={"<PlanList />"} />
            <Route path="/performance" element={"<PerformanceList />"} />
            <Route path="/report" element={"<Report />"} />
          </Routes>
        </Col>
        <Col span={24} style={{ backgroundColor: 'rgb(140 201 164)', minHeight: '4rem' }}>
          footer
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default MainLayout;
