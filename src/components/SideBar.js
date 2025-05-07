import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const SideBar = ({ style }) => {

  const navigate = useNavigate();
  const [current, setCurrent] = useState();

  const onClick = e => {
    setCurrent(e.key);
    navigate(e.key === 'home' ? '/' : e.key)
  };

  const items = [
    {
      label: 'Дашбоард',
      key: 'dashboard',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Төлөвлөгөө',
      key: 'planning',
      icon: <MailOutlined />,
    },

    {
      label: 'Гүйцэтгэл',
      key: 'performance',
      icon: <AppstoreOutlined />,
    },

    {
      label: 'Тайлан',
      key: 'report',
      icon: <AppstoreOutlined />,
    },
  ]

  return (
    <Menu
      onClick={onClick}
      style={{ width: "100%", fontSize: 'large', height: "calc(100vh - 5rem)", ...style }}
      mode="inline"
      selectedKeys={[current]}
      items={items}
    />
  );
}

export default SideBar;
