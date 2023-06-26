import React from "react";
import { Input, Space, Button, Tooltip } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import "./styles.scss";

const ContentHeaderSection = ({ handleCreate, handleFind, handleRefresh }) => {
  return (
    <div className="content-header-section">
      <div className="search-field">
        <Space>
          <Input className="search-input" placeholder="Search by name" />
          <Button type="primary">Find</Button>
          <Button>Reset</Button>
        </Space>
      </div>
      <div className="create-button">
        <Space>
          <Tooltip title="Refresh">
            <Button type="primary" shape="circle" icon={<ReloadOutlined />} onClick={handleRefresh}/>
          </Tooltip>
          <Button type="primary" onClick={handleCreate}>
            Create
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ContentHeaderSection;
