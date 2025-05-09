import React, { useEffect } from 'react';
import { Card, Row, Col, Divider, Flex } from 'antd';
import dir1 from '../../assets/img/dir1.png';
import dir2 from '../../assets/img/dir2.png';
import dir3 from '../../assets/img/dir3.png';
import dir4 from '../../assets/img/dir4.png';

const HomeDirection = () => {
  const testData = [
    {
      title: "Үр тариа",
      image: dir2
    }, {
      title: "Хүлэмжийн аж ахуй",
      image: dir3
    }, {
      title: "Хүнсний ногоо",
      image: dir4
    },
    {
      title: "Мал аж ахуй",
      image: dir1
    },
  ]
  useEffect(() => {
    // fetchWeather();
    // setWeather(testData);
  }, []);

  return (
    <Row gutter={[60]} style={{ padding: '1rem 5rem' }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>
        Үйл ажиллагааны чиглэл
      </Col>
      {testData.map((item, index) => {
        return <Col key={index} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} style={{ paddingTop: '1rem' }}>
          <span style={{ zIndex: 1, fontSize: 'xx-large', fontWeight: 'bold', position: "absolute", color: 'rgb(216 156 87)', marginLeft: '3rem', marginTop: '1rem' }}
          >{item.title}</span>
          <img src={item.image} alt='logo' style={{ width: '100%' }} />
        </Col>
      })}
    </Row>
  );
};

export default HomeDirection;