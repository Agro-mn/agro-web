import React from "react";
import { Descriptions } from "antd";
import { EnvironmentOutlined, CalendarOutlined, ClockCircleOutlined, TeamOutlined, EditOutlined, RadarChartOutlined } from "@ant-design/icons";

const FarmInfo = ({item, product}) => {
  return (
    <div style={{ background: "#fff", padding: 10, borderRadius: 8 }}>
        {product.data.map((data, index) => <Descriptions
        title={
            index === 0 ?
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{...item.color}} >{item.category}</div>
            <div > <RadarChartOutlined style={{ color: item.color.color }} />   {product.name}</div>
          </div>
          : <></>
        }
        column={2}
        bordered
        size="small"
      >
        <Descriptions.Item span={2} label={<EnvironmentOutlined />}>
          Сэлэнгэ аймаг, Цагааннуур сум, {data.field}
        </Descriptions.Item>

        <Descriptions.Item span={1} label={<CalendarOutlined />}>
          {data.balance}
        </Descriptions.Item>

        <Descriptions.Item span={1} label={<ClockCircleOutlined />}>
        {data.performance}
        </Descriptions.Item>

        <Descriptions.Item span={2} label={<TeamOutlined />}>
          Бат-Эрдэнэ
        </Descriptions.Item>

        <Descriptions.Item span={2} label={<EditOutlined />}>
          Ургамал хамгаалах бодис: Раунд-ап 1га-д 3 литр | Нийт 810 литр<br />
          Дизель түлш 1га-д 2 литр | Нийт 540 литр
        </Descriptions.Item>

      </Descriptions>
        )}
    </div>
  );
};

export default FarmInfo;