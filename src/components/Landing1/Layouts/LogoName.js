import logo from '../../../assets/img/agro_logo_gradient.png';
import { Flex, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { MainContext } from '../../MainContext';
import { useContext } from 'react';
function LogoName({ height }) {
    const { setSystem } = useContext(MainContext);
    const navigate = useNavigate();
    return (
        <Row>
            <Flex justify="" align='center'>
                <img src={logo} style={{ height: height ?? '2.5rem', marginLeft: height ? '0' : '2rem' }} alt='logo' onClick={() => {
                    localStorage.setItem("system", "portal");
                    setSystem("portal");
                    navigate(localStorage.getItem("loggedUser") ? "/dashboard" : "/");
                }} />
                {/*<div style={{color: 'var(--main-green)', fontWeight: 'bold', fontFamily: 'var(--main-font)'}}>AgroMongolia</div>*/}

            </Flex>
        </Row>
    );
}

export default LogoName;
