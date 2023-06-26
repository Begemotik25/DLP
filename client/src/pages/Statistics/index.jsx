import React from "react";
import { Button, Row, Col, Statistic } from "antd";

import "./styles.scss";

const Statistics = () => {
  return (
    <div className="statistics-page">
      <div className="statistics-block">
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Admins" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Students" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Teachers" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Parents" value={0} />
          </Col>
        </Row>
      </div>

      <div className="statistics-block">
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Active Groups" value={4} />
          </Col>
          <Col span={6}>
            <Statistic title="No. of members" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Active Chats" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="No. of messages" value={1} />
          </Col>
        </Row>
      </div>

      <div className="statistics-block">
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Active Courses" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Finished Courses" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="Pending Courses" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="Deleted Courses" value={0} />
          </Col>
        </Row>
      </div>

      <div className="statistics-block">
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Active Tasks" value={1} />
          </Col>
          <Col span={6}>
            <Statistic title="Finished Tasks" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="Pending Tasks" value={0} />
          </Col>
          <Col span={6}>
            <Statistic title="Deleted Tasks" value={0} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Statistics;
