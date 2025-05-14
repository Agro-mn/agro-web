import HomeImage from './HomeImage';
import HomeDirection from './HomeDirection';
import HomeSubSystem from './HomeSubSystem';
import HomeContact from './HomeContact';

import LogoName from "./LogoName";
import FakeLogo from "./FakeLogo";

const ThemeData = {
  colorPrimary: '#efd643',
  colorBackground: '#F0F6FF', // from colorPrimary
  colorText: '#efd643',
  algorithm: true
};


const ThemeDataPlatform = {
  colorPrimary: '#2A5DAA',               // Цэнхэр өнгө — технологийн/платформ төрх
  colorBackground: '#F0F6FF',            // Цайвар цэнхэр фон
  colorText: '#2A5DAA',                  // Нэг төрлийн өнгө
  algorithm: true
};

const ThemeDataLoan = {
  colorPrimary: '#9D3B3B',               // Улаан хүрэн өнгө — банк, зээлд тохиромжтой
  colorBackground: '#FFF3F3',            // Зөөлөн ягаан фон
  colorText: '#9D3B3B',
  algorithm: true
};
const Contents = [
  {
    label: 'Нүүр',
    key: 'home',
    comp: <HomeImage themeData={ThemeData} />
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
    comp: <HomeSubSystem ThemeDataLoan={ThemeDataLoan} ThemeDataPlatform={ThemeDataPlatform}/>
    // icon: <AppstoreOutlined />,
  },

  {
    label: 'Холбоо барих',
    key: 'contact',
    comp: <HomeContact themeData={ThemeData} />
    // icon: <AppstoreOutlined />,
  },
];


export { Contents, ThemeData, LogoName , ThemeDataPlatform, ThemeDataLoan, FakeLogo };
