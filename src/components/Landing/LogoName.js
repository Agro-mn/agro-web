import { Flex } from 'antd';
import logo from '../../assets/img/agro_logo_yellow.png';
import { useNavigate } from "react-router-dom";
import { MainContext } from '../MainContext';
import { useContext } from 'react';
function LogoName({ height }) {
  const { setSystem } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <Flex justify="" align='center'>
      <img src={logo} style={{ height: height ?? '2.5rem' }} alt='logo' onClick={() => {
        localStorage.setItem("system", "main");
        setSystem("main");
        navigate(localStorage.getItem("loggedUser") ? "/dashboard" : "/");
      }} />
    </Flex>
  );
}

export default LogoName;
