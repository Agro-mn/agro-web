import { Affix, Col, Row } from 'antd';
import TopHeader from './Layouts/TopHeader';
import { BrowserRouter } from "react-router-dom";
import SideBar from './Layouts/SideBar';
import { useEffect, useState } from 'react';
import MainContent from './Layouts/MainContent';

function MainLayout() {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    setLoggedUser(localStorage.getItem('loggedUser'));
  }, [])

  return (
    <BrowserRouter>
      <Row >
        <Col span={24}>
          <Affix style={{ backgroundColor: 'Background' }}>
            <TopHeader onChangeLogin={() => {
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
                <MainContent />
              </Col>
            }
            {!loggedUser &&
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <MainContent />
              </Col>
            }
          </Row>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default MainLayout;
