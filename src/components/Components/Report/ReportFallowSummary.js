import React from "react";
import { Table, Row, Col, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  { title: "Д/д", dataIndex: "id", key: "id", width: 60 },
  { title: "Дэд бүлэг", dataIndex: "subGroup", key: "subGroup", width: 150 },
  { title: "Хийгдсэн ажлын төрөл", dataIndex: "workType", key: "workType", width: 200 },
  { title: "Материалын бүлэг", dataIndex: "materialGroup", key: "materialGroup", width: 200 },
  { title: "Материалын нэр", dataIndex: "materialName", key: "materialName", width: 200 },
  { title: "Талбайн хэмжээ /га/", dataIndex: "area", key: "area", align: "right", width: 150 },
  { title: "Нэгж талбайд", dataIndex: "perUnit", key: "perUnit", align: "right", width: 150 },
  { title: "Нийт зарцуулсан", dataIndex: "totalUsed", key: "totalUsed", align: "right", width: 150 },
  { title: "Нэгж үнэ", dataIndex: "unitPrice", key: "unitPrice", align: "right", width: 150 },
  { title: "Нийт", dataIndex: "totalCost", key: "totalCost", align: "right", width: 150 },
];

const data = [
  {
    id: 1,
    subGroup: "Уринш 1",
    workType: "Механик уринш диск",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "500",
    perUnit: "15.00",
    totalUsed: "7,500.00",
    unitPrice: "2,980.00",
    totalCost: "22,350,000.00",
  },
  {
    id: 2,
    subGroup: "Уринш 1",
    workType: "Механик уринш хавалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "700",
    perUnit: "8.00",
    totalUsed: "5,600.00",
    unitPrice: "2,980.00",
    totalCost: "16,688,000.00",
  },
  {
    id: 3,
    subGroup: "Уринш 1",
    workType: "Химийн уринш",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Раунд-Ап",
    area: "800",
    perUnit: "3.00",
    totalUsed: "2,400.00",
    unitPrice: "9,500.00",
    totalCost: "22,800,000.00",
  },
  {
    id: 4,
    subGroup: "Уринш 1",
    workType: "Химийн уринш",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "800",
    perUnit: "1.20",
    totalUsed: "960.00",
    unitPrice: "2,980.00",
    totalCost: "2,860,800.00",
  },
  {
    id: 5,
    subGroup: "Уринш 2",
    workType: "Химийн уринш",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Раунд-Ап",
    area: "2000",
    perUnit: "3.00",
    totalUsed: "6,000.00",
    unitPrice: "9,500.00",
    totalCost: "57,000,000.00",
  },
  {
    id: 6,
    subGroup: "Уринш 2",
    workType: "Химийн уринш",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "2000",
    perUnit: "1.20",
    totalUsed: "2,400.00",
    unitPrice: "2,980.00",
    totalCost: "7,152,000.00",
  },
  {
    id: 7,
    subGroup: "Уринш 3",
    workType: "Цэвдэгш",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "600",
    perUnit: "15.00",
    totalUsed: "9,000.00",
    unitPrice: "2,980.00",
    totalCost: "26,820,000.00",
  },
];

const ReportFallowSummary = () => {
  const getDistinctOptions = (dataIndex) => {
    const uniqueValues = [...new Set(data.map((item) => item[dataIndex]))];
    return uniqueValues.map((value) => ({
      value,
      label: value,
    }));
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          {columns.filter((col) => col.key !== "id").map((column) => (
            <Col key={column.key} span={6}>
              <Select
                style={{ width: "100%" }}
                placeholder={`${column.title} ..`}
                options={getDistinctOptions(column.dataIndex)}
                allowClear
                mode="multiple"
              />
            </Col>
          ))}
          <Col span={18} align="right">
            <Button type="primary" icon={<SearchOutlined />} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Table
        size="small"
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          rowKey="id"
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={9} align="right">
                <strong>Нийт</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={9} align="right">
                <strong>155,670,800.00</strong>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Col>
    </Row>
  );
};

export default ReportFallowSummary;