import { Col, Row } from 'antd';
import WeatherApp from './WeatherApp';
import News from './News';

function LandingPage() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <WeatherApp />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <News />
      </Col>
    </Row>
  );
}

export default LandingPage;
