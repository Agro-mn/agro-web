import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import {
  
  ShoppingOutlined,
  ControlOutlined,
  AuditOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const data = [
  {
    icon: <ShoppingOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
    title: 'Үр тариа',
    description: 'Ухаалгаар ургацаа удирд',
  },
  {
    icon: <ShoppingOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
    title: 'Хүнсний ногоо',
    description: 'Таны тарьсан ногоо таны гарт',
  },
  {
    icon: <ControlOutlined style={{ fontSize: 32, color: '#faad14' }} />,
    title: 'Хүлэмжийн ногоо',
    description: 'Хүлэмжийн ногоог хүссэнээрээ хяна',
  },
  {
    icon: <AuditOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
    title: 'Мал аж ахуй',
    description: 'Мал аж ахуйгаа ухаалгаар бүртгэ, ашиг шимээ хүрт',
  },
];

const DirectionPage = () => (
  <div style={{ padding: '0px' }}>
    <Row gutter={[24, 24]} justify="center">
      {data.map((item, index) => (
        <Col xs={24} sm={12} md={6} key={index}>
          <Card
            hoverable
            style={{
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ marginBottom: 0 }}>{item.icon}</div>
            <Title level={5}>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default DirectionPage;
