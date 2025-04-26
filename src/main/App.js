import './App.css';
import MainLayout from '../components/MainLayout';
import { ConfigProvider } from 'antd';

function App() {
  // const data = {
  //   borderRadius: 6,
  //   colorPrimary: 'red',
  //   Button: {
  //     colorPrimary: 'red',
  //   },
  //   Menu: {
  //     itemSelectedBg: 'red',
  //     itemSelectedColor: 'yellow',
  //   },
  // };
  return (
    <ConfigProvider
    // theme={{
    //   // token: {
    //   //   colorPrimary: data.colorPrimary,
    //   //   borderRadius: data.borderRadius,
    //   // },
    //   components: {
    //     // Button: {
    //     //   colorPrimary: data.Button?.colorPrimary,
    //     //   algorithm: data.Button?.algorithm,
    //     // },
    //     Menu: {
    //       // itemSelectedBg: data.Menu?.itemSelectedBg ?? "yellow", // Background for selected item
    //       // itemSelectedColor: data.Menu?.itemSelectedColor ?? data.colorPrimary, // Text color for selected item
    //       itemBorder: "none",
    //     },
    //   },
    // }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
