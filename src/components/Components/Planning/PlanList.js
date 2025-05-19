import { useState } from 'react';
import { Col, Row, Space, Table, Tabs, Button, Select, Card, Typography, Badge } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, SendOutlined, SearchOutlined, RadarChartOutlined, FlagOutlined } from '@ant-design/icons';

const { Option } = Select;

const PlanList = () => {
  const data = [
    {
      key: '1',
      productType: 'УлаанБуудай',
      technology: 'Тарианы эмнэл бодис цацалт',
      area: '100га',
      startDate: '2025-01-01',
      endDate: '2025-01-01',
      status: 'Бүртгсэн',
    },
    {
      key: '2',
      productType: 'Panc',
      technology: 'Үрэлгээ',
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

  const [currTab, setCurrTab] = useState('plans');

  const tabItems = [
    {
      key: 'plans',
      label: 'Дэлгэрэнгүй төлөвлөгөө',
    },
    {
      key: 'completedPlans',
      label: 'Батлагдсан төлөвлөгөө',
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
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  const dataKanban = [
    {
      id: 1,
      category: 'Үрэлгээ',
      title: 'Тарихийн өмнөх бодис цацалт',
      color: { color: '#ff7447', backgroundColor: '#ebc7bc', cardBackgroundColor: '#e7e1df' },
      products: [
        { name: 'УлаанБуудай', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Рапс', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Ногоон тэжээл', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
      ]
    },
    {
      id: 2,
      category: 'Үрэлгээ',
      title: 'Үрэлгээ',
      color: { color: '#ff7447', backgroundColor: '#ebc7bc', cardBackgroundColor: '#e7e1df' },
      products: [
        { name: 'УлаанБуудай', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Рапс', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
      ]
    },
    {
      id: 3,
      category: 'Арчилгаа',
      title: 'Ургамал хамгаалах бодис цацалт',
      color: { color: '#28a1d9', backgroundColor: '#afdaed', cardBackgroundColor: '#cde3f9' },
      products: [
        { name: 'УлаанБуудай', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Рапс', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
      ]
    },
    {
      id: 4,
      title: 'Шууд хураалт',
      category: 'Хураалт',
      color: { color: '#cc7429', backgroundColor: '#f3decc', cardBackgroundColor: '#efebe6' },
      products: [
        { name: 'УлаанБуудай', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Рапс', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
      ]
    },
    {
      id: 5,
      title: 'Хүнд диск',
      category: 'Уринш',
      color: { color: '#936ee9', backgroundColor: '#ccc1f1', cardBackgroundColor: '#e1d6f1' },
      products: [
        { name: 'УлаанБуудай', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
        { name: 'Рапс', area: '360 га', dateRange: '2025-01-01 - 2025-12-31' },
      ]
    },
  ];
  const categories = ['Үрэлгээ', 'Арчилгаа', 'Хураалт', 'Уринш'];

  const renderCards = (category) => {
    return dataKanban
      .filter((item) => item.category === category)
      .map((item) => (
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
              {item.title}
            </Col>
            {item.products.map((product, index) => (
              <Col span={24} key={index}>
                <Card style={{ width: '100%', textAlign: 'left', border: `2px solid ${item.color.color}` }} size='small'
                  title={<div style={{ color: 'gray' }}> <RadarChartOutlined style={{ color: item.color.color }} />   {product.dateRange}</div>}
                >
                  <Space size={0} style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Typography.Text strong>{product.name}</Typography.Text>
                    <Button type="text" icon={<FlagOutlined />} size='small'>
                      {product.area}
                    </Button>
                  </Space>
                </Card>
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
      <Col span={24}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={5}>
            <Select placeholder="Бүтээгдэхүүний төрөл" style={{ width: '100%' }} >
              <Option value="type1">Type 1</Option>
              <Option value="type2">Type 2</Option>
            </Select>
          </Col>
          <Col span={5}>
            <Select placeholder="Технологи сонгох" style={{ width: '100%' }}>
              <Option value="tech1">Tech 1</Option>
              <Option value="tech2">Tech 2</Option>
            </Select>
          </Col>
          <Col span={2}>
            <Button type="primary" icon={<SearchOutlined />}></Button>
          </Col>
          <Col span={12}>
            {currTab === 'plans' &&
              <Row align={'end'} gutter={[16, 16]}>
                <Col >
                  <Button type="primary" ghost icon={<SendOutlined />}>Бүгдийг сонгож илгээх</Button>
                </Col>
                <Col >
                  <Button type="primary" icon={<PlusOutlined />}>Төлөвлөгөө бүртгэх</Button>
                </Col>
              </Row>
            }
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        {currTab === 'plans' && (
          <Table
            size="small"
            dataSource={data}
            columns={columns} // Use columns array here
            pagination={{ pageSize: 10 }}
            rowSelection={rowSelection}
          />
        )}
        {currTab === 'completedPlans' &&
          <Row gutter={[16, 16]} >
            {categories.map((category) => (
              <Col key={category} span={6} style={{ minWidth: '300px' }}>
                <Button type='primary' ghost
                  style={{
                    width: '100%', fontSize: 'large',
                    fontWeight: 'bold', textAlign: 'center',
                    borderBottom: '2px solid', // Bottom border for the button
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderRadius: '0px', // No rounded corners
                    marginBottom: '16px', // Space between button and cards
                  }} // Style for the button
                >
                  {category}
                </Button>
                {/* Render Cards for the Category */}
                {renderCards(category)}
              </Col>
            ))}
          </Row>
        }
      </Col>
    </Row>
  );
};

export default PlanList;