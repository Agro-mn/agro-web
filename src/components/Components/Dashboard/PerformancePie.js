import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Button, Col, DatePicker, Row } from 'antd';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const ds = dataSource.find((ds) => ds.product === tooltipItem.label) 
          const dset = dataSet.find((ds) => ds.value === tooltipItem.dataset.stack) 
          return `${tooltipItem.dataset?.label  ?? ''}: ${ds.planned + dset.extra + dset.extra} / ${ds.executed + dset.extra} `; // Customize the label template
        },
      },
    },
    legend: {
      display: true,
      position: 'top',
    },
  },
  responsive: true,
  interaction: {
    // mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const dataSet = [
  {
    label: "Үрэлгээ",
    value: "#8A2BE2",
    extra: 600,
    subColor: "#b75eff", // Lightened from #8A2BE2
  },
  {
    label: "Арчилгаа",
    value: "#B87333",
    extra: 1200,
    subColor: "#eaa966", // Lightened from #B87333
  },
  {
    label: "Хураалт",
    value: "#4FC3F7",
    extra: 800,
    subColor: "#94dbfb", // Lightened from #4FC3F7
  },
  {
    label: "Уринш",
    value: "#FF7043",
    extra: 2000,
    subColor: "#ffa481", // Lightened from #FF7043
  },
];

const dataSource = [
  // { key: "1", product: "Нийт", planned: 5000, executed: 1000 },
  { key: "2", product: "Рапс", planned: 3000, executed: 1000 },
  { key: "3", product: "Арвай", planned: 2000, executed: 1000 },
  { key: "4", product: "Улаан буудай", planned: 2000, executed: 1000 },
  { key: "5", product: "Ногоон тэжээл", planned: 2000, executed: 1000 },
];
export const data = {
  labels: dataSource.map((ds) => ds.product),
  datasets: dataSet.flatMap((dset) => (
   [{
    label: dset.label,
    data: dataSource.flatMap((ds) => ds.executed + dset.extra),
    backgroundColor: dset.value,
    stack: dset.value,
  },{
    label: dset.label,
    data: dataSource.flatMap((ds) => ds.planned - ds.executed + dset.extra),
    backgroundColor: dset.subColor,
    stack: dset.value,
  }]
))
};

 function PerformancePie() {
  return <Row gutter={[36, 16]} >
  <Col span={24} >
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
    <Button type="primary" size="large" ghost style={{ border: 0, fontWeight:'bold' }}>
    Төлөвлөгөө, гүйцэтгэл /бүтээгдэхүүн/
    </Button>
    <DatePicker
      picker="month"
      size="large"
      value={moment()} // Defaults to current year
    />
    </Row>
  </Col> 
 
  <Col span={24} >
  <Bar options={options} data={data} />
  </Col>
  </Row>
}

export default PerformancePie;