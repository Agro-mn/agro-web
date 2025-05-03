import React, { useEffect, useState } from 'react';
import { Flex, Button } from 'antd';
import { AlertOutlined, UserOutlined } from '@ant-design/icons';

const LoginComp = () => {

  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
  }, []);

  return (
    <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
      {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
      <Button type='text'>MN</Button>
      <Button icon={<UserOutlined />} onClick={() => { }}>{loggedUser ?? 'Нэвтрэх'}</Button>
    </Flex>
  );
};

export default LoginComp;