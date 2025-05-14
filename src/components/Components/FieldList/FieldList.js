import { AutoComplete, Button, Col, Input, Radio, Row } from 'antd';
import React from 'react';
import { SettingOutlined, EnvironmentOutlined, FlagOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Tsagaannuur from '../../../assets/img/Tsagaannuur.png';
import AreaSelector from './AreaSelector';
import FieldMap from './FieldMap';
function FieldList() {

  const [arrayType, setArrayType] = React.useState('list');

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: { Tsagaannuur },
    title: `Чандагатай`,
    address: `Сэлэнгэ, Цагааннуур`,
    size: `${10 + index * 5} га`,
    utility: index % 2 === 0 ? 'Улаанбуудай' : 'Төмс',
  }));

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        {/* <Affix offsetTop={80} style={{ zIndex: 1 }}> */}
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
            <Row gutter={[16, 16]} >
              <Col >
                <AutoComplete>
                  <Input.Search placeholder="Талбайн нэрээр" enterButton />
                </AutoComplete>
              </Col>
              <Col >
                <AutoComplete>
                  <Input.Search placeholder="Талбайн хэмжээгээр" enterButton />
                </AutoComplete>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} justify='right'>
            <Row justify={'end'}>
              <Radio.Group value={arrayType} onChange={(e) => setArrayType(e.target.value)}>
                <Radio.Button value="list">
                  <UnorderedListOutlined />  Жагсаалт
                </Radio.Button>
                <Radio.Button value="map">
                  <EnvironmentOutlined />  Газрын зураг
                </Radio.Button>
              </Radio.Group>
            </Row>
          </Col>
        </Row>
        {/* </Affix> */}
      </Col>

      {arrayType === 'list' && data.map((item) => (
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} key={item.id}>
          <Row style={{ borderRadius: '20px', backgroundColor: '#f0fff2', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <Col span={12}
              style={{
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                overflow: 'hidden',
                lineHeight: '0'
              }}
            >
              <Button size='small' type='primary' shape='round'
                style={{ position: 'absolute', zIndex: 1, right: 8, top: 8 }}
              >
                {item.title}
              </Button>
              <img alt="example" src={Tsagaannuur}
                style={{ width: '100%', height: '10rem', objectFit: 'cover' }}
              />
            </Col>
            <Col span={12}>
              <Row style={{ padding: '1rem' }}>
                <Col span={24} align='left' >
                  <Button type="text" icon={<EnvironmentOutlined />} >
                    {item.address}
                  </Button>
                </Col>
                <Col span={24} align='left' >
                  <Button type="text" icon={<FlagOutlined />} >
                    {item.size}
                  </Button>
                </Col>
                <Col span={24} align='left' >
                  <Button type="text" icon={<SettingOutlined />} >
                    {item.utility}
                  </Button>
                </Col>
                <Col span={24} >
                  <Button type="primary" shape="round" ghost style={{ width: '100%' }}>
                    Дэлгэрэнгүй
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      ))}
      {arrayType === 'map' &&
        <Col span={24}>
          <AreaSelector />
          <FieldMap/>
          {/* <img src={map} alt='map'
            style={{ width: '100%', height: '100%' }}
          /> */}
        </Col>
      }
    </Row>
  );
};
export default FieldList;