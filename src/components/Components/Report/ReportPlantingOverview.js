import React from "react";
import { Button, Col, Row, Select, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const columns = [
  { title: "Д/д", dataIndex: "id", key: "id", width: 60 },
  { title: "Таримлын нэр", dataIndex: "cropName", key: "cropName" },
  { title: "Хийгдсэн ажлын төрөл", dataIndex: "workType", key: "workType" },
  { title: "Материалын бүлэг", dataIndex: "materialGroup", key: "materialGroup" },
  { title: "Материалын нэр", dataIndex: "materialName", key: "materialName" },
  { title: "Талбайн хэмжээ /га/", dataIndex: "area", key: "area", align: "right" },
  { title: "Хэмжих нэгж", dataIndex: "unit", key: "unit" },
  { title: "Нэгж талбайд", dataIndex: "perUnit", key: "perUnit", align: "right" },
  { title: "Нийт зарцуулсан", dataIndex: "totalUsed", key: "totalUsed", align: "right" },
  { title: "Нэгж үнэ", dataIndex: "unitPrice", key: "unitPrice", align: "right" },
  { title: "Нийт", dataIndex: "totalCost", key: "totalCost", align: "right" },
];

const data = [
  {
    id: 1,
    cropName: "Улаанбуудай",
    workType: "Тариалалт",
    materialGroup: "Бүтээгдэхүүн",
    materialName: "Бурятская остистая",
    area: "2,000.00",
    unit: "килограмм",
    perUnit: "150.00",
    totalUsed: "300,000.00",
    unitPrice: "1,500.00",
    totalCost: "450,000,000.00",
  },
  {
    id: 2,
    cropName: "Улаанбуудай",
    workType: "Тариалалт",
    materialGroup: "Ургамал хамгаалах бодис, Бордоо",
    materialName: "Азотын бордоо",
    area: "1,200.00",
    unit: "килограмм",
    perUnit: "50.00",
    totalUsed: "60,000.00",
    unitPrice: "800.00",
    totalCost: "48,000,000.00",
  },
  {
    id: 3,
    cropName: "Улаанбуудай",
    workType: "Тариалалт",
    materialGroup: "Шатах тослох материал",
    materialName: "Түлш",
    area: "2,000.00",
    unit: "литр",
    perUnit: "12.00",
    totalUsed: "24,000.00",
    unitPrice: "2,980.00",
    totalCost: "71,520,000.00",
  },
];

const ReportPlantingOverview = () => {
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
          {columns.filter((col) => col.key !== 'id').map((column) => (
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
           <Col span={12} align='right'>
              <Button type="primary"  icon={<SearchOutlined/>} ></Button>
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
                <strong>569,520,000.00</strong>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Col>
    </Row>
  );
};

export default ReportPlantingOverview;
