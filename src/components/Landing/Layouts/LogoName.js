import { Flex } from 'antd';
import logo from '../../../assets/img/agro_logo_yellow.png';

function LogoName() {
  return (
    <Flex align='center' justify='center' style={{ color: 'rgb(216 156 87)', height: '100%' }}>
      <img src={logo} style={{ height: '4rem' }} alt='logo' />
      <span style={{ fontSize: 'xxx-large' }}>GRO</span>
    </Flex>
  );
}

export default LogoName;
