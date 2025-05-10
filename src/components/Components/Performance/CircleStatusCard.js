import React from "react";
import { Progress } from "antd";

const CircleStatusCard = ({ percent, title, subtitle, color }) => {
    return (
        <div style={{
            borderRadius: 8,
            padding: '10px 15px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            width: 160
        }}>
            <Progress
                type="circle"
                percent={percent}
                width={60}
                strokeColor={color}
                format={p => `${p}%`}
            />
            <div>
                <div style={{ color: color, fontWeight: 500 }}>{title}</div>
                <div style={{ color: '#888' }}>{subtitle}</div>
            </div>
        </div>
    );
};

export default CircleStatusCard;
