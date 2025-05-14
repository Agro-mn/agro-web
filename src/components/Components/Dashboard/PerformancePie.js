import React, { useState } from "react";
import { Button, Col, DatePicker, Row, Table, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
);

function PerformancePie() {

  const dataSource = [
    {
      key: "1",
      product: "Нийт",
      planned: 5000,
      executed: 1000,
      change: 3.6,
      isIncrease: true,
      color: "#F8E7F8",
      colorBox: "#ccc",
    },
    {
      key: "2",
      product: "Рапс",
      planned: 3000,
      executed: 1000,
      change: 3.6,
      isIncrease: true,
      colorBox: "#F4A942",
    },
    {
      key: "3",
      product: "Арвай",
      planned: 2000,
      executed: 1000,
      change: 1.5,
      isIncrease: false,
      colorBox: "#EB69BC",
    },
    {
      key: "4",
      product: "Улаан буудай",
      planned: 2000,
      executed: 1000,
      change: 1.5,
      isIncrease: false,
      colorBox: "#4DB3D3",
    },
    {
      key: "5",
      product: "Ногоон тэжээл",
      planned: 2000,
      executed: 1000,
      change: 1.5,
      isIncrease: false,
      colorBox: "#9984DB",
    },
  ];
  const doughnutData = {
    labels: dataSource.filter((item) => item.key !== "1").map((item) => [`${item.product} гүйцэтгэл`, `${item.product} дутуу`]).flat(), // Use product names as labels
    datasets: [
      {
        label: "Төлөвлөсөн",
        data: dataSource.filter((item) => item.key !== "1").map((item) => [item.executed, item.planned - item.executed]).flat(), // Use planned values
        backgroundColor: ["#F4A942", "#fbcc8b", "#EB69BC", "#e99fce", "#4DB3D3", "#8cc3d4", "#9984DB", "#bdb2dd"], // Colors for planned
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // Enable legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const dataIndex = tooltipItem.dataIndex;
            const value = dataset.data[dataIndex];
            return ` ${value} га`; // Customize tooltip label
          },
        },
      },
    },
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: function (chart) {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 200).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#666";

      const totalPlanned = dataSource.reduce((sum, item) => sum + item.planned, 0);
      const totalExecuted = dataSource.reduce((sum, item) => sum + item.executed, 0);
      const percentage = ((totalExecuted / totalPlanned) * 100).toFixed(1);

      const text = `Нийт ${percentage}%`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  
  // Column definitions
  const columns = [
    {
      title: "Бүтээгдэхүүн",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "2px",
              backgroundColor: record.colorBox,
            }}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Төлөвлөсөн /Талбай/",
      dataIndex: "planned",
      key: "planned",
    },
    {
      title: "Гүйцэтгэсэн /Талбай/",
      dataIndex: "executed",
      key: "executed",
    },
    {
      title: "Өмнөх онтой харьцуулахад",
      dataIndex: "change",
      key: "change",
      render: (value, record) => (
        <Tag color={record.isIncrease ? "green" : "red"}>
          {record.isIncrease ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {value}%
        </Tag>
      ),
    },
  ];
  
  const [selectedRowKey, setSelectedRowKey] = useState(null);

  const rowSelection = {
    type: "radio",
    columnWidth: 40,
    selectedRowKeys: selectedRowKey ? [selectedRowKey] : [],
    onChange: (selectedRowKeys) => {
      setSelectedRowKey(selectedRowKeys[0]);
    },
  };
 
  return (
    <Row gutter={[36, 16]} >
      <Col span={24} >
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" size="large" ghost style={{ border: 0, fontWeight:'bold' }}>
          Төлөвлөгөө, гүйцэтгэл /бүтээгдэхүүн/
        </Button>
        <DatePicker
          picker="year"
          size="large"
          value={moment()} // Defaults to current year
        />
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={10} xl={7} xxl={7}>
    <Doughnut data={doughnutData} options={options} plugins={[centerTextPlugin]} />
    </Col>
    <Col xs={24} sm={24} md={24} lg={14} xl={17} xxl={17}>
    <Table
        size="small"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowSelection={rowSelection}
        scroll={{ y: 'auto' }}
      />
    </Col>
    </Row>)
};
export default PerformancePie;