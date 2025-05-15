import { Table, Tag, Button, Col, Row, Space, Image } from 'antd';
import { PlusOutlined, FileExcelOutlined, FilePdfOutlined, SearchOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png';

import CategorySelector from './CategorySelector';

function MaterialTotalCost() {
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
    // {
    //   title: 'Утга',
    //   dataIndex: 'value',
    //   key: 'value',
    // },
    // {
    //   title: 'Хэмжих нэгж',
    //   dataIndex: 'unit',
    //   key: 'unit',
    // },
    // {
    //   title: 'Талбайн хэмжээ /га/',
    //   dataIndex: 'areaSize',
    //   key: 'areaSize',
    // },
    {
      title: 'Нийт зарцуулсан',
      dataIndex: 'totalUsed',
      key: 'totalUsed',
      render: (text) => <Tag color="green">{text}</Tag>,
    },
    {
      title: 'Нэгж талбайд зарцуулсан',
      dataIndex: 'perUnitUsed',
      key: 'perUnitUsed',
      render: (text) => <Tag color="lime">{text}</Tag>,
    },
    // {
    //   title: 'Үйлдэл',
    //   key: 'action',
    //   render: () => (
    //     <Space size="middle">
    //       <Button icon={<EyeOutlined />} type="primary" ghost />
    //       <Button icon={<EditOutlined />} type="primary" ghost/>
    //       <Button icon={<DeleteOutlined />} type="primary" ghost danger />
    //     </Space>
    //   ),
    // },
  ];
  
  // Generate 20 rows of dummy data
  const values = ['Үрслэгээ', 'Малын тэжээл', 'Хэвийн хорогдол'];
  const units = ['кг', 'л', 'тн'];
  const perUnitOptions = ['150', 'Paid', '50', '100', ''];
  // const imageUrl = 'https://img.icons8.com/emoji/48/womans-flat-shoe.png';
  
  const data = new Array(20).fill(null).map((_, i) => ({
    key: i + 1,
    code: '021231',
    name: 'Улаанбуудай',
    value: values[i % values.length],
    unit: units[i % units.length],
    areaSize: (i % 3 === 0) ? 320 + i * 5 : '',
    totalUsed: `${1000 * (i + 1)}`,
    perUnitUsed: perUnitOptions[i % perUnitOptions.length],
    image: buudai,
  }));

 
  const groupItems = [
    {
      key: 'products',
      value: 'blue', // for <Tag color="blue" />
      label: 'Бүтээгдэхүүн',
      // icon: <ProductIcon width={24} />,
    },
    {
      key: 'fuel',
      value: 'volcano',
      label: 'Шатах тослох материал',
      // icon: <FuelIcon width={24} />,
    },
    {
      key: 'fertilizer',
      value: 'green',
      label: 'Ургамал хамгаалах бодис, бордоо',
      // icon: <FertilizerIcon width={24} />,
    },
  ];
  

  const categories = [
    { label: 'Улаанбуудай', value: 'wheat' },
    { label: 'Рапс', value: 'purple' },
    { label: 'Ногоон тэжээл', value: 'green' },
    { label: 'Арвай', value: 'volcano' },
  ];
  return (
    <Row>
      <Col span={14}><div style={{ display: 'flex', justifyContent: 'left', marginBottom: 16 }}>
       <CategorySelector datasource={groupItems} />
      <CategorySelector datasource={categories} />
      </div>
      </Col>
      <Col span={10}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'left', marginBottom: 16 }}>
            <Button type="primary" icon={<SearchOutlined />} onClick={() => console.log('Add new material')}>
              
            </Button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'right', marginBottom: 16 }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => console.log('Add new material')}>
              Нэмэх
            </Button>
            <Button type="primary" ghost icon={<FileExcelOutlined />} onClick={() => console.log('Export to Excel')}>
              Excel
            </Button>
            <Button type="primary" ghost icon={<FilePdfOutlined />} onClick={() => console.log('Export to PDF')}>
              PDF
            </Button>
        </div>
        </div>
      </Col>
      <Col span={24}>
        <Table
        size='small'
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10, showSizeChanger: false }}
          rowSelection={{}}
        />
      </Col>
    </Row>
  );
};
export default MaterialTotalCost;