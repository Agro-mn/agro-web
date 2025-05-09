import HomeImage from './HomeImage';
import HomeDirection from './HomeDirection';
import HomeSubSystem from './HomeSubSystem';
import HomeContact from './HomeContact';

import LogoName from "./LogoName";

const Contents = [
  {
    label: 'Нүүр',
    key: 'home',
    comp: <HomeImage />
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'Чиглэл',
    key: 'direction',
    comp: <HomeDirection />
    // icon: <MailOutlined />,
  },
  {
    label: 'Систем',
    key: 'system',
    comp: <HomeSubSystem />
    // icon: <AppstoreOutlined />,
  },

  {
    label: 'Холбоо барих',
    key: 'contact',
    comp: <HomeContact />
    // icon: <AppstoreOutlined />,
  },
];

const ThemeData = {
  colorPrimary: 'rgb(216 156 87)',
  colorText: 'rgb(216 156 87)',
  algorithm: true, // Enable algorithm
};


export { Contents, ThemeData, LogoName };
