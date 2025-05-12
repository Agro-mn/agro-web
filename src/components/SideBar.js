import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import menu from "../assets/icons/menu/apps.png";
import inventory from "../assets/icons/menu/box-open-full.png";
import performance from "../assets/icons/menu/chart-simple-horizontal.png";
import plan from "../assets/icons/menu/file-edit.png";
import report from "../assets/icons/menu/newspaper.png";
import arealist from "../assets/icons/menu/land-layers.png";
import {MenuProps} from "antd";

// 1) Extract your tokens under components.Menu
const customTheme = {
  // optional global tokens – adjust your primary, radii, font sizes, etc.
  token: {
    colorPrimary: '#9204de',
    borderRadius: 8,
    fontSize: 14,
  },
  components: {
    Menu: {
      itemBg: '#f0fff2',
      itemColor: '#4C6B45',
      itemHoverBg: 'rgba(76,107,69,0.12)',
      itemSelectedBg: 'rgba(76,107,69,0.34)',
      itemSelectedColor: '#4C6B45',
      itemBorderRadius: 10,
      itemMarginBlock: 10,
      itemMarginInline: 15,
      itemMarginBottom: 0,
      itemPaddingBottom: 5,
      itemHeight: 40,

      subMenuItemBg: '#f0fff2',
      subMenuItemBorderRadius: 10,
      subMenuItemSelectedColor: '#aec4a8',
    }
  }
};

const SideBar = ({ style }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
    navigate(e.key === 'home' ? '/' : e.key);
  };

  const items: MenuProps['items'] = [
    { label: 'Дашбоард',    key: 'dashboard', icon: <img src={menu} style={{marginRight: '5px'}} alt='menu' height={20}/>},
    { label: 'Талбайн жагсаалт', key: 'field-listMenu',icon: <img src={arealist}  style={{marginRight: '5px'}} alt='list' height={20}/>,
      children: [
        {
          label: 'Талбайн жагсаалт1', key: 'field-list',
        }
      ] },
    { label: 'Төлөвлөгөө', key: 'planningMenu',   icon: <img src={plan} style={{marginRight: '5px'}} alt='plan' height={20}/>,
      children: [
        {
          label: 'Төлөвлөгөө1', key: 'planning',
        }
      ]
    },
    { label: 'Гүйцэтгэл',   key: 'performanceMenu',icon: <img src={performance} style={{marginRight: '5px'}} alt='chart' height={20}/>,
      children: [
        {
          label: 'Гүйцэтгэл1', key: 'performance',
        }
      ] },
    { label: 'Бараа материал', key: 'material',   icon: <img src={inventory} style={{marginRight: '5px'}}  alt='box'  height={20}/> },
    { label: 'Тайлан',      key: 'report',     icon: <img src={report}   style={{marginRight: '5px'}}   alt='news' height={20}/> },
  ];

  return (
      // 2) Wrap with ConfigProvider
      <ConfigProvider theme={customTheme}>
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            theme="light"
            style={{
              width: '100%',
              fontSize: '14px',
              fontFamily: 'var(--main-font)',
              fontWeight: '600',
              height: 'calc(100vh - 5rem)',
              ...style
            }}
        />
      </ConfigProvider>
  );
};

export default SideBar;
