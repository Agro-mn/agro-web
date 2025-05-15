import React from "react";
import { Button, Col, Row, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  { title: "Д/д", dataIndex: "id", key: "id", width: 60 },
  { title: "Талбайн нэр", dataIndex: "fieldName", key: "fieldName" },
  { title: "Ерөнхий бүлэг", dataIndex: "generalGroup", key: "generalGroup" },
  { title: "Хийгдсэн ажлын төрөл", dataIndex: "workType", key: "workType" },
  { title: "Материалын бүлэг", dataIndex: "materialGroup", key: "materialGroup" },
  { title: "Материалын нэр", dataIndex: "materialName", key: "materialName" },
  { title: "Талбайн хэмжээ /га/", dataIndex: "area", key: "area", align: "right" },
  { title: "Нэгж талбайд", dataIndex: "perUnit", key: "perUnit", align: "right" },
  { title: "Нийт зарцуулсан", dataIndex: "totalUsed", key: "totalUsed", align: "right" },
  { title: "Нэгж үнэ", dataIndex: "unitPrice", key: "unitPrice", align: "right" },
  { title: "Нийт", dataIndex: "totalCost", key: "totalCost", align: "right" },
];

const data = [
  {
    id: 1,
    fieldName: "Төвийн урд 320га", 
    generalGroup: "Үрсэлгээ",
    workType: "Тарихын өмнөх чийг хаалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "320.00",
    perUnit: "8.00",
    totalUsed: "2,560.00",
    unitPrice: "2,980.00",
    totalCost: "7,628,800.00",
  },
  {
    id: 2,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Үрсэлгээ",
    workType: "Тариалалт",
    materialGroup: "Бүтээгдэхүүн",
    materialName: "Бурятская остистая",
    area: "320.00",
    perUnit: "150.00",
    totalUsed: "48,000.00",
    unitPrice: "1,500.00",
    totalCost: "72,000,000.00",
  },
  {
    id: 3,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Үрсэлгээ",
    workType: "Тариалалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Азотын бордоо",
    area: "320.00",
    perUnit: "50.00",
    totalUsed: "16,000.00",
    unitPrice: "800.00",
    totalCost: "12,800,000.00",
  },
  {
    id: 4,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Үрсэлгээ",
    workType: "Тариалалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "320.00",
    perUnit: "15.00",
    totalUsed: "4,800.00",
    unitPrice: "2,980.00",
    totalCost: "14,304,000.00",
  },
  {
    id: 5,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Таримлын арчилгаа",
    workType: "Ургамал хамгаалах бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "2.4D Бутилын эфир",
    area: "320.00",
    perUnit: "2.00",
    totalUsed: "640.00",
    unitPrice: "10,500.00",
    totalCost: "6,720,000.00",
  },
  {
    id: 6,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Таримлын арчилгаа",
    workType: "Ургамал хамгаалах бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Пума супер",
    area: "320.00",
    perUnit: "2.00",
    totalUsed: "640.00",
    unitPrice: "9,500.00",
    totalCost: "6,080,000.00",
  },
  {
    id: 7,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Таримлын арчилгаа",
    workType: "Ургамал хамгаалах бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Алмазис",
    area: "320.00",
    perUnit: "0.10",
    totalUsed: "32.00",
    unitPrice: "14,500.00",
    totalCost: "464,000.00",
  },
  {
    id: 8,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Таримлын арчилгаа",
    workType: "Ургамал хамгаалах бодис цацалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "320.00",
    perUnit: "1.00",
    totalUsed: "320.00",
    unitPrice: "2,980.00",
    totalCost: "953,600.00",
  },
  {
    id: 9,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Хураалт",
    workType: "Ангилан хадалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "100.00",
    perUnit: "8.00",
    totalUsed: "800.00",
    unitPrice: "2,980.00",
    totalCost: "2,384,000.00",
  },
  {
    id: 10,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Хураалт",
    workType: "Ангилан хураалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "100.00",
    perUnit: "10.00",
    totalUsed: "1,000.00",
    unitPrice: "2,980.00",
    totalCost: "2,980,000.00",
  },
  {
    id: 11,
    fieldName: "Төвийн урд 320га",
    generalGroup: "Хураалт",
    workType: "Шууд хураалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    area: "220.00",
    perUnit: "12.00",
    totalUsed: "2,640.00",
    unitPrice: "2,980.00",
    totalCost: "7,867,200.00",
  },
];

const ReportPlantingByField = () => {
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
          <Col span={12} align="right">
            <Button type="primary" icon={<SearchOutlined />} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Table
        size="small"
          columns={columns}
          dataSource={[...data]}
          pagination={false}
          bordered
          rowKey="id"
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={10} align="right">
                <strong>Нийт</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={10} align="right">
                <strong>134,181,600.00</strong>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Col>
    </Row>
  );
};

export default ReportPlantingByField;
