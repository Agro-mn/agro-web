import React, { useEffect } from 'react';
import { Row, Col, Flex } from 'antd';
import app from '../../assets/img/system.png';
import {LogoName1 , ThemeData1 } from '../Landing1/Contents';
import SystemCard from './SystemCard';

const HomeSubSystem = () => {

  const headerStyle = {
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: '#272826',
    fontFamily: "var(--main-font)",
    marginBottom: '1rem',
  };
  const textStyle = {
    fontSize: 'large',
    color: '#272826',
    fontFamily: "var(--main-font)",
    marginBottom: '1rem',
  };
  const style = {
    width: '80vw',
    // height: `calc(100vh - 6rem)`,
    marginTop: '6rem'
  };
  useEffect(() => {
    // fetchWeather();
    // setWeather(testData);
  }, []);
  const ThemeDataPlatform = {
    colorPrimary: 'red',
    colorBackground: 'pink',
    colorText: 'red',
    algorithm: true
  };
  const ThemeDataLoan = {
    colorPrimary: 'blue',
    colorBackground: 'aliceblue',
    colorText: 'blue',
    algorithm: true
  };
  return (
    <div style={style}>
      <Row gutter={[20, 20]}>
        <Col span={24} style={headerStyle}>
          <span style={{ borderBottom: '3px solid #efd643' }}>Холбогдох системүүд</span>
        </Col>
      </Row>
      <Flex align='center' justify='center'>
        <Row gutter={[20, 20]} style={{ width: '60vw', marginTop: '50px' }}>
          <SystemCard
            headerStyle={headerStyle}
            textStyle={textStyle}
            image={app}
            themeData={ThemeData1}
            title='Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем'
            description='Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем аж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн систем'
            logo={<LogoName1 height={'1rem'}/>}
            siteUrl='www.portal.agro.mn'
            systemName='portal'
          />
         <SystemCard
            headerStyle={headerStyle}
            textStyle={textStyle}
            image={app}
            themeData={ThemeDataPlatform}
            title='Хөдөө аж ажуйн зарын нэгдсэн платформ'
            description='Хөдөө аж ажуйн зарын нэгдсэн платформ Хөдөө аж ажуйн зарын нэгдсэн платформ Хөдөө аж ажуйн зарын нэгдсэн платформ Хөдөө аж ажуйн зарын нэгдсэн платформ'
            logo={<LogoName1 height={'1rem'}/>}
            siteUrl='www.platform.agro.mn'
          />
          <SystemCard
            headerStyle={headerStyle}
            textStyle={textStyle}
            image={app}
            themeData={ThemeDataLoan}
            title='Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ'
            description='Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ'
            logo={<LogoName1 height={'1rem'}/>}
            siteUrl='www.loan.agro.mn'
          />
        </Row>
      </Flex>
    </div>
  );
};

export default HomeSubSystem;