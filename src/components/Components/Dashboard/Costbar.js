import { Button, Col, DatePicker, Row } from 'antd';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import { useState } from 'react';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);
function Costbar() {
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      
    },
  };

 
  const [dateRange, setDateRange] = useState([moment().subtract(5, 'years'), moment()]);
const labels = Array.from(
  { length: dateRange[1].year() - dateRange[0].year() + 1 },
  (_, i) => (dateRange[0].year() + i).toString()
);
const categories = [
  { name: 'Үрэлгээ', costs: [300, 235, 545, 235, 656, 332, 112, 49, 45] },
  { name: 'Арчилгаа', costs: [200, 150, 400, 300, 500, 250, 100, 60, 50] },
  { name: 'Хураалт', costs: [400, 300, 600, 500, 700, 350, 200, 80, 70] },
  { name: 'Уринш', costs: [250, 180, 450, 320, 600, 280, 150, 70, 60] },
];
const baseColors = [
  "#F4A942", "#fbcc8b", // Рапс
  "#EB69BC", "#e99fce", // Арвай
  "#4DB3D3", "#8cc3d4", // Улаан буудай
  "#9984DB", "#bdb2dd", // Ногоон тэжээл
];
const totalCosts = labels.map((_, index) =>
  categories.reduce((sum, category) => sum + (category.costs[index] || 0), 0)
);
const data = {
  labels: labels,
  datasets: [
    ...categories.map((cat) => ({
      label: cat.name,
      data: labels.map((_, index) => cat.costs[index]),
      backgroundColor: ['#4DB3D3'],
      borderColor: baseColors,
    })),
    {
      label: 'Нийт', // Total dataset
      data: totalCosts,
      backgroundColor: 'rgba(255, 99, 132, 0.5)', // Distinct color for total
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      type: 'line', // Display as a line chart
    },
  ],
};
  return (
    <Row gutter={[36, 16]} >
      <Col span={24} >
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type="primary" size="large" ghost style={{ border: 0, fontWeight:'bold' }}>
        Нэгж талбайд гарсан зардлын харьцуулалт
        </Button>
        <DatePicker.RangePicker
          picker="year"
          value={dateRange}
          onChange={(dates) => setDateRange(dates)}
        />
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Line options={options} data={data} />;
      </Col>
    </Row>
  );
};
export default Costbar;