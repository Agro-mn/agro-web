import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import carrot from '../../../assets/icons/carrot.png';  
import wheat from '../../../assets/icons/wheat-awn.png';
import cows from '../../../assets/icons/cow-alt.png';
import tomat from '../../../assets/icons/tomato.png';


const { Title, Paragraph } = Typography;

const data = [
  {
    icon: wheat,
    title: 'Үр тариа',
    description: 'Ухаалгаар ургацаа удирд',
  },
  {
    icon: carrot,
    title: 'Хүнсний ногоо',
    description: 'Таны тарьсан ногоо таны гарт',
  },
  {
    icon: tomat,
    title: 'Хүлэмжийн ногоо',
    description: 'Хүлэмжийн ногоог хүссэнээрээ хяна',
  },
  {
    icon: cows,
    title: 'Мал аж ахуй',
    description: 'Мал аж ахуйгаа ухаалгаар бүртгэ, ашиг шимээ хүрт',
  },
];

const DirectionPage = () => (
  <div style={{ padding: '0px', height: '100%' }}>
    <Row gutter={[24, 24]} justify="center">
      {data.map((item, index) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <Card
            hoverable
            style={{
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          >
            <div style={{ marginBottom: 0, height: "20px"}}>
              <img src={item.icon} alt={item.title} style={{ width: '35px', height: '35px', margin: '10px' }} />
            </div>
            <Title level={5} style={{fontFamily: "var(--main-font)"}}>{item.title}</Title>
            <Paragraph style={{fontFamily: "var(--main-font)"}}>{item.description}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default DirectionPage;
