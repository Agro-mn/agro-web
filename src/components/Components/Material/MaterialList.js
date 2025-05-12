import { Table, Tag, Button, Dropdown, Menu, Pagination, Col, Row, Tabs, Radio } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FileExcelOutlined, FilePdfOutlined } from '@ant-design/icons';
import buudai from '../../../assets/img/buudai.png';
import { useState } from 'react';

function MaterialList() {
  const columns = [

    {
      title: 'Бараа материал',
      dataIndex: 'product',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={buudai} alt="" style={{ width: 50 }} />
          <div>
            <div style={{ color: '#3B82F6', cursor: 'pointer' }}>{record.code}</div>
            <div>{record.name}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Технологит ажил',
      dataIndex: 'operator',
    },
    {
      title: 'Талбай хэмжээ',
      dataIndex: 'area',
    },
    {
      title: 'Хэмжих нэгж',
      dataIndex: 'date',
    },
    {
      title: 'Нийт зарцуулсан',
      dataIndex: 'totalCost',
      render: (text) => <Tag color="lime">{text}</Tag>,
    },
    {
      title: 'Нэгж талбайд зарцуулсан',
      dataIndex: 'unitCost',
      render: (text) => <Tag color="lime">{text}</Tag>,
    },
    {
      title: 'Үйлдэл',
      dataIndex: 'actions',
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


  const [currTab, setCurrTab] = useState('products');

  const tabItems = [
    {
      key: 'products',
      label: 'Бүтээгдэхүүн',
      // icon: <ProductIcon width={24} />,
    },
    {
      key: 'fuel',
      label: 'Шатах тослох материал',
      // icon: <FuelIcon width={24} />,
    },
    {
      key: 'fertilizer',
      label: 'Ургамал хамгаалах бодис, бордоо',
      // icon: <FertilizerIcon width={24} />,
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Tabs items={tabItems} activeKey={currTab} onChange={(key) => setCurrTab(key)} />
      </Col>
      <Col span={24}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">УлаанБуудай</Radio.Button>
            <Radio.Button value="b">Рапс</Radio.Button>
            <Radio.Button value="c">Ногоон тэжээл</Radio.Button>
            <Radio.Button value="d">Арвай</Radio.Button>
          </Radio.Group>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => console.log('Add new material')}>
              Бараа материал нэмэх
            </Button>
            <Button type="primary" ghost icon={<FileExcelOutlined />} onClick={() => console.log('Export to Excel')}>
              Excel татах
            </Button>
            <Button type="primary" ghost icon={<FilePdfOutlined />} onClick={() => console.log('Export to PDF')}>
              PDF татах
            </Button>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 10, showSizeChanger: false }}
          rowSelection={{}}
        />
      </Col>
    </Row>
  );
};
export default MaterialList;