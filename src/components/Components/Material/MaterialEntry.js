import { Table, Button, Col, Row } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FileExcelOutlined, FilePdfOutlined, SearchOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png';

import CategorySelector from './CategorySelector';

function MaterialEntry() {
  const columns = [
    {
      title: 'Бүлэг', // Name column
      dataIndex: 'group',
      key: 'group',
    },
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
      title: 'Хэмжих нэгж', // Name column
      dataIndex: 'unit',
      key: 'unit',
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

  const data = [
    {
      key: 0,
      group: 'Бүтээгдэхүүн',
      code: '102152012',
      name: 'Улаанбуудай',
      unit: 'килограмм'
    },
    {
      key: 1,
      group: 'Шатах, тослох материал',
      code: '215320352',
      name: 'Дизель түлш',
      unit: 'литр'
    },
    {
      key: 2,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '356415741',
      name: 'Азотын бордоо',
      unit: 'килограмм'
    },
    {
      key: 3,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '368412542',
      name: 'Раунд-Ап',
      unit: 'литр'
    },
    {
      key: 4,
      group: 'Бүтээгдэхүүн',
      code: '021231',
      name: 'Kanky Kitadakate (Green)',
      unit: 'шил'
    },
    {
      key: 5,
      group: 'Бүтээгдэхүүн',
      code: '198764321',
      name: 'Саальны машин',
      unit: 'ширхэг'
    },
    {
      key: 6,
      group: 'Шатах, тослох материал',
      code: '274839102',
      name: 'Моторын тос',
      unit: 'литр'
    },
    {
      key: 7,
      group: 'Бүтээгдэхүүн',
      code: '928374652',
      name: 'Арвай',
      unit: 'килограмм'
    },
    {
      key: 8,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '758392010',
      name: 'Фосфорын бордоо',
      unit: 'килограмм'
    },
    {
      key: 9,
      group: 'Шатах, тослох материал',
      code: '183746251',
      name: 'Бензин А-92',
      unit: 'литр'
    }
  ];
  

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