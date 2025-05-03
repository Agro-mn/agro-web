import React, { useEffect } from 'react';
import { Card, Row, Col, Divider, Flex } from 'antd';
import minCloud from '../../assets/img/minCloud.png';
import minCloudNigth from '../../assets/img/minCloudNigth.png';
import testIcon from '../../assets/img/testIcon.svg';

const WeatherPage = () => {
  // const [city, setCity] = useState('Ulaanbaatar'); // Default city
  // const [weather, setWeather] = useState([]);

  // const fetchWeather = async () => {
  //   const API_KEY = '5f6db829e4b3bf40ac6a53ef1b352f5d'; //8tVPT35LPhpIa57   5f6db829e4b3bf40ac6a53ef1b352f5d
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  //   try {
  //     const response = await axios.get(url);
  //     setWeather(response.data);
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //   }
  // };
  const testData = [
    {
      city: "Улаанбаатар",
      dayOfYear: "2025-04-24 (ПҮР)",
      day: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      },
      nigth: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      }
    }, {
      city: "Улаанбаатар",
      dayOfYear: "2025-04-24 (ПҮР)",
      day: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      },
      nigth: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      }
    }, {
      city: "Улаанбаатар",
      dayOfYear: "2025-04-24 (ПҮР)",
      day: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      },
      nigth: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      }
    }, {
      city: "Улаанбаатар",
      dayOfYear: "2025-04-24 (ПҮР)",
      day: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      },
      nigth: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      }
    }, {
      city: "Улаанбаатар",
      dayOfYear: "2025-04-24 (ПҮР)",
      day: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      },
      nigth: {
        Temperature: 14,
        FeelTemp: 10,
        WindSpeed: 7,
        PoPrecipitation: 0.05,
        Description: "Багавтар үүлтэй"
      }
    },
  ]
  useEffect(() => {
    // fetchWeather();
    // setWeather(testData);
  }, []);

  return (
    <Flex gap={16}>
      {testData.map((item, index) => (
        <Card
          key={index}
          title={item.city}
          extra={item.dayOfYear}
          size='small'
          style={{
            width: "16rem",
          }}
        >
          <Row>
            <Col span={5}>
              <Flex justify='center' vertical>
                <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}>Шөнө</Flex>
                <Flex justify='center' style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{`${item.day.Temperature}°`}</Flex>
                <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}>{`${item.day.WindSpeed} м/с`}</Flex>
              </Flex>
            </Col>
            <Col span={7}>
              <Flex align='center' justify='center' style={{ height: '100%' }}>
                <div style={{ fontSize: 'large' }}>
                  <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}><img src={testIcon} style={{ height: '1rem' }} alt='logo' />{item.day.FeelTemp}</Flex>
                  <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}><img src={testIcon} style={{ height: '1rem' }} alt='logo' />{item.day.PoPrecipitation * 100}%</Flex>
                </div>
              </Flex>
            </Col>
            <Col span={12}>
              <Flex align='center' justify='right'>
                <img src={minCloudNigth} alt='logo' style={{ width: '7rem' }} />
              </Flex>
            </Col>
          </Row>
          <Divider style={{ margin: '0' }} />
          <Row>
            <Col span={5}>
              <Flex justify='center' vertical>
                <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}>Өдөр</Flex>
                <Flex justify='center' style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{`${item.day.Temperature}°`}</Flex>
                <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}>{`${item.day.WindSpeed} м/с`}</Flex>
              </Flex>
            </Col>
            <Col span={7}>
              <Flex align='center' justify='center' style={{ height: '100%' }}>
                <div style={{ fontSize: 'large' }}>
                  <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}><img src={testIcon} style={{ height: '1rem' }} alt='logo' />{item.day.FeelTemp}</Flex>
                  <Flex justify='center' style={{ fontSize: 'large', fontWeight: 'bold' }}><img src={testIcon} style={{ height: '1rem' }} alt='logo' />{item.day.PoPrecipitation * 100}%</Flex>
                </div>
              </Flex>
            </Col>
            <Col span={12}>
              <Flex align='center' justify='center'>
                <img src={minCloud} alt='logo' style={{ width: '7rem' }} />
              </Flex>
            </Col>
          </Row>
        </Card>
      ))}
    </Flex>
  );
};

export default WeatherPage;