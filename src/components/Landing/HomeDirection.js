import { useEffect, useState } from 'react';
import { Row, Col, Flex } from 'antd';
import dir1 from '../../assets/img/cows.jpg';
import dir2 from '../../assets/img/wheat-background.jpg';
import dir3 from '../../assets/img/dir3.png';
import dir4 from '../../assets/img/carrot.jpg';

const HomeDirection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerStyle = {
        width: '80vw',
        height: 'calc(100vh - 6rem)',
        fontFamily: "var(--main-font)",
        marginTop: '6rem'
    };

    const headerStyle = {
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: '#272826',
        fontFamily: "var(--main-font)",
        marginBottom: '1rem',
    };

    const testData = [
        { title: "Үр тариа",           image: dir2 },
        { title: "Хүлэмжийн аж ахуй", image: dir3 },
        { title: "Хүнсний ногоо",      image: dir4 },
        { title: "Мал аж ахуй",       image: dir1 }
    ];

    return (
        <div style={containerStyle}>
            <Row gutter={[10, 40]}>
                <Col span={24} style={headerStyle}>
                    <span style={{borderBottom: '3px solid #efd643'}}>Үйл ажиллагааны чиглэл</span>
                </Col>

                {testData.map((item, index) => {
                    const isHovered = hoveredIndex === index;
                    const anyHovered = hoveredIndex !== null;

                    // Base 25%; hovered 31%; others 23%
                    let flexBasis = '25%';
                    if (isHovered) flexBasis = '31%';
                    else if (anyHovered) flexBasis = '23%';

                    return (
                        <Col
                            key={index}
                            xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}
                            style={{
                                flex: `0 0 ${flexBasis}`,
                                maxWidth: flexBasis,
                                transition: 'flex 0.3s ease, max-width 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: '1rem',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* the image */}
                                <Flex
                                    align="center"
                                    justify="center"
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        style={headerStyle}
                                    >
                                        <span style={{borderBottom: '3px solid #efd643', fontSize: '14px'}}>{item.title}</span>
                                    </div>
                                </Flex>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        borderRadius: '0.8rem',

                                    }}
                                />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default HomeDirection;
