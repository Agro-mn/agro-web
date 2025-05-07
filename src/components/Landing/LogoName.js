import { Flex } from 'antd';
import logo from '../../assets/img/agro_logo_yellow.png';
import { useNavigate } from "react-router-dom";
import { MainContext } from '../MainContext';
import { useContext } from 'react';
function LogoName({ }) {
  const { setSystem } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <Flex align='center' justify='center' style={{ height: '100%' }}>
      <img src={logo} style={{ height: '2.5rem' }} alt='logo' onClick={() => {
        localStorage.setItem("system", "main");
        setSystem("main");
        navigate(localStorage.getItem("loggedUser") ? "/dashboard" : "/");
      }} />
    </Flex>
  );
}

export default LogoName;
