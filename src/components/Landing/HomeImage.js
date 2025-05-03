import React, { useEffect } from 'react';
import { Button, Carousel, Col, Flex, Row } from 'antd';
import aut1 from '../../assets/img/aut1.png';
import aut2 from '../../assets/img/aut2.png';
import aut3 from '../../assets/img/aut3.png';
import sum1 from '../../assets/img/sum1.png';
import sum2 from '../../assets/img/sum2.png';
import sum3 from '../../assets/img/sum3.png';

const HomeImage = () => {

  useEffect(() => {
  }, []);

  const items = [
    {
      title: "Хавар",
      key: "spring",
      images: [aut1, aut2, aut3]
    },
    {
      title: "Зун",
      key: "summer",
      images: [sum1, sum2, sum3]
    },
    {
      title: "Намар",
      key: "fall",
      images: [aut1, aut2, aut3]
    },
    {
      title: "Өвөл",
      key: "winter",
      images: [sum1, sum2, sum3]
    },
  ]

  return (
    <Row>
      <Col span={24}>
        <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
          {items[1].images.map((image, index) => {
            return <img key={index} src={image} style={{ width: '100%' }} alt='logo' />
          })}
        </Carousel>
      </Col>
      <Col span={24} style={{ position: 'absolute', bottom: 20, left: 10 }}>
        <Flex gap='small'>
          {items.map((item) => {
            return <Button key={item.key}>{item.title}</Button>
          })}
        </Flex>
      </Col>
    </Row>
  );
};

export default HomeImage;