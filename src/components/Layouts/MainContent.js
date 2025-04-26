import { Routes, Route } from "react-router-dom";
import LandingPage from '../Landing/LandingPage';
import WeatherPage from '../Weather/WeatherPage';
import { Col, Row } from "antd";

function MainContent() {
  return (
    <Row>
      <Col span={24} style={{ backgroundColor: 'ButtonShadow', minHeight: 'calc(100vh - 8rem)', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </Col>
      <Col span={24} style={{ backgroundColor: 'GrayText', minHeight: '4rem' }}>
        footer
      </Col>
    </Row>
  );
}

export default MainContent;
