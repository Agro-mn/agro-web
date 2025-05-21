import { Col, Divider, Flex, Row } from "antd";
import app from "../../../assets/img/system.png";
import laptop from "../../../assets/img/Laptop_002 [Converted].png";
import web from "../../../assets/img/7475605.png";
import React from "react";

function SystemPage() {

    // const headerStyle = {
    //     fontSize: 'x-large',
    //     fontWeight: 'bold',
    //     color: '#272826',
    //     fontFamily: "var(--main-font)",
    //     marginBottom: '1rem',
    // };
    const textStyle = {
        fontSize: 'medium',
        color: '#272826',
        fontFamily: "var(--main-font)",
        marginBottom: '1rem',
    };
    const style = {
        width: '80vw',
        // height: `calc(100vh - 10rem)`,
        // marginTop: '10rem'
    };
    return (
        <div style={style}>
            {/* <Row gutter={[20, 20]}>
                <Col span={24} style={headerStyle}>
                    <span style={{ borderBottom: '3px solid #4C6B45' }}>Холбогдох системүүд</span>
                </Col>
            </Row> */}
            <Flex align='center' justify='center'>
                <Row gutter={[20, 20]} style={{ width: '70vw', marginTop: '20px' }}>
                <Col span={24}><Divider/></Col>
                    <Col span={12}>
                        <img src={web} alt='' style={{ height: '40vh' }} />
                    </Col>
                    <Col span={12}>
                        <div style={{ padding: '0px' }}>
                            {/* <div style={headerStyle}>
                                <span style={{ borderBottom: '3px solid #4C6B45' }}>Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем</span>
                            </div> */}
                            <div style={textStyle}>
                                <span style={{ display: 'flex', textIndent: '100px', textAlign: 'justify' }}>
                                    Agro Mongolia нь Монголын хөдөө аж ахуйн бүх салбарыг хамарсан тариаланч, фермер, малчин бүрт зориулсан тоон дэмжлэгтэй цогц шийдэл юм.
                                
                                    <br/><br/>Манай платформоор та:
                                <br/><br/>✅ Зардлаа өдөр бүр хялбар бүртгэж, улирлын болон жилийн тайлангаа ухаалгаар хянаж автоматаар гаргах боломжтой.
                                <br/><br/>✅ Апп болон вэбээр хэзээ ч, хаанаас ч хялбар нэвтрэх боломжтой.

                                <br/><br/>✅ Үр тариа, Хүнсний ногоо, Хүлэмжийн аж ахуй, Мал аж ахуй, техник тоног төхөөрөмж, үр бордоо, ургамал хамгаах бодис, ажиллах хүч, үйлчилгээ гэх мэт бүх төрлийн зарыг нэг дор үзэж, байршуулж чадна.

                                <br/><br/>💡Agro Mongolia – Хөдөө аж ахуйн салбарт ажиллагсдад зориулагдсан нэгдсэн систем, ухаалаг дэмжлэг, тоон ирээдүй!
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}><Divider/></Col>
                    <Col span={12}>
                        <div style={{ padding: '0px' }}>
                            {/* <div style={headerStyle}>
                                <span style={{ borderBottom: '3px solid #4C6B45' }}>Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем</span>
                            </div> */}
                            <div style={textStyle}>
                                <span style={{ display: 'flex', textIndent: '100px', textAlign: 'justify' }}>
                                AgroMongolia – Хөдөө аж ахуйн төлөвлөгөө, хяналт, зарын ухаалаг нэгдэл
                                <br/><br/>📌Төлөвлөгөө гарга – Хөрс боловсруулалтаас тариа хураалт хүртэл ажлын төлөвлөгөөг хялбар үүсгэх
                                <br/><br/>📌 Гүйцэтгэлээ хяна – Бодит өгөгдөл дээр үндэслэн төлөвлөгөөний хэрэгжилтийг хянах
                                <br/><br/>📌 Зардлаа хяна – Үйлдвэрлэлийн зардал болон бараа материалын хяналт
                                <br/><br/>📊 График, дашбоард – Автомат тайлан, ухаалаг графикууд, ойлгомжтой дүрслэл\
                                <br/><br/>🛒 Зарын нэгдсэн орчин – Үр, бордоо, техник, мал, газар, ажиллах хүч зэрэг бүх төрлийн зарууд нэг дор төвлөрсөн
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <img src={laptop} alt='' style={{ height: '40vh' }} />
                    </Col>
                    <Col span={24}><Divider/></Col>
                </Row>
            </Flex>
        </div>
    );
}
export default SystemPage;
