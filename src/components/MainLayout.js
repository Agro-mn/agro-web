import { Col, Row, Affix, Flex, Button, Modal, Anchor, ConfigProvider, Card } from 'antd';
import { useContext, useEffect, useState } from 'react';
import {AlertOutlined, FacebookFilled, InstagramFilled, TwitterOutlined, UserOutlined} from "@ant-design/icons";
import {BrowserRouter} from "react-router-dom";
import { MainContext } from './MainContext';
import LoginForm from "./LoginForm";
import SideBar from './SideBar';
import { Contents1, ThemeData1, LogoName1 } from './Landing1/Contents';
import { Contents, ThemeData, LogoName } from './Landing/Contents';
import MainPage from './MainPage';
import logo from "../assets/img/agro_logo_yellow.png";
import logo1 from "../assets/img/agro_logo_gradient.png";

const landingStyle = {
  sideBarStyle: { backgroundColor: "rgba(0, 0, 0, 0.0)", backdropFilter: "blur(10px)"},
  contentStyle: { backgroundColor: "#ffffff", backdropFilter: "blur(10px)" },
  rightBarStyle: { backgroundColor: "rgba(0, 0, 0, 0.0)", padding: '0.5rem', },
}
function MainLayout() {
  const { system, loggedUser } = useContext(MainContext);

  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState({});
  const [systemStyle, setSystemStyle] = useState({});
  useEffect(() => {
    let sysStyle = landingStyle;
    if (system === "portal") {
      setItems(Contents1);
      setTheme(ThemeData1);
    } else {
      setItems(Contents);
      setTheme(ThemeData);
    }
    setSystemStyle({
      sideBarStyle: sysStyle.sideBarStyle,
      contentStyle: sysStyle.contentStyle,
      rightBarStyle: sysStyle.rightBarStyle,
      themeData: sysStyle.themeData,
    })
  }, [system, loggedUser])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const themes = {
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
      Radio: {
        colorPrimary: theme.colorPrimary,
        algorithm: theme.algorithm,
      },
      Tabs: {
        colorPrimary: theme.colorPrimary,
        algorithm: theme.algorithm,
      },
      Segmented: {
        colorPrimary: theme.colorPrimary,
        algorithm: theme.algorithm,
      },
      Card: {
        colorPrimary: theme.colorPrimary,
        algorithm: theme.algorithm,
      },
    }
  }

  return (
      <ConfigProvider
          theme={themes}
      >
        <BrowserRouter>
          <Row>
            {!loggedUser && system !== "portal" &&
                <Col span={24} style={{position: "absolute", zIndex: 1, width: '100vw'}}>
                  <Affix style={{ width: '100%' }}>
                    <Flex align='center' justify='center'>
                      <Row style={{
                        backgroundColor: 'rgba(39,40,38,0.82)',
                        height: '5rem',
                        width: '90vw',
                        padding: '0 2rem',
                        borderBottomLeftRadius: '2rem',
                        borderBottomRightRadius: '2rem',
                        borderTop: `2px solid #efd643`,
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
                      }}>
                        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                          <Flex align='center' style={{ height: '100%' }}>
                            <LogoName />
                          </Flex>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={16} xl={16} xxl={16} >
                          {!loggedUser &&
                              <Flex align='center' justify='center' style={{ height: '100%', }}>
                                <Anchor direction='horizontal'   >
                                  {items.map((item) => {
                                    return <Anchor.Link title={<a  style={{color: `white`,
                                      fontFamily: "var(--main-font)", fontSize: '14px', margin: '0px 10px'}}>{item.label}</a>} key={item.key} href={`#${item.key}`} />
                                  })}
                                </Anchor>
                              </Flex>
                          }
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
                          <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
                            {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
                            <Button type='text' style={{color: `white`, fontSize: '12px',
                              fontFamily: "var(--main-font)",padding: '1.2rem 1.5rem', fontWeight: 'bold', border: `2px solid ${theme.colorPrimary}`, borderRadius: '10px'}}>Бүртгүүлэх</Button>
                            <Button style={{background: `${theme.colorPrimary}`, fontSize: '12px',
                              fontFamily: "var(--main-font)",padding: '1.2rem 1.5rem',color: '#272826', fontWeight: 'bold', border: `2px solid ${theme.colorPrimary}`, borderRadius: '10px'}} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
                          </Flex>
                        </Col>
                      </Row>
                    </Flex>
                  </Affix>
                </Col>
            }
            {!loggedUser && system === "portal" &&
                <Col span={24} style={{position: "absolute", zIndex: 1, width: '100vw'}}>
                  <Affix>
                    <Row style={{height: '5rem', padding: '0 2rem', margin: "2rem", color: 'white', backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", boxShadow: "0 1px 9px rgba(0, 0, 0, 0.3)", borderRadius: '20px'}}>
                      <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                        <Flex align='center' style={{ height: '100%' }}>
                          <LogoName1 />
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
                        <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
                          {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
                          <Button type='text' style={{color: `#272826`,fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px'}}>Бүртгүүлэх</Button>
                          <Button style={{background: `${theme.colorPrimary}`,fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem',color: '#ffffff', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px'}}
                                  onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}
                          </Button>
                        </Flex>
                      </Col>
                    </Row>
                  </Affix>
                </Col>
            }
            {loggedUser &&
                <Col span={24} style={{position: "absolute", zIndex: 1, width: '100vw'}}>
                  <Affix>
                    <Flex align='center' justify='center'>
                      <Row style={{
                        height: '5rem',
                        width: '100vw',
                        padding: '0 2rem',
                        borderBottom: `2px solid ${theme.colorPrimary}`
                      }}>
                        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                          <Flex align='center' style={{ height: '100%' }}>
                            <img src={system === "portal" ? logo1 : logo}
                                 style={{ height: '2.5rem' }} alt='logo'/>
                          </Flex>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={14} xl={14} xxl={14} >
                          <Flex gap={'middle'} align='center' justify='right' style={{ height: '100%', }} >
                            {system !== "portal" ? <LogoName1 height={'1.5rem'} /> : <LogoName height={'1.5rem'} />}
                            <FacebookFilled style={{ fontSize: 'large', color: 'blue' }} />
                            <InstagramFilled style={{ fontSize: 'large', color: 'red' }} />
                            <TwitterOutlined style={{ fontSize: 'large', color: 'blue' }} />
                          </Flex>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                          <Flex align='center' justify='right' gap='middle' style={{ height: '100%' }}>
                            <Button type='text'
                                    style={{
                                      background: `${theme.colorBackground}`,
                                      padding: '1.3rem',

                            }}
                                    icon={
                              <AlertOutlined style={{fontSize: '20px', color: `${theme.colorPrimary}` }} />
                            }></Button>

                            {!loggedUser && <Button style={{ background: `${theme.colorPrimary}`, padding: '1.2rem 1.5rem', color: '#ffffff', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px' }}
                                    onClick={() => { showModal(); }}>
                              Нэвтрэх
                            </Button>}
                            {
                              loggedUser
                                &&
                                <UserOutlined style={{ fontSize: '25px', color: `${theme.colorPrimary}` }} onClick={() => { showModal(); }}/>
                            }
                          </Flex>
                        </Col>
                      </Row>
                    </Flex>
                  </Affix>
                </Col>
            }

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


            <Col span={24} >
              <Row>
                {!loggedUser &&
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                      <Affix offsetTop={250} >
                        <Flex
                            style={{ position: 'absolute', zIndex: 1, right: 10 }}
                            justify='right'
                        >
                          <Flex style={systemStyle.rightBarStyle}
                                gap='middle' vertical align='center' >
                            {system !== "portal" ? <LogoName1 /> : <LogoName />}
                            <FacebookFilled style={{ fontSize: 'xx-large', color: 'blue' }} />
                            <InstagramFilled style={{ fontSize: 'xx-large', color: 'red' }} />
                            <TwitterOutlined style={{ fontSize: 'xx-large', color: 'blue' }} />
                          </Flex>
                        </Flex>
                      </Affix>
                    </Col>}
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
                      <Card size='small' style={{ minHeight: 'calc(100vh - 5rem)', marginTop: '5rem', ...systemStyle.contentStyle }}>
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
