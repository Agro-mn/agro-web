import { Flex } from 'antd';
import mainShortLogo from '../../assets/img/mainShortLogo.png';
import { useNavigate } from "react-router-dom";
import { MainContext } from '../MainContext';
import { useContext } from 'react';
function ShortLogo({ height }) {
  const { setSystem } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <Flex justify="" align='center'>
      <img src={mainShortLogo} style={{ height: height ?? '2rem' }} alt='logo' onClick={() => {
        localStorage.setItem("system", "main");
        setSystem("main");
        navigate(localStorage.getItem("loggedUser") ? "/dashboard" : "/");
      }} />
    </Flex>
  );
}

export default ShortLogo;
