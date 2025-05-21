import {  Col, Row, Tabs } from 'antd';
import { useState } from 'react';

import MaterialEntry from './MaterialEntry';
import MaterialCost from './MaterialCost';
import MaterialTotalCost from './MaterialTotalCost';
import MaterialIncome from './MaterialIncome';

function MaterialList() {
 
  const [currTab, setCurrTab] = useState('itemEntry');

  const tabItems = [
    {
      key: 'itemEntry',
      label: 'Бараа материалын бүртгэл',
      // icon: <ProductIcon width={24} />,
    },
    {
      key: 'itemIncome',
      label: 'Бараа материалын орлого',
      // icon: <FuelIcon width={24} />,
    },
    {
      key: 'itemOutcome',
      label: 'Бараа материалын зарлага',
      // icon: <FuelIcon width={24} />,
    },
    {
      key: 'totalBalance',
      label: 'Бараа материалын үлдэгдэл',
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
      {currTab === 'itemIncome' && <MaterialIncome />}
      {currTab === 'itemOutcome' && <MaterialCost />}
      {currTab === 'totalBalance' && <MaterialTotalCost />}
      </Col>
    </Row>
  );
};
export default MaterialList;