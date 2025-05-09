import React, { useContext, useEffect, useState } from 'react';
import { Flex, Button, Modal } from 'antd';
import { AlertOutlined, UserOutlined } from '@ant-design/icons';
import LoginForm from './LoginForm';
import { MainContext } from './MainContext';

const LoginComp = ({ onChangeLogin }) => {
  const {loggedUser} = useContext(MainContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
   
  }, []);

  return (
    <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem', }}>
      {loggedUser && <Button type="primary" shape="round" ghost icon={<AlertOutlined />} >Мэдэгдэл</Button>}
      <Button type="primary" shape="round" ghost ><h3>MN</h3></Button>
      <Button type='primary' shape="round" ghost icon={<UserOutlined style={{ fontSize: 'large' }} />} onClick={() => { showModal(); }}><h3>{loggedUser ?? 'Нэвтрэх'}</h3></Button>
      <Modal
        width={'30%'}
        title="Нэвтрэх"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm onChangeLogin={() => {
          handleCancel();
          onChangeLogin();
        }} />
      </Modal>
    </Flex>
  );
};

export default LoginComp;