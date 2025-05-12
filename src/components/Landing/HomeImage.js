import React, { useEffect } from 'react';
import { Flex } from 'antd';
import aut1 from '../../assets/img/james-baltz-_pBBkarmFTs-unsplash.jpg';


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