import React from "react";
import { Row, Col, Progress, Typography } from "antd";
import {
  WalletOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const data = [
  {
    title: "Үрэлгээ",
    icon: <WalletOutlined />,
    color: "#8A2BE2",
    value: 200,
    total: 500,
  },
  {
    title: "Арчилгаа",
    icon: <RocketOutlined />,
    color: "#B87333",
    value: 200,
    total: 500,
  },
  {
    title: "Хураалт",
    icon: <ShoppingCartOutlined />,
    color: "#4FC3F7",
    value: 200,
    total: 500,
  },
  {
    title: "Уринш",
    icon: <ToolOutlined />,
    color: "#FF7043",
    value: 200,
    total: 500,
  },
];

const ActivityCard = ({ title, icon, color, value, total }) => {
  const percent = Math.round((value / total) * 100);

  return (
    <div
      style={{
        background: "#fff",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <div
          style={{
            backgroundColor: color,
            color: "#fff",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            fontSize: 16,
            marginRight: 10,
          }}
        >
          {icon}
        </div>
        <Text type="secondary">{title}</Text>
      </div>
      <div style={{ fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>
        {value}/{total}га
      </div>
      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={color}
        trailColor="#e8e8e8"
      />
    </div>
  );
};

const ProgressCardGrid = () => {
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col xs={24} sm={12} md={12} lg={12} xl={12} key={index}>
          <ActivityCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProgressCardGrid;
