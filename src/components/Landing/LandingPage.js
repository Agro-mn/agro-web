import { Col, Row, Affix, Anchor, Flex } from 'antd';
import LogoName from './Layouts/LogoName';
import SideBar from './Layouts/SideBar';
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
  return (
    <Row >
      <Affix style={{ backgroundColor: 'transparent', zIndex: 1, position: 'absolute', width: '100%' }}>
        <Row
          style={{
            height: '5rem',
          }}
        >
          <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4} >
            <LogoName />
          </Col>
          <Col xs={24} sm={12} md={12} lg={16} xl={16} xxl={16} >
            {!loggedUser &&
              <Flex align='center' justify='center' style={{ height: '100%' }}>
                {/* <Menu
              style={{ borderBottom: '0px', fontWeight: 'bold' }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items} /> */}
                <Anchor direction='horizontal'>
                  {items.map((item) => {
                    return <Anchor.Link title={item.label} key={item.key} href={`#${item.key}`} />
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
              <Col id='direction' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ paddingTop: '80px', marginTop: '-80px' }}>
                <HomeDirection />
              </Col>
              <Col id='subSystem' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ paddingTop: '80px', marginTop: '-80px' }}>
                <HomeSubSystem />
              </Col>
              <Col id='contact' xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ paddingTop: '80px', marginTop: '-80px' }}>
                <HomeContact />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default LandingPage;
