import { Col, Flex, Row } from "antd";
import app from "../../../assets/img/system.png";
import React from "react";

function SystemPage() {

    const headerStyle = {
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: '#272826',
        fontFamily: "var(--main-font)",
        marginBottom: '1rem',
    };
    const textStyle = {
        fontSize: 'large',
        color: '#272826',
        fontFamily: "var(--main-font)",
        marginBottom: '1rem',
    };
    const style = {
        width: '80vw',
        height: `calc(100vh - 10rem)`,
        marginTop: '10rem'
    };
    return (
        <div style={style}>
            <Row gutter={[20, 20]}>
                <Col span={24} style={headerStyle}>
                    <span style={{ borderBottom: '3px solid #4C6B45' }}>Холбогдох системүүд</span>
                </Col>
            </Row>
            <Flex align='center' justify='center'>
                <Row gutter={[20, 20]} style={{ width: '60vw', marginTop: '50px' }}>
                    <Col span={12}>
                        <img src={app} alt='' style={{ height: '60vh' }} />
                    </Col>
                    <Col span={12}>
                        <div style={{ padding: '20px' }}>
                            <div style={headerStyle}>
                                <span style={{ borderBottom: '3px solid #4C6B45' }}>Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем</span>
                            </div>
                            <div style={textStyle}>
                                <span style={{ display: 'flex', textIndent: '100px', textAlign: 'justify' }}>Хөдөө аж ажуйн үйлдвэрлэгчдийн нэгдсэн систем аж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн системаж ажуйн үйлдвэрлэгчдийн нэгдсэн систем</span>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Flex>
        </div>
    );
}
export default SystemPage;
