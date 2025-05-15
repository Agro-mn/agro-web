import React from 'react';
import { Tabs } from 'antd';
import ReportFallowSummary from './ReportFallowSummary';
import ReportFieldJournal from './ReportFieldJournal';
import ReportPlantingByField from './ReportPlantingByField';
import ReportPlantingOverview from './ReportPlantingOverview';

const { TabPane } = Tabs;

const Reports = () => {
    return (
        <Tabs size='large' defaultActiveKey="1">
            <TabPane tab="Тариалалт /Нийт/" key="1">
            <ReportPlantingOverview />
            </TabPane>
            <TabPane tab="Тариалалт /Талбайгаар/" key="2">
            <ReportPlantingByField />
            </TabPane>
            <TabPane tab="Талбайн журнал" key="3">
            <ReportFieldJournal />
            </TabPane>
            <TabPane tab="Уриншийн нэгдсэн" key="4">
                <ReportFallowSummary />
            </TabPane>
        </Tabs>
    );
};

export default Reports;