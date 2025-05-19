import { Flex, notification } from 'antd';
function FakeLogo({ height, themeData, systemName }) {
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
      if(systemName === 'platform'){
        window.open('https://6827b2321d8a1092a7fc4a3a--agroads.netlify.app/', '_blank');
    }
    else openNotificationWithIcon('success','Систем олдсонгүй','Тун удахгүй ...');
      }} >A</span>
    </Flex>
  );
}

export default FakeLogo;
