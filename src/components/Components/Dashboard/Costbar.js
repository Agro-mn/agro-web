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
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

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

  const labels = ['Үрэлгээ', 'Арчилгаа','Хураалт','Уринш'];
  
 const data = {
    labels,
    datasets: [
      {
        label: '2024 он',
        data: [100, 200, 300, 400], // Replace with your static or dynamic data
        backgroundColor: [
          '#4DB3D3',
          
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
        label: '2025 он',
        data: [150, 250, 350, 450], // Replace with your static or dynamic data
        backgroundColor: '#F4A942',
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
        <DatePicker
          picker="year"
          size="large"
          value={moment()} // Defaults to current year
        />
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Bar options={options} data={data} />
      </Col>
    </Row>
  );
};
export default Costbar;