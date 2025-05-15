import { Table, Button, Col, Row } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FileExcelOutlined, FilePdfOutlined, SearchOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png';

import CategorySelector from './CategorySelector';

function MaterialEntry() {
  const columns = [
    {
      title: 'Зураг', // Image column
      dataIndex: 'image',
      key: 'image',
      render: () => <img src={buudai} alt="" style={{ width: 50 }} />,
    },
    {
      title: 'Код', // Code column
      dataIndex: 'code',
      key: 'code',
      render: (code) => (
        <div style={{ color: '#3B82F6', cursor: 'pointer' }}>{code}</div>
      ),
    },
    {
      title: 'Нэр', // Name column
      dataIndex: 'name',
      key: 'name',
    },
  
    {
      title: 'Үйлдэл',
      dataIndex: 'actions',
      key: 'actions',
      render: () => (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button icon={<EyeOutlined />} onClick={() => console.log('View material')} />
          <Button icon={<EditOutlined />} onClick={() => console.log('Edit material')} />
          <Button icon={<DeleteOutlined />} onClick={() => console.log('Delete material')} />
        </div>
      ),
    },
  ];

  const data = new Array(8).fill(null).map((_, i) => ({
    key: i,
    code: '021231',
    name: 'Kanky Kitadakate (Green)',
    operator: 'Leslie Alexander',
    area: '$21.78',
    date: '04/17/23',
    totalCost: 'Paid',
    unitCost: 'Paid',
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
export default MaterialEntry;