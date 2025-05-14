import React, { useEffect } from 'react';
import { Col, Flex, Row } from 'antd';
import aut1 from '../../assets/img/james-baltz-_pBBkarmFTs-unsplash.jpg';
import mainLongLogo from '../../assets/img/mainLongLogo.png';

const HomeImage = ({ themeData }) => {

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

  return (
      <div style={style}>
         <Row justify="center" align="middle" style={{ height: 'calc(75vh - 6rem)', marginTop: '6rem'}}>
                <Col style={{ textAlign:'center'}} >
                    <img src={mainLongLogo} alt="logo" style={{ width: '70vh', height: '100%', objectFit: 'cover'}} />           
                    <h1  style={{ margin: 0, fontSize: '3rem', textAlign: 'center', 
                      width: '55vw', fontFamily: "var(--main-font)", color: themeData.colorPrimary }}>
                        Тариаланг таны гарт
                    </h1>
                </Col>
            </Row>
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