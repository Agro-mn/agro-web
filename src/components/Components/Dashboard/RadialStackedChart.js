import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Button, Col, DatePicker, Row } from "antd";
import moment from "moment";
import ProgressCardGrid from "./ProgressCardGrid";

ChartJS.register(ArcElement, Tooltip);

// Data values
const values = [80, 70, 60, 50];
const colors = ["#8A2BE2", "#B87333", "#4FC3F7", "#FF7043"];
const cutouts = ["80%", "65%", "50%", "35%"];

const generateDataset = (value, color, cutout) => ({
  data: [value, 100 - value],
  backgroundColor: [color, "transparent"],
  borderWidth: 0,
  cutout,
  circumference: 270,
  rotation: 225, // rotate to top
});

const RadialStackedChart = () => {
  const datasets = values.map((v, i) => generateDataset(v, colors[i], cutouts[i]));

  return (
    <Row gutter={[36, 16]} >
    <Col span={24} >
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <Button type="primary" size="large" ghost style={{ border: 0, fontWeight:'bold' }}>
      Төлөвлөгөө, гүйцэтгэл /Технологит ажил/
      </Button>
      <DatePicker
        picker="month"
        size="large"
        value={moment()} // Defaults to current year
      />
      </Row>
    </Col>
    <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
      <Doughnut
        data={{ datasets }}
        options={{
          plugins: {
            tooltip: { enabled: true },
            legend: { display: true },
          },
        }}
      />
    </Col>
    <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
    <ProgressCardGrid/>
    </Col>
    </Row>
  );
};

export default RadialStackedChart;
