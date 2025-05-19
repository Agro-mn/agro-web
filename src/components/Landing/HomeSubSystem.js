import React, { useEffect } from 'react';
import { Row, Col, Flex } from 'antd';
import app from '../../assets/img/system.png';
import {LogoName1 , ThemeData1 } from '../Landing1/Contents';
import SystemCard from './SystemCard';

const HomeSubSystem = ({ ThemeDataLoan, ThemeDataPlatform}) => {

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
            description='AgroMongolia – Хөдөө аж ахуйн үйлдвэрлэлээ технологитой хослуул. Төлөвлө, хяна, ашиг шимээ өсгө.'
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
            description='AgroMongolia - Хөдөө аж ахуйн бүх хэрэгцээг нэг дор. Ашигтай зар, амжилттай арилжаа энд эхэлнэ.'
            logo={<LogoName1 height={'1rem'}/>}
            siteUrl='www.platform.agro.mn'
            systemName='platform'
          />
          <SystemCard
            headerStyle={headerStyle}
            textStyle={textStyle}
            image={app}
            themeData={ThemeDataLoan}
            title='Хөдөө аж ахуйн зээлийн үйлчилгээ'
            description='Тариаланч таны онцлогт зориулсан хөдөө аж ахуйн уян хатан зээлийн үйлчилгээ. Таны хөдөлмөрийг дэмжих санхүүгийн шийдэл.'
            logo={<LogoName1 height={'1rem'}/>}
            siteUrl='www.loan.agro.mn'
          />
        </Row>
      </Flex>
    </div>
  );
};

export default HomeSubSystem;