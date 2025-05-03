import { Button, Col, Flex, Menu, Modal, Row } from 'antd';
import { useEffect, useState } from 'react';
import { AlertOutlined, UserOutlined } from '@ant-design/icons';
import LoginForm from './LoginForm';
import LogoName from '../Layouts/LogoName';
import { useNavigate } from "react-router-dom";

function TopHeader({ onChangeLogin }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState();

  const onClick = e => {
    setCurrent(e.key);
    navigate(e.key === 'home' ? '/' : e.key)
  };
  const items = [
    {
      label: 'Нүүр',
      key: 'home',
      // icon: <AppstoreOutlined />,
    },
    {
      label: 'Дэд систем',
      key: 'landing1',
      // icon: <MailOutlined />,
    },
    {
      label: 'Цаг агаар',
      key: 'weather',
      // icon: <MailOutlined />,
    },

    {
      label: 'Мэдээ мэдээлэл',
      key: 'news',
      // icon: <AppstoreOutlined />,
    },

    {
      label: 'Холбоо барих',
      key: 'cantact',
      // icon: <AppstoreOutlined />,
    },
  ]

  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    setLoggedUser(localStorage.getItem('loggedUser'));
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row
      style={{
        height: '5rem',
        backgroundColor: 'Background',
        borderBottom: "1px solid rgb(209 205 205)", // Adds a bottom border
      }}
    >
      <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4} >
        <LogoName />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} >
        {!loggedUser &&
          <Flex align='center' style={{ height: '100%' }}>
            <Menu
              style={{ borderBottom: '0px', fontWeight: 'bold' }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items} />
          </Flex>
        }
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
        <Flex align='center' justify='right' gap='middle' style={{ height: '100%', marginRight: '1rem' }}>
          {loggedUser && <Button type='text' icon={<AlertOutlined />} >Мэдэгдэл</Button>}
          <Button type='text'>MN</Button>
          <Button icon={<UserOutlined />} onClick={() => { showModal(); }}>{loggedUser ?? 'Нэвтрэх'}</Button>
        </Flex>
      </Col>
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
    </Row>
  );
}

export default TopHeader;
