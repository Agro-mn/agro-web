import React, { useEffect } from 'react';
import { Card, Row, Col, List, Flex, Affix } from 'antd';
import testIcon from '../../img/testIcon.svg';

const News = () => {
  const testData = [
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
    { title: 'medee 1', description: "medee medee medee medee" },
  ]
  const testTitle = [
    { title: 'medee 1', description: "Техник, тоног төхөөрөмж" },
    { title: 'medee 1', description: "Тарималын үр" },
    { title: 'medee 1', description: "Ургамал хамгаалах бодис, бордоо" },
    { title: 'medee 1', description: "Шатахуун, тос тосолгоо" },
    { title: 'medee 1', description: "ХАА-н ажлын байр" },
    { title: 'medee 1', description: "ХАА-н сэлбэг хэрэгсэл, багаж" },
    { title: 'medee 1', description: "ХАА-н обьект, тариалангийн газар" },
    { title: 'medee 1', description: "Ферм, мал аж ахуй" },
    { title: 'medee 1', description: "ХАА-н бүтээгдэхүүн" },
    { title: 'medee 1', description: "Мах, Сүү, Сүүн бүтээгдэхүүн" },
  ]
  useEffect(() => {
  }, []);

  return (
    <Row >
      <Col span={24}>

      </Col>
      <Col span={24}>
        <Row style={{ padding: '1rem 4rem' }}>
          <List
            grid={{
              gutter: 24,
            }}
            dataSource={testTitle}
            renderItem={item => (
              <List.Item>
                <Flex style={{ width: '20rem' }}>
                  <img alt="example" src={testIcon} style={{ width: '4rem' }} />
                  <h3>{item.description}</h3>
                </Flex>
              </List.Item>
            )}
          />
        </Row>
      </Col>

      <Col span={24}>
        <Row style={{ padding: '1rem 4rem' }}>
          <Col span={24}>
            <h1>Мэдээ, мэдээлэл</h1>
          </Col>
          <Col span={24}>
            <List
              grid={{
                gutter: 24,
              }}
              dataSource={testData}
              renderItem={item => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: '20rem' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Card.Meta title={item.title} description={item.description} />
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default News;