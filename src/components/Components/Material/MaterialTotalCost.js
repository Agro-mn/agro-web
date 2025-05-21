import { Table, Button, Col, Row, Space, Tag } from 'antd';
import {
  PlusOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import CategorySelector from './CategorySelector';

const { Column, ColumnGroup } = Table;

function MaterialTotalCost() {
  const data = [
    {
      key: 1,
      group: 'Бүтээгдэхүүн',
      code: '102152012',
      name: 'Улаанбуудай',
      unit: 'килограмм',
      date: '4/2/25',
      incomeQty: 300000,
      incomePrice: 1200,
      expenseQty: 120000,
      expensePrice: 1200,
      remainingQty: 180000,
      total: 216000000,
    },
    {
      key: 2,
      group: 'Шатах, тослох материал',
      code: '215320352',
      name: 'Дизель түлш',
      unit: 'литр',
      date: '4/30/25',
      incomeQty: 32000,
      incomePrice: 2980,
      expenseQty: 500,
      expensePrice: 2980,
      remainingQty: 31500,
      total: 93870000,
    },
    {
      key: 3,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '356415741',
      name: 'Азотын бордоо',
      unit: 'килограмм',
      date: '4/5/25',
      incomeQty: 80000,
      incomePrice: 650,
      expenseQty: 30000,
      expensePrice: 650,
      remainingQty: 50000,
      total: 32500000,
    },
    {
      key: 4,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '368412542',
      name: 'Раунд-Ап',
      unit: 'литр',
      date: '5/3/25',
      incomeQty: 6000,
      incomePrice: 12000,
      expenseQty: 2100,
      expensePrice: 12000,
      remainingQty: 3900,
      total: 46800000,
    },
    {
      key: 5,
      group: 'Бүтээгдэхүүн',
      code: '102152015',
      name: 'Арвай',
      unit: 'килограмм',
      date: '4/1/25',
      incomeQty: 10000,
      incomePrice: 950,
      expenseQty: 2000,
      expensePrice: 950,
      remainingQty: 8000,
      total: 7600000,
    },
    {
      key: 6,
      group: 'Шатах, тослох материал',
      code: '215320351',
      name: 'Бензин',
      unit: 'литр',
      date: '4/10/25',
      incomeQty: 5000,
      incomePrice: 3100,
      expenseQty: 1000,
      expensePrice: 3100,
      remainingQty: 4000,
      total: 12400000,
    },
    {
      key: 7,
      group: 'Бүтээгдэхүүн',
      code: '102152013',
      name: 'Эрдэнэ шиш',
      unit: 'килограмм',
      date: '4/3/25',
      incomeQty: 20000,
      incomePrice: 1500,
      expenseQty: 5000,
      expensePrice: 1500,
      remainingQty: 15000,
      total: 22500000,
    },
    {
      key: 8,
      group: 'Бүтээгдэхүүн',
      code: '102152014',
      name: 'Төмс',
      unit: 'килограмм',
      date: '4/4/25',
      incomeQty: 50000,
      incomePrice: 600,
      expenseQty: 10000,
      expensePrice: 600,
      remainingQty: 40000,
      total: 24000000,
    },
    {
      key: 9,
      group: 'Ургамал хамгаалах бодис, бордоо',
      code: '356415742',
      name: 'Калийн бордоо',
      unit: 'килограмм',
      date: '4/8/25',
      incomeQty: 10000,
      incomePrice: 700,
      expenseQty: 3000,
      expensePrice: 700,
      remainingQty: 7000,
      total: 4900000,
    },
    {
      key: 10,
      group: 'Шатах, тослох материал',
      code: '215320353',
      name: 'Масло',
      unit: 'литр',
      date: '4/15/25',
      incomeQty: 1000,
      incomePrice: 3200,
      expenseQty: 200,
      expensePrice: 3200,
      remainingQty: 800,
      total: 2560000,
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
        <Table size="small" bordered dataSource={data} rowSelection={{}} pagination={{ pageSize: 10 }}>
          <Column title="Материалын бүлэг" dataIndex="group" key="group" />
          <Column title="Материалын код" dataIndex="code" key="code" />
          <Column title="Материалын нэр" dataIndex="name" key="name" />
          <Column title="Хэмжих нэгж" dataIndex="unit" key="unit" />
          <Column title="Огноо" dataIndex="date" key="date" />

          <ColumnGroup title="Орлого">
            <Column title="Хэмжээ" dataIndex="incomeQty" key="incomeQty" />
            <Column title="Нэгж үнэ" dataIndex="incomePrice" key="incomePrice" />
          </ColumnGroup>

          <ColumnGroup title="Зарлага">
            <Column title="Хэмжээ" dataIndex="expenseQty" key="expenseQty" />
            <Column title="Нэгж үнэ" dataIndex="expensePrice" key="expensePrice" />
          </ColumnGroup>

          <ColumnGroup title="Үлдэгдэл">
            <Column title="Хэмжээ" dataIndex="remainingQty" key="remainingQty" />
            <Column
            title="Дүн"
            dataIndex="total"
            key="total"
            render={(value) => <Tag color="green">{value.toLocaleString()}</Tag>}
          />
          </ColumnGroup>

         

          <Column
            title="Үйлдэл"
            key="action"
            render={() => (
              <Space size="middle">
                <Button icon={<EyeOutlined />} type="primary" ghost />
                <Button icon={<EditOutlined />} type="primary" ghost />
                <Button icon={<DeleteOutlined />} type="primary" ghost danger />
              </Space>
            )}
          />
        </Table>
      </Col>
    </Row>
  );
}

export default MaterialTotalCost;
