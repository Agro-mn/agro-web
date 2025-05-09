import {Col, Row, Affix, Anchor, Flex, ConfigProvider, Button} from 'antd';
import LogoName from '../LogoName';
import SideBar from './SideBar';
import { useState } from 'react';
import HomeImage from './HomeImage';
import HomeDirection from './HomeDirection';
import HomeSubSystem from './HomeSubSystem';
import HomeContact from './HomeContact';
import {AlertOutlined} from "@ant-design/icons";
import pattern from '../../assets/img/pattern.png'

function LandingPage() {

  const style = {
    backgroundImage: `url(${pattern})`,
    backgroundSize: '512px 512px',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    color: 'white',
    fontFamily: "var(--main-font)",
  };
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
    colorPrimary: '#efd643',
    colorText: '#efd643',
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
        <Row  style={style}>
          <Col span={24} style={{position: "absolute", zIndex: 1, width: '100vw'}}>
            <Affix style={{ width: '100%' }}>
              <Flex align='center' justify='center'>
                <Row style={{
                  backgroundColor: 'rgba(39,40,38,0.82)',
                  height: '5rem',
                  width: '90vw',
                  padding: '1rem',
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
                        fontFamily: "var(--main-font)",padding: '1.2rem 1.5rem', fontWeight: 'bold', border: `2px solid ${themeData.colorPrimary}`, borderRadius: '10px'}}>Бүртгүүлэх</Button>
                      <Button style={{background: `${themeData.colorPrimary}`, fontSize: '12px',
                        fontFamily: "var(--main-font)",padding: '1.2rem 1.5rem',color: '#272826', fontWeight: 'bold', border: `2px solid ${themeData.colorPrimary}`, borderRadius: '10px'}} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
                    </Flex>
                  </Col>
                  {/*<Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>*/}
                  {/*  <LoginComp onChangeLogin={() => { setLoggedUser(localStorage.getItem('loggedUser')); }} />*/}
                  {/*</Col>*/}
                </Row>
              </Flex>
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
              <Col {...colProps}>
                <Row >
                  <Col id='home' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                    <Flex align='center' justify='center'>
                      <HomeImage />
                    </Flex>
                  </Col>
                  <Col id='direction' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                    <Flex align='center' justify='center'>
                      <HomeDirection />
                    </Flex>
                  </Col>
                  <Col id='subSystem' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                    <Flex align='center' justify='center'>
                      <HomeSubSystem />
                    </Flex>
                  </Col>
                  <Col id='contact' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} >
                    <Flex align='center' justify='center'>
                      <HomeContact />
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

export default LandingPage;
