import { Col, Row } from 'antd';
import PerformancePie from './PerformancePie';
import Costbar from './Costbar';
import RadialStackedChart from './RadialStackedChart';
import PerformanceMap from './PerformanceMap';

function Dashboard() {

  return (
    <Row gutter={[32, 32]} >
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <RadialStackedChart />
      </Col>     
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <PerformancePie />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <PerformanceMap />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
        <Costbar />
      </Col>
    </Row>
  );
};
export default Dashboard;