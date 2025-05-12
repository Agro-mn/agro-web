import React from 'react';
import { Row, Col } from 'antd';

const HomeContact = () => {
  const style = {
    width: '70vw',
    height: `30vh`,
    background: '#efd643',
    color: '#272826',
    fontWeight: 'bold',
    borderRadius: '20px',
    padding: ' 2rem 4rem',
    fontFamily: "var(--main-font)",
    marginBottom: '2rem'
  };
  const headerStyle = {
    fontSize: 'x-large',
    fontWeight: 'bold',
    color: '#272826',
    fontFamily: "var(--main-font)",
    marginBottom: '1rem',
  };
  const mainStyle = {
    width: '80vw',
    height: `30vh`,
  };
  return (
      <div style={mainStyle}>
        <Row gutter={[20,20]}>
          <Col span={24} style={headerStyle}>
            <span style={{borderBottom: '3px solid #efd643'}}>Холбоо барих</span>
          </Col>
          <div style={style}>

          </div>

        </Row>
      </div>
  );
};

export default HomeContact;