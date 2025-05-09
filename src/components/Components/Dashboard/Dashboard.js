import { Col, Row } from 'antd';
import React from 'react';
import { Bar, Column, Pie } from '@ant-design/plots';
function Dashboard() {
  const data = [
    {
      name: "Тарихийн өмнөх бодис цацалт",
      month: "3",
      performance: 40, // Converted to percentage
    },
    {
      name: "Тарихийн өмнөх бодис цацалт",
      month: "4",
      performance: 50, // Converted to percentage
    },
    {
      name: "Тарихийн өмнөх бодис цацалт",
      month: "5",
      performance: 60, // Converted to percentage
    },
    {
      name: "Тарихийн өмнөх бодис цацалт",
      month: "6",
      performance: 70, // Converted to percentage
    },
    {
      name: "Үрcэлгээ",
      month: "4",
      performance: 45, // Converted to percentage
    },
    {
      name: "Үрcэлгээ",
      month: "5",
      performance: 55, // Converted to percentage
    },
    {
      name: "Үрcэлгээ",
      month: "6",
      performance: 65, // Converted to percentage
    },
    {
      name: "Хураалт",
      month: "4",
      performance: 48, // Converted to percentage
    },
    {
      name: "Хураалт",
      month: "5",
      performance: 58, // Converted to percentage
    },
    {
      name: "Хураалт",
      month: "6",
      performance: 68, // Converted to percentage
    },
  ];

  const config = {
    data: data,
    xField: 'month',
    yField: 'performance',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
    onReady: ({ chart }) => {
      try {
        chart.on('afterrender', () => {
          chart.emit('legend:filter', {
            data: { channel: 'color', values: ['Хураалт','Тарихийн өмнөх бодис цацалт','Үрcэлгээ'] },
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
  };

  return (
    <Row>
      <Col span={24}>
       <Column {...config} />;
      </Col>
      <Col span={24}>
       <Pie {...config} />;
      </Col>
      <Col span={24}>
       <Bar {...config} />;
      </Col>
    </Row>
  );
};
export default Dashboard;