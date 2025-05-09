import React, { useEffect } from "react";
import { Row, Col } from "antd";
import white    from "../../../assets/img/kubernetes.svg";
import yellow   from "../../../assets/img/apple-dark.svg";
import green    from "../../../assets/img/chatgpt.svg";
import gradient from "../../../assets/img/chrome.svg";

export default function CompanyPage() {
    const testData = [
        { name: "Agro 1", img: white   },
        { name: "Agro 2", img: yellow   },
        { name: "Agro 3", img: green    },
        { name: "Agro 4", img: gradient },
        { name: "Agro 5", img: white },
        { name: "Agro 6", img: yellow   },
        { name: "Agro 7", img: green    },
        { name: "Agro 8", img: gradient },
    ];

    const slideHeight     = 50;         
    const origCount       = testData.length;
    const totalSlides     = origCount * 2;  
    const durationSeconds = origCount * 2;  

    useEffect(() => {
        const css = `
      .slider {
        position: relative;
        width: 100%;
        height: 60px;
        overflow: hidden;
        display: grid;
        place-items: center;
      }
      .slider::before,
      .slider::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 25%;
        z-index: 2;
        pointer-events: none;
      }
      .slider::before { left: 0; }
      .slider::after  { right: 0; transform: rotateZ(180deg); }

      .slide-track {
        display: flex;
        justify-content: space-between;
        animation-name: scroll;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .slide {
        flex-shrink: 0;
        display: grid;
        place-items: center;
        transition: 0.5s;
        cursor: pointer;
    margin-right: 80px
      }
.slide img{
    filter: grayscale(1);
    transition: 0.3s;
}
.slide img:hover {
    filter: grayscale(0);
}
      @keyframes scroll {
        0%   { transform: translateX(0); }
        100% {
          transform: translateX(calc(
            -1 * var(--slide-width, 0px)
               * var(--orig-count, 1)
          ));
        }
      }
      @media (max-width: 768px) {
        .slider { height: 40px; }
      }
    `;
        const styleTag = document.createElement("style");
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
        return () => document.head.removeChild(styleTag);
    }, []);

    // header styles
    const headerStyle = {
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: '#272826',
        fontFamily: 'var(--main-font)',
        marginBottom: '1rem',
    };
    const containerStyle = {
        width: '80vw',
        height: 'calc(100vh - 10rem)',
        marginTop: '10rem',
    };

    return (
        <div style={containerStyle}>
            <Row gutter={[20, 20]}>
                <Col span={24} style={headerStyle}>
          <span style={{ borderBottom: '3px solid #4C6B45' }}>
            Хамтрагч байгууллагууд
          </span>
                </Col>
            </Row>

            <div
                className="slider"
                style={{
                    '--slide-width': `${slideHeight}px`,
                    '--orig-count':  `${origCount}`,
                    marginTop: '50px'
                }}
            >
                <div
                    className="slide-track"
                    style={{
                        height:             `${slideHeight* totalSlides}px`,
                        animationDuration: `${durationSeconds}s`,
                    }}
                >
                    {[...testData, ...testData].map((item, idx) => (
                        <div
                            key={idx}
                            className="slide"
                            style={{ height: `${slideHeight}px` }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                height={slideHeight}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
