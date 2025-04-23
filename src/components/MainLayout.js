import { Col, Layout, Row } from 'antd';
import TopHeader from './Layouts/TopHeader';
import WeatherApp from './Layouts/WeatherApp';
import News from './Layouts/News';

function MainLayout() {
  return (
    <Layout >
      <div style={{ top: 0 }} ><TopHeader /></div>
      <Layout.Content style={{ minHeight: 'calc(100vh - 8rem)', backgroundColor: 'ButtonHighlight' }}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <WeatherApp />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <News />
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: '#80808030', height: '5rem' }}>Footer</Layout.Footer>
    </Layout>
  );
}

export default MainLayout;
