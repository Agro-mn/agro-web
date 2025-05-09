import { Card, Col, Divider, Row } from 'antd';
import background from "../../../assets/img/landing1/pivot-family-9l-LASwTeWQ-unsplash.jpg";
import testIcon from "../../../assets/img/testIcon.svg";
import minCloudNigth from "../../../assets/img/minCloudNigth.png";
import React from "react";

function MainPage() {
    const style = {
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        color: 'white',
        fontFamily: "var(--main-font)",
        fontWeight: '900'
    };

    const testData = [
        {
            city: "Сэлэнгэ, Цагаан нуур",
            dayOfYear: "2025-04-24 (ПҮР)",
            day: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            },
            nigth: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            }
        }, {
            city: "Сэлэнгэ, Цагаан нуур",
            dayOfYear: "2025-04-24 (ПҮР)",
            day: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            },
            nigth: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            }
        }, {
            city: "Сэлэнгэ, Цагаан нуур",
            dayOfYear: "2025-04-24 (ПҮР)",
            day: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            },
            nigth: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            }
        }, {
            city: "Сэлэнгэ, Цагаан нуур",
            dayOfYear: "2025-04-24 (ПҮР)",
            day: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            },
            nigth: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            }
        }, {
            city: "Сэлэнгэ, Цагаан нуур",
            dayOfYear: "2025-04-24 (ПҮР)",
            day: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            },
            nigth: {
                Temperature: 14,
                FeelTemp: 10,
                WindSpeed: 7,
                PoPrecipitation: 0.05,
                Description: "Багавтар үүлтэй"
            }
        },
    ]
    return (
        <div style={style}>
            {/* Header */}
            <Row justify="center" align="middle" style={{ height: 'calc(75vh - 6rem)', marginTop: '6rem'}}>
                <Col>
                    <h1  style={{ margin: 0, fontSize: '3rem', textAlign: 'center', width: '55vw', fontFamily: "var(--main-font)"}}>
                        Хөдөө аж ахуйн үйлдвэрлэгчдийн нэгдсэн систем
                    </h1>
                </Col>
            </Row>

            {/* Cards carousel */}
            <Row justify="center" style={{ flex: 1, overflow: 'hidden' }} >
                <div
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        gap: "2rem",
                        padding: "1rem 5rem",
                        msOverflowStyle: "none",      // IE & Edge
                        scrollbarWidth: "none"        // Firefox
                    }}
                    // you can't hide webkit scrollbar inline—add this to your global CSS:
                    // .your-container::-webkit-scrollbar { display: none; }
                >
                    {testData.map((item, index) => (
                        <Card
                            key={index}
                            size="small"
                            style={{
                                minWidth: "16rem", backgroundColor: "rgba(255,255,255,0.34)", backdropFilter: "blur(10px)", boxShadow: "0 1px 9px rgba(0, 0, 0, 0.3)",
                                border: '1px solid white',
                                color: 'white'
                            }}
                        >
                            <Row gutter={[20, 20]} align='center'>
                                <Col span={7} style={{ borderRight: '3px solid white' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 'xx-large',
                                            fontFamily: "var(--main-font)", fontWeight: 'bold' }}>
                                            {item.day.Temperature}°
                                        </div>
                                        <Divider style={{ margin: '0' }} />
                                        <div style={{ fontSize: 'medium',
                                            fontFamily: "var(--main-font)", fontWeight: 'bold' }}>
                                            {item.day.WindSpeed} м/с
                                        </div>
                                    </div>
                                </Col>
                                <Col span={17}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%'
                                    }}>
                                        <div style={{ fontSize: 'large',
                                            fontFamily: "var(--main-font)", fontWeight: 'bold' }}>
                                            {item.city}
                                        </div>
                                    </div>
                                </Col>
                                {/*<Col span={8} style={{ textAlign: 'right' }}>*/}
                                {/*    <img src={minCloudNigth} alt='cloud' style={{ width: '7rem' }} />*/}
                                {/*</Col>*/}
                            </Row>
                        </Card>
                    ))}
                </div>
            </Row>
        </div>
    );
}

export default MainPage;
