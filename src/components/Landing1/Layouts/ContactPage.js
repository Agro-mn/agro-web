/* eslint-disable jsx-a11y/anchor-is-valid */
import { EnvironmentOutlined, FacebookFilled, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from "@ant-design/icons";
import {Col, Row} from "antd";
import React from "react";

function ContactPage(){
    const style = {
        width: '70vw',
        background: '#8EA386',
        color: '#272826',
        fontWeight: 'bold',
        borderRadius: '20px',
        padding: ' 2rem 4rem',
        fontFamily: "var(--main-font)",
        marginBottom: '2rem'
    };
    const headerStyle = {
        fontSize: 'x-large',
        fontWeight: 'bold',
        color: '#272826',
        fontFamily: "var(--main-font)",
        marginBottom: '1rem',
    };
    const mainStyle = {
        width: '80vw',
        height: `30vh`,
    };
    
    
      const colHeaderStyle = {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontFamily: "var(--main-font)",
        fontSize: '1rem',
      };
    
      const iconStyle = {
        marginRight: '0.5rem',
        color: '#fff',
      };
    
      const linkStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontFamily: "var(--main-font)",
        color: '#fff',
      };
    
      const qrStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2rem',
      };
    
      const qrImageStyle = {
        width: '80px',
        height: '80px',
        backgroundColor: '#fff',
        borderRadius: '8px',
      };
    return(
        <div style={mainStyle}>
            <Row gutter={[20,20]}>
                <Col span={24} style={headerStyle}>
                    <span style={{borderBottom: '3px solid #4C6B45'}}>Холбоо барих</span>
                </Col>
                <div style={style}>
                <Row gutter={[40, 20]}>
            <Col xs={24} sm={12} md={6}>
              <div style={colHeaderStyle}><EnvironmentOutlined style={iconStyle} />Хаяг:</div>
              <div style={{color: '#fff', fontFamily: "var(--main-font)", fontWeight:500  }}>
                Сүхбаатар дүүрэг, <br />
                1-р хороо, <br />
                Централ тауэр, 333 тоот
              </div>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <div style={colHeaderStyle}><PhoneOutlined style={iconStyle} />Холбоо барих:</div>
              <div style={{color: '#fff', fontFamily: "var(--main-font)", fontWeight:500 }}>
                +976 70113344 <br />
                +976 99063344
              </div>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <div style={colHeaderStyle}><MailOutlined style={iconStyle} />Холбоо барих:</div>
              <div style={{color: '#fff', fontFamily: "var(--main-font)", fontWeight:500  }}>
                <a href="mailto:support@agromongolia.mn" style={linkStyle}>
                  support@agromongolia.mn
                </a>
                <a href="#" style={linkStyle}><FacebookFilled style={iconStyle} />Facebook</a>
                <a href="#" style={linkStyle}><InstagramOutlined style={iconStyle} />Instagram</a>
                <a href="#" style={linkStyle}><TwitterOutlined style={iconStyle} />Twitter</a>
              </div>
            </Col>

            <Col xs={24} sm={12} md={6}>
              <div style={colHeaderStyle}>Апп татах:</div>
              <div style={qrStyle}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://www.apple.com/app-store/"
                  alt="App Store QR"
                  style={qrImageStyle}
                />
                  <div style={{color: '#fff', fontFamily: "var(--main-font)", fontWeight:500 }}>App Store</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem'}}>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://play.google.com/store"
                    alt="Play Store QR"
                    style={qrImageStyle}
                  />
                  <div style={{color: '#fff', fontFamily: "var(--main-font)", fontWeight:500 }}>Play Store</div>
                </div>
              </div>
            </Col>
          </Row>
                </div>

            </Row>
        </div>
    );
}
export default ContactPage;
