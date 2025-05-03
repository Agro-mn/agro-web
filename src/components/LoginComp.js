import React, { useEffect, useState } from 'react';
import { Flex, Button, Modal } from 'antd';
import { AlertOutlined, UserOutlined } from '@ant-design/icons';
import LoginForm from './LoginForm';

const LoginComp = ({ onChangeLogin }) => {
  const [loggedUser, setLoggedUser] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setLoggedUser(localStorage.getItem('loggedUser'));
  }, []);

  return (
    <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
      {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
      <Button type='text'  >MN</Button>
      <Button type='text' icon={<UserOutlined />} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
      <Modal
        width={'30%'}
        title="Нэвтрэх"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm onChangeLogin={() => {
          handleCancel();
          setLoggedUser(localStorage.getItem('loggedUser'));
          onChangeLogin();
        }} />
      </Modal>
    </Flex>
  );
};

export default LoginComp;