import React, { useState } from 'react';
import { Col, Row, Space, Table, Tabs, Tag, Button, Select, Input, Card, Typography, Menu, Segmented, Badge, ConfigProvider, Radio, Descriptions, Calendar } from 'antd';
import {  LeftOutlined, RightOutlined, SunOutlined, CloudDownloadOutlined, AliwangwangOutlined, AlignLeftOutlined, CloudOutlined, CloudFilled, ThunderboltOutlined, CloudSyncOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;

const PerformanceList = () => {
  const data = [
    {
      key: '1',
      productType: 'УлаанБуудайн',
      technology: 'Тарианы эмнэл бодис цацалт',
      area: '100га',
      startDate: '2025-01-01',
      endDate: '2025-01-01',
      status: 'Бүртгсэн',
    },
    {
      key: '2',
      productType: 'Panc',
      technology: 'Үрcэлгээ',
      area: '100га',
      startDate: '2025-01-01',
      endDate: '2025-01-01',
      status: 'Баталсан',
    },
    {
      key: '3',
      productType: 'Corn',
      technology: 'Planting',
      area: '200га',
      startDate: '2025-02-01',
      endDate: '2025-02-15',
      status: 'Хянасан',
    },
    {
      key: '4',
      productType: 'Rice',
      technology: 'Irrigation',
      area: '150га',
      startDate: '2025-03-01',
      endDate: '2025-03-10',
      status: 'Цуцалсан',
    },
    {
      key: '5',
      productType: 'Soybean',
      technology: 'Harvesting',
      area: '300га',
      startDate: '2025-04-01',
      endDate: '2025-04-20',
      status: 'Баталсан',
    },
    {
      key: '6',
      productType: 'Barley',
      technology: 'Fertilizing',
      area: '120га',
      startDate: '2025-05-01',
      endDate: '2025-05-10',
      status: 'Бүртгсэн',
    },
    {
      key: '7',
      productType: 'Wheat',
      technology: 'Weeding',
      area: '180га',
      startDate: '2025-06-01',
      endDate: '2025-06-15',
      status: 'Хянасан',
    },
    {
      key: '8',
      productType: 'Potato',
      technology: 'Spraying',
      area: '250га',
      startDate: '2025-07-01',
      endDate: '2025-07-20',
      status: 'Цуцалсан',
    },
    {
      key: '9',
      productType: 'Tomato',
      technology: 'Pruning',
      area: '80га',
      startDate: '2025-08-01',
      endDate: '2025-08-10',
      status: 'Баталсан',
    },
    {
      key: '10',
      productType: 'Cucumber',
      technology: 'Harvesting',
      area: '60га',
      startDate: '2025-09-01',
      endDate: '2025-09-10',
      status: 'Бүртгсэн',
    },
  ];

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

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: 'Бүтээгдэхүүн',
      dataIndex: 'productType',
      key: 'productType',
    },
    {
      title: 'Технологит ажил',
      dataIndex: 'technology',
      key: 'technology',
    },
    {
      title: 'Талбайн хэмжээ',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: 'Эхлэх огноо',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'Дуусах огноо',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Төлөв',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'green';
        if (status === 'Хянасан') color = 'blue';
        if (status === 'Цуцалсан') color = 'red';
        return <Badge color={color} text={status} />;
      },
    },
    {
      title: 'Үйлдэл',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} danger /> */}
        </Space>
      ),
    },
  ];

  const tsatsalt = {
    id: 1,
    category: 'Тарихийн өмнөх бодис цацалт',
    color: { color: '#936ee9', backgroundColor: '#ccc1f1', cardBackgroundColor: '#e1d6f1' },
    products: [
      { 
        name: 'УлаанБуудайн', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      { 
        name: 'Рапс', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га', 
      }
    ]
  }
  const urselgee = {
    id: 2,
    category: 'Үрcэлгээ',
    color: { color: '#28a1d9', backgroundColor: '#afdaed', cardBackgroundColor: '#cde3f9' },
    products: [
      { 
        name: 'УлаанБуудайн', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      { 
        name: 'Рапс', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
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
        name: 'УлаанБуудайн', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      { 
        name: 'Рапс', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
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
        name: 'УлаанБуудайн', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
        ],
        totalBalance: '150 га',
        totalPerformance: '70 га',
      },
      { 
        name: 'Рапс', 
        data: [
          {field: 'Чандагтай', balance:'100 га', performance: '50 га'},
          {field: 'Төвийн урд', balance:'50 га', performance: '20 га'}
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
      icon: <SunOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "10 км/ц",
      humidity: "60%",
      data:[tsatsalt, urselgee, archilgaa, huraalt]
    },
    {
      day: "2025-05-02",
      weekday: "Баасан",
      monthAndDay: "05-02",
      temperature: "18°C",
      condition: "Хэсэгчлэн үүлэрхэг",
      icon: <CloudOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "12 км/ц",
      humidity: "55%",
      data:[tsatsalt, urselgee, archilgaa,]
    },
    {
      day: "2025-05-03",
      weekday: "Бямба",
      monthAndDay: "05-03",
      temperature: "20°C",
      condition: "Үүлэрхэг",
      icon: <CloudFilled style={{fontSize: '3rem'}}/>,
      windSpeed: "8 км/ц",
      humidity: "50%",
      data:[tsatsalt, archilgaa,]
    },
    {
      day: "2025-05-04",
      weekday: "Ням",
      monthAndDay: "05-04",
      temperature: "22°C",
      condition: "Бороо орно",
      icon: <CloudDownloadOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "15 км/ц",
      humidity: "70%",
      data:[ urselgee, archilgaa, huraalt]
    },
    {
      day: "2025-05-05",
      weekday: "Даваа",
      monthAndDay: "05-05",
      temperature: "19°C",
      condition: "Аянга цахилгаантай",
      icon: <ThunderboltOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "20 км/ц",
      humidity: "80%",
      data:[tsatsalt, huraalt]
    },
    {
      day: "2025-05-06",
      weekday: "Мягмар",
      monthAndDay: "05-06",
      temperature: "16°C",
      condition: "Салхитай",
      icon: <AlignLeftOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "25 км/ц",
      humidity: "65%",
      data:[huraalt]
    },
    {
      day: "2025-05-07",
      weekday: "Лхагва",
      monthAndDay: "05-07",
      temperature: "14°C",
      condition: "Цас орно",
      icon: <CloudSyncOutlined style={{fontSize: '3rem'}}/>,
      windSpeed: "10 км/ц",
      humidity: "75%",
      data:[tsatsalt, urselgee, archilgaa]
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
                <Table 
                title={() => <>{product.name}</>}
                summary={() => (
                  <Table.Summary fixed>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}></Table.Summary.Cell>
                      <Table.Summary.Cell index={1}>{product.totalBalance}</Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>{product.totalPerformance}</Table.Summary.Cell>
                    </Table.Summary.Row>
                  </Table.Summary>
                )}
                size='small'
                pagination={false} bordered 
                dataSource={product.data} 
                rowKey="field"
                  style={{ border: `2px solid ${item.color.color}`, 
                  borderRadius:'8px' , backgroundColor: item.color.backgroundColor}}
                >
                  <Table.Column width={'40%'} title="Талбай" dataIndex="field" key="field" />
                  <Table.Column width={'30%'} title="Талб.хэмжээ" dataIndex="balance" key="balance" /> 
                  <Table.Column width={'30%'} title="Гүйцэтгэл" dataIndex="performance" key="performance" />
                </Table>
                {/* <Card style={{ width: '100%', textAlign: 'left', border: `2px solid ${item.color.color}` }} size='small'
                  title={<div style={{ color: 'gray' }}> <RadarChartOutlined style={{ color: item.color.color }} />   {product.dateRange}</div>}
                >
                  <Space size={0} style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Typography.Text strong>{product.name}</Typography.Text>
                    <Button type="text" icon={<FlagOutlined />} size='small'>
                      {product.area}
                    </Button>
                  </Space>
                </Card> */}
              </Col>
            ))}
          </Row>
        </Card>

      ));
  };

  const getMonthData = (value) => {
    const month = value.format('YYYY-MM'); // Format the month to match the data format
    const monthData = data.filter(item => {
      const itemStartMonth = dayjs(item.startDate).format('YYYY-MM');
      const itemEndMonth = dayjs(item.endDate).format('YYYY-MM');
      return month >= itemStartMonth && month <= itemEndMonth; // Check if the month falls within the range
    });
  
    return monthData.map(item => ({
      type: item.status === 'Баталсан' ? 'success' : item.status === 'Цуцалсан' ? 'error' : 'default',
      content: `${item.productType} - ${item.technology}`,
    }));
  };
  
  const monthCellRender = (value) => {
    const listData = getMonthData(value);
    return (
      <div style={{ padding: '4px' }}>
        {listData.map((item, index) => (
          <Tag
            key={`${item.content}${index}`}
            color={item.type === 'success' ? 'green' : item.type === 'error' ? 'red' : 'blue'}
            style={{ marginBottom: '4px' }}
          >
            {item.content}
          </Tag>
        ))}
      </div>
    );
  };
  const getListData = (value) => {
    const currentDate = value.format('YYYY-MM-DD'); // Format the date to match the data format
    return data
      .filter(item => currentDate >= item.startDate && currentDate <= item.endDate) // Filter items within the date range
      .map(item => {
        // Determine the day type
        let dayType = 'betweenDay'; // Default to betweenDay
        if (currentDate === item.startDate) {
          dayType = 'beginDay';
        } else if (currentDate === item.endDate) {
          dayType = 'endDay';
        }
  
        // Determine the color based on the status
        let color = 'default'; // Default color
        switch (item.status) {
          case 'Бүртгсэн':
            color = 'primary';
            break;
          case 'Баталсан':
            color = 'success';
            break;
          case 'Хянасан':
            color = 'processing';
            break;
          case 'Цуцалсан':
            color = 'error';
            break;
          default:
            color = 'warning';
        }
  
        return {
          type: color, // Set the type dynamically
          content: `${item.productType} - ${item.technology}`, // Customize the content
          dayType, // Add the day type (beginDay, betweenDay, or endDay)
        };
      });
  };
  const dateCellRender = value => {
    const listData = getListData(value);
    return (
      <div style={{ padding: 0 }}>
        {listData.map((item,index) => (
          <Tag key={`${item.content}${index}`} 
            color={item.type} 
            style={{
              width: '100%',
              borderRadius: item.dayType === 'beginDay' ? '12px 0 0 12px' : item.dayType === 'endDay' ? '0 12px 12px 0' : '0', // Set borderRadius dynamically
              borderTop: '2px solid',
              borderBottom: '2px solid',
              borderLeft: item.dayType === 'beginDay' ? '2px solid' : '0px solid', // Add border dynamically
              borderRight: item.dayType === 'endDay' ? '2px solid' : '0px solid', // Add border dynamically
              
            }}
          >
            {item.content}
            </Tag>
        ))}
      </div>
    );
    
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
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
                  <Typography.Text style={{fontSize: 'large'}}>{"2025-05-02 -> 2025-05-07"}</Typography.Text>
                </Col>
                <Col >
                  <Button type="primary" ghost  shape='round'  icon={<RightOutlined />}></Button>
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
      <Col span={24}>
        {currTab === 'performance' &&
            <Descriptions bordered 
            column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 7, xxl: 7 }} 
            size='small' layout="vertical" 
            >
              {categories.map((category) => (
              <Descriptions.Item key={category.day} 
                label={
                <Row style={{ margin: '1rem' }} >
                  <Col span={24} style={{ fontWeight: 'bold',  }}  >
                    {category.weekday}  {category.monthAndDay}
                  </Col>
                  <Col span={24} >
                    <Row justify={'space-between'} align='middle' >
                      <Col span={12} style={{ textAlign: 'center' }}>
                        {category.icon}
                    </Col>
                      <Col span={12}>
                        <Row>
                          <Col span={24} align='right'  style={{ fontWeight: 'bold' }}>
                              {category.temperature}
                          </Col>
                          <Col span={24} align='right' >
                              {category.windSpeed}
                          </Col>
                          <Col span={24} align='right' >
                              <AliwangwangOutlined/> {category.humidity}
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
                style={{alignContent:'baseline', height: '100%', padding: '0px'}}
              >
                  {renderCards(category)}
              </Descriptions.Item>
              ))}
            </Descriptions>
        }
         {currTab === 'totalPerformance' && (
          <Row gutter={[16, 16]} >
            <Col span={24}>
            <Calendar cellRender={cellRender} className='customCalendar'/>
            </Col>
          <Col span={24}>
          <Table
            size="small"
            dataSource={data}
            columns={columns} // Use columns array here
            pagination={{ pageSize: 10 }}
            rowSelection={rowSelection}
          /></Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default PerformanceList;