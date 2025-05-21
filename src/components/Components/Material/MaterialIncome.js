import { Table, Tag, Button, Col, Row, Space, Image } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FileExcelOutlined, FilePdfOutlined, SearchOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png'; // Make sure this path is correct

import CategorySelector from './CategorySelector';

function MaterialIncome() {
  const columns = [
    {
      title: 'Бараа материал',
      dataIndex: 'product',
      key: 'product',
      render: (_, record) => (
        <Space>
          <Image
            src={record.image}
            alt="product"
            width={32}
            preview={false}
          />
          <div>
            <div>{record.code}</div>
            <div>{record.name}</div>
          </div>
        </Space>
      ),
    },
    {
      title: 'Материалын бүлэг',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Хэмжих нэгж',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Огноо',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Орлогын хэмжээ',
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
      unit: 'килограмм',
      date: '4/2/25',
      quantity: 300000,
      unitPrice: 1200,
      total: 360000000,
      image: buudai,
    },
    {
      key: 2,
      group: 'Шатах, тослох материал',
      code: '215320352',
      name: 'Дизель түлш',
      unit: 'литр',
      date: '4/30/25',
      quantity: 32000,
      unitPrice: 2980,
      total: 95360000,
      image: buudai,
    },
    {
      key: 3,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '356415741',
      name: 'Азотын бордоо',
      unit: 'килограмм',
      date: '4/5/25',
      quantity: 80000,
      unitPrice: 650,
      total: 52000000,
      image: buudai,
    },
    {
      key: 4,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '368412542',
      name: 'Раунд-Ап',
      unit: 'литр',
      date: '5/3/25',
      quantity: 6000,
      unitPrice: 12000,
      total: 72000000,
      image: buudai,
    },
    {
      key: 5,
      group: 'Шатах, тослох материал',
      code: '711224342',
      name: 'Моторын тос',
      unit: 'литр',
      date: '4/30/25',
      quantity: 34595,
      unitPrice: 5000,
      total: 172975000,
      image: buudai,
    },
    {
      key: 6,
      group: 'Шатах, тослох материал',
      code: '480444945',
      name: 'Бензин А-92',
      unit: 'литр',
      date: '5/4/25',
      quantity: 42943,
      unitPrice: 3200,
      total: 137417600,
      image: buudai,
    },
    {
      key: 7,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '201421916',
      name: 'Фосфорын бордоо',
      unit: 'килограмм',
      date: '5/7/25',
      quantity: 36806,
      unitPrice: 700,
      total: 25764200,
      image: buudai,
    },
    {
      key: 8,
      group: 'Бүтээгдэхүүн',
      code: '778684623',
      name: 'Арвай',
      unit: 'килограмм',
      date: '4/3/25',
      quantity: 99160,
      unitPrice: 950,
      total: 94202000,
      image: buudai,
    },
    {
      key: 9,
      group: 'Шатах, тослох материал',
      code: '304488115',
      name: 'Бензин А-92',
      unit: 'литр',
      date: '5/11/25',
      quantity: 155466,
      unitPrice: 3200,
      total: 497491200,
      image: buudai,
    },
    {
      key: 10,
      group: 'Бүтээгдэхүүн',
      code: '998387181',
      name: 'Рапс',
      unit: 'килограмм',
      date: '4/27/25',
      quantity: 36944,
      unitPrice: 1300,
      total: 48027200,
      image: buudai,
    },
    {
      key: 11,
      group: 'Шатах, тослох материал',
      code: '750212294',
      name: 'Моторын тос',
      unit: 'литр',
      date: '4/8/25',
      quantity: 184712,
      unitPrice: 5000,
      total: 923560000,
      image: buudai,
    },
    {
      key: 12,
      group: 'Шатах, тослох материал',
      code: '659288464',
      name: 'Бензин А-92',
      unit: 'литр',
      date: '4/26/25',
      quantity: 155004,
      unitPrice: 3200,
      total: 496012800,
      image: buudai,
    },
    {
      key: 13,
      group: 'Бүтээгдэхүүн',
      code: '993379178',
      name: 'Рапс',
      unit: 'килограмм',
      date: '4/16/25',
      quantity: 106635,
      unitPrice: 1300,
      total: 138625500,
      image: buudai,
    },
    {
      key: 14,
      group: 'Бүтээгдэхүүн',
      code: '944920489',
      name: 'Арвай',
      unit: 'килограмм',
      date: '4/21/25',
      quantity: 162236,
      unitPrice: 950,
      total: 154124200,
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

export default MaterialIncome;
