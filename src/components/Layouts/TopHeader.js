import { Col, Row } from 'antd';
import logo from '../../img/logo1.png';

function TopHeader() {
  return (
    <Row style={{ width: '100%', height: '5rem', background: '#214635' }}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4} style={{ textAlign: 'center' }}>
        <img src={logo} style={{ height: '5rem' }} alt='logo' />
      </Col>
      <Col xs={24} sm={12} md={8} lg={9} xl={10} xxl={10}>
      </Col>
      <Col xs={24} sm={24} md={8} lg={9} xl={10} xxl={10}>
      </Col>
    </Row>
  );
}

export default TopHeader;
