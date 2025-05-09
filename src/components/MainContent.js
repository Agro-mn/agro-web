import { Col, Row, Flex } from 'antd';
import { useEffect } from 'react';

function MainContent({ items }) {
  useEffect(() => {
  }, [items])
  return (
    <Row>
      {items.length === 0 && <p>No items to display</p>}
      {items.map((item) => (
        <Col key={item.key} id={item.key} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Flex align="center" justify="center" style={{ width: '100%' }}>
            {item.comp || <p>Component not found</p>}
          </Flex>
        </Col>
      ))}
    </Row>

  );
}

export default MainContent;
