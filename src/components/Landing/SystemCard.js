import React from 'react';
import { Col, Button, notification } from 'antd';
import { MainContext } from '../MainContext';
import { useNavigate } from 'react-router-dom';

const SystemCard = ({headerStyle, textStyle, image, themeData, title, description, logo, siteUrl, systemName}) => {
  const { setSystem } = React.useContext(MainContext);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, title, description) => {
    api[type]({
      message: title,
      description: description,
    });
  };
  return (<>
  {contextHolder}
    <Col span={12}>
            <img src={image} alt='' style={{ height: '300px', padding: '30px', marginRight: '50px' }} />
          </Col>
          <Col span={12}>
            <div style={{ padding: '20px' }}>
              <div style={headerStyle}>
                <span style={{ borderBottom: `3px solid ${themeData.colorPrimary}` }}>{title}</span>
              </div>
              <div style={textStyle}>
                <span style={{ display: 'flex', textIndent: '100px', textAlign: 'justify' }}>{description}</span>
              </div>
              <Button type='primary' icon={logo} 
              style={{ backgroundColor: themeData.colorBackground, 
                color: themeData.colorPrimary, border: 'none', 
                fontFamily: "var(--main-font)",
                width: '100%',
              }}
              onClick={() => {
                if(systemName === 'platform'){
                    window.open('https://6827b2321d8a1092a7fc4a3a--agroads.netlify.app/', '_blank');
                }
                else if(systemName){
                  localStorage.setItem("system", systemName);
                  setSystem(systemName);
                  navigate(localStorage.getItem("loggedUser") ? "/dashboard" : "/");
                }
                else{
                  openNotificationWithIcon('success','Систем олдсонгүй','Тун удахгүй ...');
                }
            }} 
              >
                <span style={{ fontFamily: "var(--main-font)" }}>{siteUrl}</span>
              </Button>
            </div>
          </Col>
          </>
  );
};

export default SystemCard;