import { useState } from 'react';
import { Col, Row, Tabs, Button, Card, Typography, Radio, Descriptions, DatePicker, Space, Popover } from 'antd';
import { LeftOutlined, RightOutlined, SunOutlined, CloudDownloadOutlined, AliwangwangOutlined, AlignLeftOutlined, CloudOutlined, CloudFilled, ThunderboltOutlined, CloudSyncOutlined, SearchOutlined, RadarChartOutlined, FlagOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import TimelinePage from './TimelinePage';
import FarmInfo from './FarmInfo';

const PerformanceList = () => {
  
  const [currTab, setCurrTab] = useState('performance');

  const tabItems = [
    {
      key: 'performance',
      label: 'Дэлгэрэнгүй гүйцэтгэл',
    },
    {
      key: 'totalPerformance',
      label: 'Нэгдсэн гүйцэтгэл',
    },
  ];

  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const onSelectChange = newSelectedRowKeys => {
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  // // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: onSelectChange,
  // };
  // const columns = [
  //   {
  //     title: 'Бүтээгдэхүүн',
  //     dataIndex: 'productType',
  //     key: 'productType',
  //   },
  //   {
  //     title: 'Технологит ажил',
  //     dataIndex: 'technology',
  //     key: 'technology',
  //   },
  //   {
  //     title: 'Талбайн хэмжээ',
  //     dataIndex: 'area',
  //     key: 'area',
  //   },
  //   {
  //     title: 'Эхлэх огноо',
  //     dataIndex: 'startDate',
  //     key: 'startDate',
  //   },
  //   {
  //     title: 'Дуусах огноо',
  //     dataIndex: 'endDate',
  //     key: 'endDate',
  //   },
  //   {
  //     title: 'Төлөв',
  //     dataIndex: 'status',
  //     key: 'status',
  //     render: (status) => {
  //       let color = 'green';
  //       if (status === 'Хянасан') color = 'blue';
  //       if (status === 'Цуцалсан') color = 'red';
  //       return <Badge color={color} text={status} />;
  //     },
  //   },
  //   {
  //     title: 'Үйлдэл',
  //     key: 'action',
  //     render: (_, record) => (
  //       <Space size="middle">
  //         {/* <Button icon={<EyeOutlined />} />
  //         <Button icon={<EditOutlined />} />
  //         <Button icon={<DeleteOutlined />} danger /> */}
  //       </Space>
  //     ),
  //   },
  // ];

  const tsatsalt = {
    id: 1,
    category: 'Тарихийн өмнөх бодис цацалт',
    color: { color: '#936ee9', backgroundColor: '#ccc1f1', cardBackgroundColor: '#e1d6f1' },
    products: [
      {
        name: 'УлаанБуудай',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      {
        name: 'Рапс',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      }
    ]
  }
  const urselgee = {
    id: 2,
    category: 'Үрэлгээ',
    color: { color: '#28a1d9', backgroundColor: '#afdaed', cardBackgroundColor: '#cde3f9' },
    products: [
      {
        name: 'УлаанБуудай',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      {
        name: 'Рапс',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      }
    ]
  }
  const archilgaa = {
    id: 3,
    category: 'Арчилгаа',
    color: { color: '#ff7447', backgroundColor: '#ebc7bc', cardBackgroundColor: '#e7e1df' },
    products: [
      {
        name: 'УлаанБуудай',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      {
        name: 'Рапс',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      }
    ]
  }
  const huraalt = {
    id: 4,
    category: 'Хураалт',
    color: { color: '#cc7429', backgroundColor: '#f3decc', cardBackgroundColor: '#efebe6' },
    products: [
      {
        name: 'УлаанБуудай',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      {
        name: 'Рапс',
        data: [
          { field: 'Чандагтай', balance: '100 га', performance: '50 га' },
          { field: 'Төвийн урд', balance: '50 га', performance: '20 га' }
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      }
    ]
  }
  const categories = [
    {
      day: "2025-05-01",
      weekday: "Пүрэв",
      monthAndDay: "05-01",
      temperature: "15°C",
      condition: "Нартай",
      icon: <SunOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "10 км/ц",
      humidity: "60%",
      data: [tsatsalt, urselgee, archilgaa, huraalt]
    },
    {
      day: "2025-05-02",
      weekday: "Баасан",
      monthAndDay: "05-02",
      temperature: "18°C",
      condition: "Хэсэгчлэн үүлэрхэг",
      icon: <CloudOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "12 км/ц",
      humidity: "55%",
      data: [tsatsalt, urselgee, archilgaa,]
    },
    {
      day: "2025-05-03",
      weekday: "Бямба",
      monthAndDay: "05-03",
      temperature: "20°C",
      condition: "Үүлэрхэг",
      icon: <CloudFilled style={{ fontSize: '3rem' }} />,
      windSpeed: "8 км/ц",
      humidity: "50%",
      data: [tsatsalt, archilgaa,]
    },
    {
      day: "2025-05-04",
      weekday: "Ням",
      monthAndDay: "05-04",
      temperature: "22°C",
      condition: "Бороо орно",
      icon: <CloudDownloadOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "15 км/ц",
      humidity: "70%",
      data: [urselgee, archilgaa, huraalt]
    },
    {
      day: "2025-05-05",
      weekday: "Даваа",
      monthAndDay: "05-05",
      temperature: "19°C",
      condition: "Аянга цахилгаантай",
      icon: <ThunderboltOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "20 км/ц",
      humidity: "80%",
      data: [tsatsalt, huraalt]
    },
    {
      day: "2025-05-06",
      weekday: "Мягмар",
      monthAndDay: "05-06",
      temperature: "16°C",
      condition: "Салхитай",
      icon: <AlignLeftOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "25 км/ц",
      humidity: "65%",
      data: [huraalt]
    },
    {
      day: "2025-05-07",
      weekday: "Лхагва",
      monthAndDay: "05-07",
      temperature: "14°C",
      condition: "Цас орно",
      icon: <CloudSyncOutlined style={{ fontSize: '3rem' }} />,
      windSpeed: "10 км/ц",
      humidity: "75%",
      data: [tsatsalt, urselgee, archilgaa]
    },
  ];


  const renderCards = (category) => {
    return category.data.map((item) => (
      <Card
        key={item.id}
        size='small'
        style={{
          marginBottom: '16px',
          backgroundColor: item.color.cardBackgroundColor,
        }}
      >
        <Row gutter={[16, 16]} >
          <Col span={24} style={{
            textAlign: 'center', fontWeight: 'bold', padding: '8px',
            ...item.color
          }}>
            {item.category}
          </Col>
          {item.products.map((product, index) => (
            <Col span={24} key={index}>
              <Popover content={<FarmInfo item={item} product={product}/>} >
              <Card style={{ width: '100%', textAlign: 'left', border: `2px solid ${item.color.color}` }} size='small'
              title={<div style={{ color: 'gray' }}> <RadarChartOutlined style={{ color: item.color.color }} />   {product.name}</div>}
            >
              <Space size={0} style={{ width: '100%', justifyContent: 'space-between' }}>
                <Button type="text" icon={<FlagOutlined />} size='small'>
                  {product.totalBalance} / {product.totalPerformance}
                </Button>
              </Space>
              <Space size={0} style={{ width: '100%', marginTop : 16, justifyContent: 'left' }}>
                <Button type="primary" ghost shape='round' icon={<UserOutlined />} size='small'>
                  Бат-Эрдэнэ
                </Button>
              </Space>
            </Card>
          </Popover>
          </Col>
          ))}
        </Row>
      </Card>

    ));
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Tabs
          items={tabItems}
          activeKey={currTab}
          onChange={(value) => setCurrTab(value)}
        />
      </Col>
      {currTab === 'performance' &&
        <Col span={24}>
          <Row gutter={[16, 16]} align="middle">
            <Col span={6}>
              <Button type="primary" ghost shape='round'>Өнөөдөр</Button>
            </Col>
            <Col span={12}>
              <Row align={'center'} gutter={[16, 16]}>
                <Col >
                  <Button type="primary" ghost shape='round' icon={<LeftOutlined />}></Button>
                </Col>
                <Col justifyContent={'center'}  >
                  <Typography.Text style={{ fontSize: 'large' }}>{"2025-05-02 -> 2025-05-07"}</Typography.Text>
                </Col>
                <Col >
                  <Button type="primary" ghost shape='round' icon={<RightOutlined />}></Button>
                </Col>
              </Row>
            </Col>
            <Col span={6} >
              <Row align={'end'} gutter={[16, 16]}>
                <Col >
                  <Radio.Group defaultValue="c" buttonStyle="outline">
                    <Radio.Button value="a" style={{ backgroundColor: 'transparent', borderRadius: '20px 0 0 20px' }}>Он</Radio.Button>
                    <Radio.Button value="b" style={{ backgroundColor: 'transparent', borderRadius: '0' }}>Сар</Radio.Button>
                    <Radio.Button value="c" style={{ backgroundColor: 'transparent', borderRadius: '0 20px 20px 0' }}>Өдөр</Radio.Button>
                  </Radio.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      }
      {currTab === 'performance' &&
        <Col span={24}>
          <Descriptions bordered
            column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 7, xxl: 7 }}
            size='small' layout="vertical"
          >
            {categories.map((category) => (
              <Descriptions.Item key={category.day}
                label={
                  <Row style={{ margin: '1rem' }} >
                    <Col span={24} style={{ fontWeight: 'bold', }}  >
                      {category.weekday}  {category.monthAndDay}
                    </Col>
                    <Col span={24} >
                      <Row justify={'space-between'} align='middle' >
                        <Col span={12} style={{ textAlign: 'center' }}>
                          {category.icon}
                        </Col>
                        <Col span={12}>
                          <Row>
                            <Col span={24} align='right' style={{ fontWeight: 'bold' }}>
                              {category.temperature}
                            </Col>
                            <Col span={24} align='right' >
                              {category.windSpeed}
                            </Col>
                            <Col span={24} align='right' >
                              <AliwangwangOutlined /> {category.humidity}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24} style={{ fontSize: 'small', textAlign: 'center' }}>
                      {category.condition}
                    </Col>
                  </Row>
                }
                style={{ alignContent: 'baseline', height: '100%', padding: '0px' }}
              >
                {renderCards(category)}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Col>
      }
      {currTab === 'totalPerformance' && (
        <Col span={24}>
          <Row gutter={[16, 0]} align="middle" justify={'end'}>
            <Col>
              <DatePicker.RangePicker
                size='large'
                picker="month"
                defaultValue={[moment().month(1), moment().month(12)]}
                style={{ width: 300 }}
              />
            </Col>
            <Col>
              <Button type='primary' size='large' icon={<SearchOutlined />} />
            </Col>
          </Row>
        </Col>)}
      {currTab === 'totalPerformance' && (
        <Col span={24}>
          <TimelinePage />
        </Col>)}

    </Row>
  );
};

export default PerformanceList;