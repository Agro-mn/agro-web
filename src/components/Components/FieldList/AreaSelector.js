import React, { useState } from "react";
import { Input, Collapse, List, Pagination } from "antd";

const { Panel } = Collapse;

const AreaSelector = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const data = [
        "301га",
        "302га",
        "302га",
        "Орших",
        "Баянхангай",
        "",
        "",
        "",
        "",
        "",
        "",
        // Assume more data exists for pagination
    ];

    const pageSize = 10;
    const filteredData = data.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div style={{ width: 300, padding: 10, position: "absolute", 
        top: 20, left: 20, zIndex:1000 }}>
            <Input.Search
                placeholder="Хайх үгэз оруулна уу"
                value={search}
                onChange={e => setSearch(e.target.value)}
                size="large"
            // style={{ marginBottom: 10 }}
            />

            <Collapse size="small" defaultActiveKey={["1"]} style={{ backgroundColor: "#f0f0f0" }}>
                <Panel header="Чандгатай" key="1">
                    <Collapse size="small" defaultActiveKey={["1-1"]} ghost>
                        <Panel header="Төвийн урд" key="1-1">
                            <List
                            size="small" 
                                dataSource={paginatedData}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                            <Pagination
                                current={currentPage}
                                pageSize={pageSize}
                                total={filteredData.length}
                                onChange={page => setCurrentPage(page)}
                                size="small"
                                style={{ textAlign: "center", marginTop: 10 }}
                            />
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </div>
    );
};

export default AreaSelector;
