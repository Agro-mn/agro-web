import React, { useEffect } from 'react';
import { Button, Carousel, Col, Flex, Row } from 'antd';
import aut1 from '../../assets/img/james-baltz-_pBBkarmFTs-unsplash.jpg';
import aut2 from '../../assets/img/aut2.png';
import aut3 from '../../assets/img/aut3.png';
import sum1 from '../../assets/img/sum1.png';
import sum2 from '../../assets/img/sum2.png';
import sum3 from '../../assets/img/sum3.png';
import background from "../../assets/img/landing1/wheat.png";

const HomeImage = () => {

  const style = {
    width: '100vw',
    height: `100vh`,
    backgroundImage: `url(${aut1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    color: 'white',
    fontFamily: "var(--main-font)",
    fontWeight: '900'
  };
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
      <div style={style}>
        <Flex align='center' justify='center' style={{height: '100vh'}}>
          {/*<Row>*/}
          {/*  <Col span={24} style={{ position: 'absolute', bottom: 20, left: 10 }}>*/}
          {/*    <Flex gap='small'>*/}
          {/*      {items.map((item) => {*/}
          {/*        return <Button key={item.key}>{item.title}</Button>*/}
          {/*      })}*/}
          {/*    </Flex>*/}
          {/*  </Col>*/}
          {/*</Row>*/}
        </Flex>
      </div>
  );
};

export default HomeImage;