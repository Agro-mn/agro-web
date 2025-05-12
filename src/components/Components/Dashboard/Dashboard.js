import { Col, Row } from 'antd';

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
import { Bar, Line, Pie, PolarArea } from 'react-chartjs-2';

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
function Dashboard() {
  // const data = [
  //   {
  //     name: "Тарихийн өмнөх бодис цацалт",
  //     month: "3",
  //     performance: 40, // Converted to percentage
  //   },
  //   {
  //     name: "Тарихийн өмнөх бодис цацалт",
  //     month: "4",
  //     performance: 50, // Converted to percentage
  //   },
  //   {
  //     name: "Тарихийн өмнөх бодис цацалт",
  //     month: "5",
  //     performance: 60, // Converted to percentage
  //   },
  //   {
  //     name: "Тарихийн өмнөх бодис цацалт",
  //     month: "6",
  //     performance: 70, // Converted to percentage
  //   },
  //   {
  //     name: "Үрcэлгээ",
  //     month: "4",
  //     performance: 45, // Converted to percentage
  //   },
  //   {
  //     name: "Үрcэлгээ",
  //     month: "5",
  //     performance: 55, // Converted to percentage
  //   },
  //   {
  //     name: "Үрcэлгээ",
  //     month: "6",
  //     performance: 65, // Converted to percentage
  //   },
  //   {
  //     name: "Хураалт",
  //     month: "4",
  //     performance: 48, // Converted to percentage
  //   },
  //   {
  //     name: "Хураалт",
  //     month: "5",
  //     performance: 58, // Converted to percentage
  //   },
  //   {
  //     name: "Хураалт",
  //     month: "6",
  //     performance: 68, // Converted to percentage
  //   },
  // ];
 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
 const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 200, 300, 400, 500, 600, 700], // Replace with your static or dynamic data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
      {
        label: 'Dataset 2',
        data: [150, 250, 350, 450, 550, 650, 750], // Replace with your static or dynamic data
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <Row>
      <Col span={12}>
      <Bar options={options} data={data} />
      </Col>
      <Col span={12}>
      <Line options={options} data={data} />
      </Col>
      <Col span={12}>
      <Pie data={data} />
      </Col>
      <Col span={12}>
      <PolarArea data={data} />
      </Col>
    </Row>
  );
};
export default Dashboard;