import { Table, Tag, Button, Col, Row, Space } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FileExcelOutlined, FilePdfOutlined, SearchOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png'; // Adjust if needed
import CategorySelector from './CategorySelector';

function MaterialCost() {
  const columns = [
    {
      title: 'Материалын код',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Материалын нэр',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Зарцуулалтын төрөл',
      dataIndex: 'usageType',
      key: 'usageType',
    },
    {
      title: 'Огноо',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Хэмжих нэгж',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Зарцуулсан хэмжээ',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Нэгж үнэ',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Нийт',
      dataIndex: 'total',
      key: 'total',
      render: (text) => <Tag color="green">{text}</Tag>,
    },
    {
      title: 'Нийт талбайн хэмжээ',
      dataIndex: 'totalArea',
      key: 'totalArea',
    },
    {
      title: 'Нэгж талбайд',
      dataIndex: 'areaPerUnit',
      key: 'areaPerUnit',
    },
    {
      title: 'Үйлдэл',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} type="primary" ghost />
          <Button icon={<EditOutlined />} type="primary" ghost />
          <Button icon={<DeleteOutlined />} type="primary" ghost danger />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      group: 'Бүтээгдэхүүн',
      code: '102152012',
      name: 'Улаанбуудай',
      usageType: 'Үрсэлгээ',
      date: '5/15/25',
      unit: 'килограмм',
      quantity: 120000,
      unitPrice: 1200,
      total: 144000000,
      totalArea: 800,
      areaPerUnit: 150,
      image: buudai,
    },
    {
      key: 2,
      group: 'Шатах, тослох материал',
      code: '215320352',
      name: 'Дизель түлш',
      usageType: 'Тарихын өмнөх хор цацалт',
      date: '4/30/25',
      unit: 'литр',
      quantity: 500,
      unitPrice: 2980,
      total: 1490000,
      totalArea: 500,
      areaPerUnit: 1,
      image: buudai,
    },
    {
      key: 3,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '356415741',
      name: 'Азотын бордоо',
      usageType: 'Үрсэлгээ',
      date: '5/15/25',
      unit: 'килограмм',
      quantity: 30000,
      unitPrice: 650,
      total: 19500000,
      totalArea: 300,
      areaPerUnit: 100,
      image: buudai,
    },
    {
      key: 4,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '368412542',
      name: 'Раунд-Ап',
      usageType: 'Тарималын арчилгаа',
      date: '7/9/25',
      unit: 'литр',
      quantity: 2100,
      unitPrice: 12000,
      total: 25200000,
      totalArea: 700,
      areaPerUnit: 3,
      image: buudai,
    },
    {
      key: 5,
      group: 'Бүтээгдэхүүн',
      code: '102152015',
      name: 'Арвай',
      usageType: 'Малын тэжээлд',
      date: '5/16/25',
      unit: 'килограмм',
      quantity: 1000,
      unitPrice: 900,
      total: 900000,
      totalArea: '300',
      areaPerUnit: '5',
      image: buudai,
    },
    {
      key: 6,
      group: 'Шатах, тослох материал',
      code: '215320352',
      name: 'Дизель түлш',
      usageType: 'Удирдлага',
      date: '5/1/25',
      unit: 'литр',
      quantity: 60,
      unitPrice: 2980,
      total: 178800,
      totalArea: '700',
      areaPerUnit: '20',
      image: buudai,
    },
  ];
  const groupItems = [
    { key: 'products', value: 'blue', label: 'Бүтээгдэхүүн' },
    { key: 'fuel', value: 'volcano', label: 'Шатах тослох материал' },
    { key: 'fertilizer', value: 'green', label: 'Ургамал хамгаалах бодис, бордоо' },
  ];

  const categories = [
    { label: 'Улаанбуудай', value: 'wheat' },
    { label: 'Рапс', value: 'purple' },
    { label: 'Ногоон тэжээл', value: 'green' },
    { label: 'Арвай', value: 'volcano' },
  ];
  return (
    <Row>
      <Col span={14}>
        <div style={{ display: 'flex', justifyContent: 'left', marginBottom: 16 }}>
          <CategorySelector datasource={groupItems} />
          <CategorySelector datasource={categories} />
        </div>
      </Col>
      <Col span={10}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <Button type="primary" icon={<SearchOutlined />} />
          </div>
          <div>
            <Button type="primary" icon={<PlusOutlined />} style={{ marginRight: 8 }}>
              Нэмэх
            </Button>
            <Button type="primary" ghost icon={<FileExcelOutlined />} style={{ marginRight: 8 }}>
              Excel
            </Button>
            <Button type="primary" ghost icon={<FilePdfOutlined />}>
              PDF
            </Button>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <Table
          size="small"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10, showSizeChanger: false }}
          rowSelection={{}}
        />
      </Col>
    </Row>
  );
}

export default MaterialCost;
