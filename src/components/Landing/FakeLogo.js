import { Flex, notification } from 'antd';
function FakeLogo({ height, themeData }) {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, title, description) => {
    api[type]({
      message: title,
      description: description,
    });
  };
  return (
    <Flex justify="" align='center'>
      {contextHolder}
      <span style={{ height: height ?? '2.5rem', 
      color: themeData.colorPrimary ,
      fontSize:'xx-large',
      fontWeight: 'bold',
    }} alt='logo' onClick={() => {
        openNotificationWithIcon('success','Систем олдсонгүй','Тун удахгүй ...');
      }} >A</span>
    </Flex>
  );
}

export default FakeLogo;
