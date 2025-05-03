import { Col, Row, Affix, Anchor, Flex, Radio, ConfigProvider } from 'antd';
import LogoName from '../LogoName';
import SideBar from './SideBar';
import { useState } from 'react';
import HomeImage from './HomeImage';
import HomeDirection from './HomeDirection';
import HomeSubSystem from './HomeSubSystem';
import HomeContact from './HomeContact';
import LoginComp from '../LoginComp';

function LandingPage() {
  const items = [
    {
      label: 'Нүүр',
      key: 'home',
      // icon: <AppstoreOutlined />,
    },
    {
      label: 'Үйл ажиллагааны чиглэл',
      key: 'direction',
      // icon: <MailOutlined />,
    },

    {
      label: 'Холбогдох системүүд',
      key: 'subSystem',
      // icon: <AppstoreOutlined />,
    },

    {
      label: 'Холбоо барих',
      key: 'contact',
      // icon: <AppstoreOutlined />,
    },
  ]
  const [loggedUser, setLoggedUser] = useState();
  const colProps = {
    xs: loggedUser ? 14 : 24,
    sm: loggedUser ? 14 : 24,
    md: loggedUser ? 14 : 24,
    lg: loggedUser ? 20 : 24,
    xl: loggedUser ? 20 : 24,
    xxl: loggedUser ? 20 : 24,
  };
  const themeData = {
    colorPrimary: 'rgb(216 156 87)',
    colorText: 'rgb(216 156 87)',
    algorithm: true // Enable algorithm
  };
  return (
    <ConfigProvider
      theme={{
        // token: {
        //   colorText: themeData.colorText, // Main text color added here
        // },
        components: {
          Button: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Input: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Menu: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Checkbox: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Form: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Anchor: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
        },
      }}
    >
      <Row  >
        <Affix style={{ width: '100%' }}>
          <Row
            style={{
              backgroundColor: '#e8edf3',
              height: '5rem',
            }}
          >
            <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4} >
              <LogoName />
            </Col>
            <Col xs={24} sm={12} md={12} lg={16} xl={16} xxl={16} >
              {!loggedUser &&
                <Flex align='center' justify='center' style={{ height: '100%', }}>
                  <Anchor direction='horizontal'   >
                    {items.map((item) => {
                      return <Anchor.Link title={<h3>{item.label}</h3>} key={item.key} href={`#${item.key}`} />
                    })}
                  </Anchor>
                </Flex>
              }
            </Col>
            <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
              <LoginComp onChangeLogin={() => { setLoggedUser(localStorage.getItem('loggedUser')); }} />
            </Col>
          </Row>
        </Affix>
        <Col span={24} >
          <Row>
            {loggedUser &&
              <Col xs={10} sm={10} md={10} lg={4} xl={4} xxl={4}>
                <Affix style={{ backgroundColor: 'Background' }} offsetTop={80}>
                  <SideBar />
                </Affix>
              </Col>
            }
            <Col {...colProps}>
              <Row >
                <Col id='home' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                  <HomeImage />
                </Col>
                <Col id='direction' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                  <HomeDirection />
                </Col>
                <Col id='subSystem' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                  <HomeSubSystem />
                </Col>
                <Col id='contact' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                  <HomeContact />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </ConfigProvider>
  );
}

export default LandingPage;
