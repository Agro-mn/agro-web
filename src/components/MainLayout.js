import { Layout } from 'antd';
import TopHeader from './Layouts/TopHeader';
import WeatherApp from './Layouts/WeatherApp';

function MainLayout() {
  return (
    <Layout >
      <div ><TopHeader /></div>
      <Layout.Content style={{ minHeight: 'calc(100vh - 10rem)' }}>
        <WeatherApp />
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: '#80808030', height: '5rem' }}>Footer</Layout.Footer>
    </Layout>
  );
}

export default MainLayout;
