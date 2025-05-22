import { Col, Row, Affix, Flex, Button, Modal, Anchor, ConfigProvider, Card, Dropdown, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AlertOutlined } from "@ant-design/icons";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from './MainContext';
import LoginForm from "./LoginForm";
import SideBar from './SideBar';
import { Contents1, ThemeData1, LogoName1, ShortLogo1 } from './Landing1/Contents';
import { Contents, ThemeData, LogoName, ThemeDataLoan, ThemeDataPlatform, FakeLogo, ShortLogo } from './Landing/Contents';
import MainPage from './MainPage';
import logo from "../assets/img/agro_logo_yellow.png";
import logo1 from "../assets/img/agro_logo_gradient.png";
import bell from "../assets/icons/menu/bell.png";
import user from "../assets/icons/menu/user.png";
import exit from "../assets/icons/menu/exit.png";
import info from "../assets/icons/menu/member-list.png";

function MainLayout() {
  const menus = [
    {
      key: '1',
      label: (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" target="_blank" rel="noopener noreferrer">
          Миний мэдээлэл
        </a>
      ),
      icon: <img src={info} alt='out' style={{ width: '1px' }} />
    },
    {
      key: '2',
      label: (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a target="_blank" rel="noopener noreferrer" onClick={() => { showModal(); }}>
          Гарах
        </a>
      ),
      icon: <img src={exit} alt='out' style={{ width: '1px' }} />
    },
  ];
  const { system, loggedUser } = useContext(MainContext);

  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState({});
  const [systemStyle, setSystemStyle] = useState({});
  useEffect(() => {
    if (system === "portal") {
      setItems(Contents1);
      setTheme(ThemeData1);
    } else {
      setItems(Contents);
      setTheme(ThemeData);
    }
    setSystemStyle({
      sideBarStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        backdropFilter: "blur(10px)",
      },
      contentStyle: { backgroundColor: "#f1f1f1", padding: '10px', backdropFilter: "blur(10px)" },
      rightBarStyle: { backgroundColor: "rgba(0, 0, 0, 0.0)", padding: '0.5rem', },
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
        textTextColor: "#000000",
        algorithm: theme.algorithm,
      },
      Select: {
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
      DatePicker: {
        colorPrimary: theme.colorPrimary,
        algorithm: theme.algorithm,
      },
    }
  }
  const handleChange = value => {
    setCompanyId(value);
  };
  const [companyId, setCompanyId] = useState('1');

  return (
    <ConfigProvider
      theme={themes}
    >
      <BrowserRouter>
        <Row>
          {!loggedUser && system !== "portal" &&
            <Col span={24} style={{ position: "absolute", zIndex: 1, width: '100vw' }}>
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
                        <ShortLogo />
                      </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={16} xl={16} xxl={16} >
                      {!loggedUser &&
                        <Flex align='center' justify='center' style={{ height: '100%', }}>
                          <Anchor direction='horizontal'   >
                            {items.map((item) => {
                              // eslint-disable-next-line jsx-a11y/anchor-is-valid
                              return <Anchor.Link title={<a style={{
                                color: `white`,
                                fontFamily: "var(--main-font)", fontSize: '14px', margin: '0px 10px'
                              }}>{item.label}</a>} key={item.key} href={`#${item.key}`} />
                            })}
                          </Anchor>
                        </Flex>
                      }
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
                      {/* <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
                        {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
                        <Button type='text' style={{
                          color: `white`, fontSize: '12px',
                          fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', fontWeight: 'bold', border: `2px solid ${theme.colorPrimary}`, borderRadius: '10px'
                        }}>Бүртгүүлэх</Button>
                        <Button style={{
                          background: `${theme.colorPrimary}`, fontSize: '12px',
                          fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', color: '#272826', fontWeight: 'bold', border: `2px solid ${theme.colorPrimary}`, borderRadius: '10px'
                        }} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
                      </Flex> */}
                    </Col>
                  </Row>
                </Flex>
              </Affix>
            </Col>
          }
          {!loggedUser && system === "portal" &&
            <Col span={24} style={{ position: "absolute", zIndex: 1, width: '100vw' }}>
              <Affix>
                <Row style={{ height: '5rem', padding: '0 2rem', margin: "2rem", color: 'white', backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", boxShadow: "0 1px 9px rgba(0, 0, 0, 0.3)", borderRadius: '20px' }}>
                  <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                    <Flex align='center' style={{ height: '100%' }}>
                      <ShortLogo1 />
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
                      <Button type='text' style={{ color: `#272826`, fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px' }}>Бүртгүүлэх</Button>
                      <Button style={{ background: `${theme.colorPrimary}`, fontFamily: "var(--main-font)", padding: '1.2rem 1.5rem', color: '#f0fff2', border: `3px solid ${theme.colorPrimary}`, borderRadius: '10px' }}
                        onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}
                      </Button>
                    </Flex>
                  </Col>
                </Row>
              </Affix>
            </Col>
          }
          {loggedUser &&
            <Col span={24} style={{ position: "absolute", zIndex: 1, width: '100vw' }}>
              <Affix>
                <Flex align='center' justify='center'>
                  <Row style={{
                    height: '5rem',
                    width: '100vw',
                    padding: '0 2rem',
                    marginTop: '0px',
                    borderTop: `2px solid ${theme.colorPrimary}`,
                    background: "#ffffff", boxShadow: "0 1px 9px rgba(0, 0, 0, 0.3)"
                  }}>
                    <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}  >
                      <Flex align='center' style={{ height: '100%' }}>
                        {system === "portal" ? <ShortLogo1 /> : <ShortLogo />}
                        {/* <img src={system === "portal" ? logo1 : logo}
                          style={{ height: '2.5rem' }} alt='logo' /> */}
                      </Flex>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={20} xl={20} xxl={20}>
                      <Flex align='center' justify='right' gap='middle' style={{ height: '100%' }}>

                        <Select
                          className="custom-select"
                          value={companyId}
                          onChange={handleChange}
                          placement="bottomRight"
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            border: `none`
                          }}
                          options={[
                            { value: '1', label: 'Сэлэнгэ Тариа ХХК' },
                            { value: '2', label: 'Оргил Тариа ХХК' },
                            { value: '3', label: 'Алтан Тариа ХХК' },
                            { value: '4', label: 'Таван Тариа ХХК' },
                          ]}
                        />
                        <Button type='text' color="danger"
                          style={{
                            background: `${theme.colorBackground}`,
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: `unset`
                          }}
                          icon={
                            <img src={bell} alt='plan' height={20} />
                          }></Button>
                        <Dropdown menu={{ items: menus }} placement="bottomRight" trigger={['click']}>
                          <Button
                            style={{
                              background: `${theme.colorBackground}`,
                              padding: '1.5rem',
                              borderRadius: '10px',
                              border: `unset`

                            }}
                            icon={<img src={user} alt='plan' height={20} />
                            }></Button>
                        </Dropdown>
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
                      style={{ position: 'absolute', zIndex: 1, left: 10 }}
                      justify='left'
                    >
                      <Flex style={systemStyle.rightBarStyle}
                        gap='middle' vertical align='center' >
                        <Button type='default' ghost icon={<LogoName height={'2rem'} />}
                          style={{ height: '3rem', width: '3rem', borderColor: ThemeData.colorPrimary }} ></Button>
                        <Button type='default' ghost icon={<LogoName1 height={'2rem'} />}
                          style={{ height: '3rem', width: '3rem', borderColor: ThemeData1.colorPrimary }} ></Button>
                        <Button type='default' ghost icon={<FakeLogo themeData={ThemeDataPlatform} systemName={'platform'} />}
                          style={{ height: '3rem', width: '3rem', borderColor: ThemeDataPlatform.colorPrimary }} ></Button>
                        <Button type='default' ghost icon={<FakeLogo themeData={ThemeDataLoan} />}
                          style={{ height: '3rem', width: '3rem', borderColor: ThemeDataLoan.colorPrimary }} ></Button>
                        {/* {system !== "portal" ? <LogoName1 height={'2rem'} /> : <LogoName />}
                        <FacebookFilled style={{ fontSize: 'xx-large', color: 'blue' }} />
                        <InstagramFilled style={{ fontSize: 'xx-large', color: 'red' }} />
                        <TwitterOutlined style={{ fontSize: 'xx-large', color: 'blue' }} /> */}
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
                    <div style={{ background: '#fff', padding: '25px', borderRadius: '10px' }}>
                      <MainPage items={items} />
                    </div>
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
