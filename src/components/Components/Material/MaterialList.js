import {  Col, Row, Tabs } from 'antd';
import { useState } from 'react';

import MaterialEntry from './MaterialEntry';
import MaterialCost from './MaterialCost';
import MaterialTotalCost from './MaterialTotalCost';

function MaterialList() {
 
  const [currTab, setCurrTab] = useState('itemEntry');

  const tabItems = [
    {
      key: 'itemEntry',
      label: 'Бараа материалын бүртгэл',
      // icon: <ProductIcon width={24} />,
    },
    {
      key: 'itemConsumption',
      label: 'Бараа материалын зарцуулалт',
      // icon: <FuelIcon width={24} />,
    },
    {
      key: 'totalConsumption',
      label: 'Нийт зарцуулалт',
      // icon: <FertilizerIcon width={24} />,
    },
  ];
 
  return (
    <Row>
      <Col span={24}>
        <Tabs size='large' items={tabItems} activeKey={currTab} onChange={(key) => setCurrTab(key)} />
      </Col>
      <Col span={24}>
      {currTab=== 'itemEntry' && <MaterialEntry/>}
      {currTab === 'itemConsumption' && <MaterialCost />}
      {currTab === 'totalConsumption' && <MaterialTotalCost />}
      </Col>
    </Row>
  );
};
export default MaterialList;