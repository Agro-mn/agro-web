import { Col, Row, Affix, Flex, Button, Modal, Anchor, ConfigProvider, Card } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AlertOutlined, FacebookFilled, InstagramFilled, TwitterOutlined } from "@ant-design/icons";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "./LoginForm";
import SideBar from './SideBar';

import { Contents1, ThemeData1, LogoName1 } from './Landing1/Contents';
import { Contents, ThemeData, LogoName } from './Landing/Contents';
import MainPage from './MainPage';
import { MainContext } from './MainContext';
const landing1Style = {
  headerPosition: { logged: {}, unLogged: { position: "absolute", zIndex: 1, width: '100vw' } },
  headerStyle: {
    logged: { height: '5rem', color: 'white', backgroundColor: "rgba(138, 190, 162, 0.8)", backdropFilter: "blur(10px)", borderRadius: '20px', padding: '0 2rem' },
    unLogged: {
      height: '5rem', color: 'white', backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", borderRadius: '20px', padding: '0 2rem',
      margin: "2rem", boxShadow: "0 1px 9px solid #ffffff"
    }
  },
  sideBarStyle: { backgroundColor: "rgba(165, 207, 185, 0.6)", backdropFilter: "blur(10px)", borderRadius: '20px' },
  contentStyle: { backgroundColor: "#dee5e3", backdropFilter: "blur(10px)", borderRadius: '20px' }
}
const landingStyle = {
  headerPosition: { logged: {}, unLogged: { position: "absolute", zIndex: 1, width: '100vw' } },
  headerStyle: {
    logged: { height: '5rem', color: 'white', backgroundColor: "rgba(138, 190, 162, 0.8)", backdropFilter: "blur(10px)", borderRadius: '20px', padding: '0 2rem' },
    unLogged: {
      height: '5rem', color: 'white', backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", borderRadius: '20px', padding: '0 2rem',
      margin: "2rem", boxShadow: "0 1px 9px solid #ffffff"
    }
  },
  sideBarStyle: { backgroundColor: "rgba(165, 207, 185, 0.6)", backdropFilter: "blur(10px)", borderRadius: '20px' },
  contentStyle: { backgroundColor: "#dee5e3", backdropFilter: "blur(10px)", borderRadius: '20px' }
}
function MainLayout() {
  const { system, loggedUser } = useContext(MainContext);
  
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState({});
  const [systemStyle, setSystemStyle] = useState({});
 
  useEffect(() => {
    let sysStyle;
    if (system === "portal") {
      setItems(Contents1);
      setTheme(ThemeData1);
      sysStyle = landing1Style;
    } else {
      setItems(Contents);
      setTheme(ThemeData);
      sysStyle = landingStyle;
    }

    setSystemStyle({
      headerPosition: loggedUser ? sysStyle.headerPosition.logged : sysStyle.headerPosition.unLogged,
      headerStyle: loggedUser ? sysStyle.headerStyle.logged : sysStyle.headerStyle.unLogged,
      sideBarStyle: sysStyle.sideBarStyle,
      contentStyle: sysStyle.contentStyle
    })
  }, [system, loggedUser])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <ConfigProvider
      theme={{
        // token: {
        //   colorText: theme.colorText, // Main text color added here
        // },
        components: {
          Button: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
          Input: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
          Menu: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
          Checkbox: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
          Form: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
          Anchor: {
            colorPrimary: theme.colorPrimary,
            algorithm: theme.algorithm,
          },
        },
      }}
    >
      <BrowserRouter>
        <Row>
          <Col span={24} style={systemStyle.headerPosition}>
            <Affix>
              <Row style={systemStyle.headerStyle}>
                <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                  <Flex align='center' style={{ height: '100%' }}>
                    {system === "portal" ? <LogoName1 /> : <LogoName />}
                  </Flex>
                </Col>
                <Col xs={24} sm={12} md={12} lg={14} xl={14} xxl={14} >
                  {!loggedUser &&
                    <Flex align='center' justify='center' style={{ height: '100%', }}>
                      <Anchor direction='horizontal'   >
                        {items.map((item) => {
                          return <Anchor.Link title={<span style={{ color: `${theme.colorPrimary}`, fontSize: '18px', margin: '0px 10px' }}>{item.label}</span>} key={item.key} href={`#${item.key}`} />
                        })}
                      </Anchor>
                    </Flex>
                  }
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <Flex align='center' justify='right' gap='middle' style={{ height: '100%' }}>
                    {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
                    <Button type='text' style={{ color: `${theme.colorPrimary}`, padding: '1.2rem 1.5rem', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px' }}>Бүртгүүлэх</Button>
                    <Button style={{ background: `${theme.colorPrimary}`, padding: '1.2rem 1.5rem', color: '#ffffff', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px' }} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
                  </Flex>
                </Col>
                <Modal
                  width={'30%'}
                  title="Нэвтрэх"
                  open={isModalOpen}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <LoginForm onClose={() => {
                    handleCancel()
                  }} />
                </Modal>
              </Row>
            </Affix>
          </Col>
          <Col span={24} >
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Affix offsetTop={380} >
                  <Flex style={{ position: 'absolute', zIndex: 1, width: '100%', right: 20 }} justify='right'>
                    <Flex gap='middle' vertical align='center' >
                      {system !== "portal" ? <LogoName1 /> : <LogoName />}
                      <FacebookFilled style={{ fontSize: 'xx-large', color: 'blue' }} />
                      <InstagramFilled style={{ fontSize: 'xx-large', color: 'red' }} />
                      <TwitterOutlined style={{ fontSize: 'xx-large', color: 'blue' }} />
                    </Flex>
                  </Flex>
                </Affix>
              </Col>
              {!loggedUser &&
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <MainPage items={items} />
                </Col>
              }
              {loggedUser &&
                <Col xs={10} sm={10} md={10} lg={4} xl={4} xxl={4}>
                  <Affix offsetTop={80}>
                    <SideBar style={systemStyle.sideBarStyle} />
                  </Affix>
                </Col>
              }
              {loggedUser &&
                <Col xs={14} sm={14} md={14} lg={20} xl={20} xxl={20} >
                  <Card size='small' style={{ minHeight: 'calc(100vh - 5rem)', ...systemStyle.contentStyle }}>
                    <MainPage items={items} />
                  </Card>
                </Col>
              }
            </Row>

          </Col>
        </Row>
      </BrowserRouter >
    </ConfigProvider >
  );
}

export default MainLayout;
