import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import argoMain from '../../assets/img/argoMain.png';

const HomeImage = () => {

  useEffect(() => {
  }, []);

  return (
    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
      <img src={argoMain} style={{ height: '20rem' }} alt='logo' />
      <img src={argoMain} style={{ height: '20rem' }} alt='logo' />
      <img src={argoMain} style={{ height: '20rem' }} alt='logo' />
      <img src={argoMain} style={{ height: '20rem' }} alt='logo' />
    </Carousel>
  );
};

export default HomeImage;