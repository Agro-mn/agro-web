import logo from '../../../assets/img/agro_logo_gradient.png';
import {Col, Flex, Row} from "antd";

function LogoName() {
  return (
    <Row>
        <Flex justify="" align='center'>
            <img src={logo} style={{ height: '2.5rem', marginLeft: '2rem'}} alt='logo' />
            {/*<div style={{color: 'var(--main-green)', fontWeight: 'bold', fontFamily: 'var(--main-font)'}}>AgroMongolia</div>*/}

        </Flex>
    </Row>
  );
}

export default LogoName;
