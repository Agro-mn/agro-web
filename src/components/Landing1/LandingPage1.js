import { Col, Row, Affix } from 'antd';
import WeatherApp from './WeatherApp';
import News from './News';
import TopHeader1 from './Layouts/TopHeader1';
import SideBar from './Layouts/SideBar';
import { useState } from 'react';

function LandingPage1() {
  const [loggedUser, setLoggedUser] = useState();
  return (
    <Row >
      <Col span={24}>
        <Affix style={{ backgroundColor: 'Background' }}>
          <TopHeader1 onChangeLogin={() => {
            setLoggedUser(localStorage.getItem("loggedUser"))
          }} />
        </Affix>
      </Col>
      <Col span={24} >
        <Row>
          {loggedUser &&
            <Col xs={10} sm={10} md={10} lg={4} xl={4} xxl={4}>
              <Affix style={{ backgroundColor: 'Background' }} offsetTop={80}>
                <SideBar />
              </Affix>
            </Col>
          }
          {loggedUser &&
            <Col xs={14} sm={14} md={14} lg={20} xl={20} xxl={20}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <WeatherApp />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <News />
                </Col>
              </Row>
            </Col>
          }
          {!loggedUser &&
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <WeatherApp />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <News />
                </Col>
              </Row>
            </Col>
          }
        </Row>
      </Col>
    </Row>

  );
}

export default LandingPage1;
