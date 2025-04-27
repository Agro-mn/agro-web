import './App.css';
import MainLayout from '../components/MainLayout';
import { ConfigProvider } from 'antd';

function App() {
  const themeData = {
    colorPrimary: '#00b96b',
    algorithm: true // Enable algorithm
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Input: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Menu: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Checkbox: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
          Form: {
            colorPrimary: themeData.colorPrimary,
            algorithm: themeData.algorithm,
          },
        },
      }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
