import MainPage from "./Layouts/MainPage";
import DirectionPage from "./Layouts/DirectionPage";
import SystemPage from "./Layouts/SystemPage";
import CompanyPage from "./Layouts/CompanyPage";
import ContactPage from "./Layouts/ContactPage";

import LogoName from "./Layouts/LogoName";

const Contents1 = [
  {
    label: 'Нүүр',
    key: 'home',
    comp: <MainPage />
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'Чиглэл',
    key: 'direction',
    comp: <DirectionPage />
    // icon: <MailOutlined />,
  },
  {
    label: 'Систем',
    key: 'system',
    comp: <SystemPage />
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'Хамтрагч',
    key: 'company',
    comp: <CompanyPage />
    // icon: <AppstoreOutlined />,
  },
  {
    label: 'Холбоо барих',
    key: 'contact',
    comp: <ContactPage />
    // icon: <AppstoreOutlined />,
  },
];

const ThemeData1 = {
  colorPrimary: '#4C6B45',
  colorText: '#4C6B45',
  algorithm: true, // Enable algorithm
};


export { Contents1, ThemeData1, LogoName as LogoName1 };
