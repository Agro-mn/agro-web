import {Col, Row, Affix, Flex, Button, Modal, Anchor, ConfigProvider} from 'antd';
import SideBar from './Layouts/SideBar';
import {useEffect, useState} from 'react';
import MainPage from "./Layouts/MainPage";
import LogoName from "./Layouts/LogoName";
import {AlertOutlined} from "@ant-design/icons";
import LoginForm from "./Layouts/LoginForm";
import DirectionPage from "./Layouts/DirectionPage";
import SystemPage from "./Layouts/SystemPage";
import CompanyPage from "./Layouts/CompanyPage";
import ContactPage from "./Layouts/ContactPage";


function LandingPage1() {
  const [loggedUser, setLoggedUser] = useState();

    const items = [
        {
            label: 'Нүүр',
            key: 'home',
            // icon: <AppstoreOutlined />,
        },
        {
            label: 'Чиглэл',
            key: 'direction',
            // icon: <MailOutlined />,
        },

        {
            label: 'Систем',
            key: 'system',
            // icon: <AppstoreOutlined />,
        },

        {
            label: 'Хамтрагч',
            key: 'company',
            // icon: <AppstoreOutlined />,
        },

        {
            label: 'Холбоо барих',
            key: 'contact',
            // icon: <AppstoreOutlined />,
        },
    ]
    const themeData = {
        colorPrimary: '#4C6B45',
        colorText: '#4C6B45',
        algorithm: true // Enable algorithm
    };


    useEffect(() => {
        setLoggedUser(localStorage.getItem('loggedUser'));
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const colProps = {
        xs: loggedUser ? 14 : 24,
        sm: loggedUser ? 14 : 24,
        md: loggedUser ? 14 : 24,
        lg: loggedUser ? 20 : 24,
        xl: loggedUser ? 20 : 24,
        xxl: loggedUser ? 20 : 24,
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
          <Row>
              <Col span={24} style={{position: "absolute", zIndex: 1, width: '100vw'}}>
                  <Affix>
                      <Row style={{height: '5rem', padding: '0 2rem', margin: "2rem", color: 'white', backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", boxShadow: "0 1px 9px rgba(0, 0, 0, 0.3)", borderRadius: '20px'}}>
                          <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                              <Flex align='center' style={{ height: '100%' }}>
                                  <LogoName />
                              </Flex>
                          </Col>
                          <Col xs={24} sm={12} md={12} lg={14} xl={14} xxl={14} >
                              {!loggedUser &&
                                  <Flex align='center' justify='center' style={{ height: '100%', }}>
                                      <Anchor direction='horizontal'   >
                                          {items.map((item) => {
                                              return <Anchor.Link title={<a style={{color: `#272826`,fontFamily: "var(--main-font)", fontSize: '15px', margin: '0px 10px'}}>{item.label}</a>} key={item.key} href={`#${item.key}`} />
                                          })}
                                      </Anchor>
                                  </Flex>
                              }
                          </Col>
                          <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                              <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
                                  {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
                                  <Button type='text' style={{color: `#272826`,fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', border: `3px solid ${themeData.colorPrimary}`, borderRadius: '10px'}}>Бүртгүүлэх</Button>
                                  <Button style={{background: `${themeData.colorPrimary}`,fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem',color: '#f0fff2', border: `3px solid ${themeData.colorPrimary}`, borderRadius: '10px'}} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
                              </Flex>
                          </Col>
                          <Modal
                              width={'30%'}
                              title="Нэвтрэх"
                              open={isModalOpen}
                              onCancel={handleCancel}
                              footer={null}
                          >
                              <LoginForm onChangeLogin={() => {
                                  handleCancel();
                                  setLoggedUser(localStorage.getItem('loggedUser'));
                              }} />
                          </Modal>
                      </Row>
                  </Affix>
              </Col>
              <Col span={24} style={{background: '#f6fdf6'}}>
                  <Row>
                      {loggedUser &&
                          <Col xs={10} sm={10} md={10} lg={4} xl={4} xxl={4}>
                              <Affix style={{ backgroundColor: 'Background' }} offsetTop={80}>
                                  <SideBar />
                              </Affix>
                          </Col>
                      }

                      <Col {...colProps}>
                          <Row>
                              <Col id='home' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                  <Flex align='center' justify='center' >
                                      <MainPage />
                                  </Flex>
                              </Col>
                              <Col id='direction' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                  <Flex align='center' justify='center' >
                                      <DirectionPage />
                                  </Flex>
                              </Col>
                              <Col id='system' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                  <Flex align='center' justify='center' >
                                      <SystemPage />
                                  </Flex>
                              </Col>
                              <Col id='company' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                  <Flex align='center' justify='center' >
                                      <CompanyPage />
                                  </Flex>
                              </Col>
                              <Col id='contact' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                                  <Flex align='center' justify='center' >
                                      <ContactPage />
                                  </Flex>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Col>
          </Row>

      </ConfigProvider>

  );
}

export default LandingPage1;
