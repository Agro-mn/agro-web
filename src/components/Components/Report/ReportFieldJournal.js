import React from "react";
import { Table, Row, Col, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  { title: "Д/д", dataIndex: "id", key: "id", width: 60 },
  { title: "Тайлант он", dataIndex: "year", key: "year", width: 100 },
  { title: "Талбайн нэр", dataIndex: "fieldName", key: "fieldName", width: 150 },
  { title: "Талбайн хэмжээ", dataIndex: "fieldSize", key: "fieldSize", align: "right", width: 120 },
  { title: "Хийгдсэн ажлын төрөл", dataIndex: "workType", key: "workType", width: 200 },
  { title: "Материалын бүлэг", dataIndex: "materialGroup", key: "materialGroup", width: 200 },
  { title: "Материалын нэр", dataIndex: "materialName", key: "materialName", width: 200 },
  { title: "Хэмжих нэгж", dataIndex: "unit", key: "unit", width: 120 },
  { title: "Нэгж талбайн үзүүлэлт", dataIndex: "unitPerformance", key: "unitPerformance", align: "right", width: 150 },
];

const data = [
  {
    id: 1,
    year: 2024,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Механик уринш",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    unit: "литр",
    unitPerformance: "15.00",
  },
  {
    id: 2,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Тарихын өмнөх бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Раунд-Ап",
    unit: "литр",
    unitPerformance: "3.00",
  },
  {
    id: 3,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Тариалалт",
    materialGroup: "Бүтээгдэхүүн",
    materialName: "Бурятская остистая",
    unit: "килограмм",
    unitPerformance: "150.00",
  },
  {
    id: 4,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Тариалалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Азотын бордоо",
    unit: "килограмм",
    unitPerformance: "100.00",
  },
  {
    id: 5,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Таримлын бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "2.4D Бутилын эфир",
    unit: "литр",
    unitPerformance: "2.00",
  },
  {
    id: 6,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Таримлын бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Пумасупер",
    unit: "литр",
    unitPerformance: "2.00",
  },
  {
    id: 7,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Таримлын бодис цацалт",
    materialGroup: "Ургамал хамгаалах бодис, бордоо",
    materialName: "Алмазис",
    unit: "килограмм",
    unitPerformance: "0.10",
  },
  {
    id: 8,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 100,
    workType: "Ангилан хадалт",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    unit: "литр",
    unitPerformance: "5.00",
  },
  {
    id: 9,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 100,
    workType: "Ангилан хураалт",
    materialGroup: "Бүтээгдэхүүн",
    materialName: "Бурятская остистая",
    unit: "центр",
    unitPerformance: "18.00",
  },
  {
    id: 10,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 220,
    workType: "Шууд хураалт",
    materialGroup: "Бүтээгдэхүүн",
    materialName: "Бурятская остистая",
    unit: "центр",
    unitPerformance: "16.00",
  },
  {
    id: 11,
    year: 2025,
    fieldName: "Төвийн урд 320га",
    fieldSize: 320,
    workType: "Цэвдэгш",
    materialGroup: "Шатах, тослох материал",
    materialName: "Түлш",
    unit: "литр",
    unitPerformance: "15.00",
  },
];

const ReportFieldJournal = () => {
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
          <Col span={24} align="right">
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
        />
      </Col>
    </Row>
  );
};

export default ReportFieldJournal;