import React, { useEffect } from "react";
import { Row, Col } from "antd";
import altan_taria from "../../../assets/logos/altan_taria.png";
import arvinkhur from "../../../assets/logos/arvinkhur.png";
import butliin_undarga from "../../../assets/logos/butliin_undarga.png";
import ensada from "../../../assets/logos/ensada.png";
import gatsuurt from "../../../assets/logos/gatsuurt.png";
import haa_corp from "../../../assets/logos/haa_corp.jpg";
import hhaau_yam from "../../../assets/logos/hhaau_yam.png";
import mindtech from "../../../assets/logos/mindtech.png";
import msm from "../../../assets/logos/msm.png";
import mts_agro from "../../../assets/logos/mts_agro.jpg";
import mts_group from "../../../assets/logos/mts_group.jpg";
import new_holland_logo from "../../../assets/logos/new_holland_logo.png";

export default function CompanyPage() {
    const data = [
        { name: "MTS Групп", img: mts_group },
        { name: "MTS Агро", img: mts_agro },
        { name: "Хөдөө аж ахуйн корпораци", img: haa_corp },
        { name: "MSM", img: msm },
        { name: "Mindtech", img: mindtech },
        { name: "Хүнс, Хөдөө аж ахуй, хөнгөн үйлдвэрийн яам", img: hhaau_yam },
        { name: "Гацуурт", img: gatsuurt },
        { name: "Ensada", img: ensada },
        { name: "Бүтлийн ундарга", img: butliin_undarga },
        { name: "Арвин хур", img: arvinkhur },
        { name: "Алтан тариа", img: altan_taria },
        { name: "New Holland", img: new_holland_logo },
    ];

    useEffect(() => {
        const css = `
        .slider {
            position: relative;
            width: 100%;
            overflow: hidden;
            height: 120px;
            background: white;
        }

        .slide-track {
            display: flex;
            width: calc(300px * 24 );
            animation: scroll 48s linear infinite;
        }

        .slide {
            padding: 0 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .slide img {
            height: 80px;
            min-width: 80px;
            max-width: 200px;
            object-fit: contain;
            filter: grayscale(1);
            transition: filter 0.3s ease;
        }

        .slide img:hover {
            filter: grayscale(0);
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        `;
        const styleTag = document.createElement("style");
        styleTag.textContent = css;
        document.head.appendChild(styleTag);
        return () => document.head.removeChild(styleTag);
    });

    const headerStyle = {
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: '#272826',
        fontFamily: 'var(--main-font)',
        marginBottom: '1rem',
    };
    const containerStyle = {
        width: '90vw',
        margin: '0 auto',
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

            <div className="slider" style={{ marginTop: '40px' }}>
                <div className="slide-track">
                    {[...data, ...data].map((item, idx) => (
                        <div className="slide" key={idx}>
                            <img src={item.img} alt={item.name} />
                            {/* <div style={{ fontSize: 'small', textAlign: 'center' }}>    
                                {item.name}
                                </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
