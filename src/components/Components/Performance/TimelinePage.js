import React from "react";
import { Progress, Table, DatePicker } from "antd";
import moment from "moment";
import CircleStatusCard from "./CircleStatusCard";
import GanttChart from "./GanttChart";

const columns = [
    { title: "Бүтээгдэхүүн", dataIndex: "product" },
    { title: "Технологит ажил", dataIndex: "task" },
    { title: "Талбайн хэмжээ", dataIndex: "area" },
    {
        title: "Эхлэх огноо",
        dataIndex: "startDate",
        render: date => <DatePicker value={moment(date)} />
    },
    {
        title: "Дуусах огноо",
        dataIndex: "endDate",
        render: date => <DatePicker value={moment(date)} />
    },
    {
        title: "Гүйцэтгэлийн хувь",
        dataIndex: "progress",
        render: progress => <Progress percent={progress} size="small" />
    }
];

const data = [
    {
        key: "1",
        product: "Улаанбуудай",
        task: "Тарихын өмнөх бодис цацалт",
        area: "100га",
        startDate: "2025-01-01",
        endDate: "2025-01-01",
        progress: 62
    },
    {
        key: "2",
        product: "Рапс",
        task: "Тарихын өмнөх бодис цацалт",
        area: "100га",
        startDate: "2025-01-01",
        endDate: "2025-01-01",
        progress: 100
    },
    {
        key: "3",
        product: "Ногоон тэжээл",
        task: "Тарихын өмнөх бодис цацалт",
        area: "160га",
        startDate: "2025-01-01",
        endDate: "2025-01-01",
        progress: 11
    }
];

const TimelinePage = () => {
    return (
        <div style={{ padding: 0 }}>
            {/* Header Summary */}
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 10 }}>
                <CircleStatusCard percent={92} title="Үрслэгээ" subtitle="18га/360 га" color="#fa541c" />
                <CircleStatusCard percent={68} title="Арчилгаа" subtitle="18га/360 га" color="#1890ff" />
                <CircleStatusCard percent={75} title="Хураалт" subtitle="18га/360 га" color="#d48806" />
                <CircleStatusCard percent={75} title="Уринш" subtitle="18га/360 га" color="#722ed1" />
            </div>
            <GanttChart />
            {/* Table Section */}
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                style={{ marginTop: 20 }}
            />
        </div>
    );
};

export default TimelinePage;
