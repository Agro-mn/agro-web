import { Col, Row } from 'antd';
import background from "../../../assets/img/landing1/wheat-background.jpg";

function MainPage(){
    const style = {
        width: '100vw',
        height: `100vh`,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return(
        <div style={style}>

        </div>
    );
}
export default MainPage;
