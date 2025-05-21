import React from 'react';
import TaskBar from './TaskBar'; // Assuming it's in a separate file

const GanttChart = () => {
    return (
        <div style={{ position: 'relative', height: '20rem', border: '1px solid #ccc', marginTop: 10 }}>
            {/* Month grid background (optional) */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: `${i * (100 / 12)}%`,
                        width: `${100 / 12}%`,
                        height: '100%',
                        borderLeft: '1px solid #eee',
                        textAlign: 'center',
                        fontSize: 12,
                        color: '#999',
                    }}
                >
                    {i + 1} сар
                </div>
            ))}

 {/* Vertical line */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: `${45}%`, // Adjust this percentage to place the line at the desired month
                    height: '100%',
                    width: '3px',
                    backgroundColor: 'orange',
                    zIndex: 1,
                }}
            ></div>
            {/* Task bars */}
            <TaskBar
                top={80}
                left={5} // 3rd month
                width={25} // spans 3 months
                color="#fa541c"
                label="Ургалт"
                area="360га/360 га"
                percent={100}
            />

            <TaskBar
                top={140}
                left={16.66}
                width={25}
                color="#722ed1"
                label="Тарихын өмнөх бодис цацалт"
                area="288га/360 га"
                percent={80}
            />

            <TaskBar
                top={260}
                left={41.66}
                width={16.66}
                color="#1890ff"
                label="Таримлын ургамал хамгаалах бодис цацалт"
                area="18га/360 га"
                percent={5}
            />

            <TaskBar
                top={180}
                left={66.66}
                width={16.66}
                color="#d48806"
                label="Ургац хураалт"
                area="0га/360 га"
                percent={0}
            />

        </div>
    );
};

export default GanttChart;
