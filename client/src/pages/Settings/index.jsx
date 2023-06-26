import React from "react";

import { Form, Switch, Button, Row, Select } from "antd";

import "./styles.scss";

const { Option } = Select;

const Settings = () => {
  return (
    <div className="settings-page">
      <h2 className="title">Common settings</h2>
      <div className="form-section">
        <Row>
          <Form.Item label="Dark mode">
            <Switch />
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Language">
            <Select
              defaultValue="english"
              options={[
                {
                  value: "english",
                  label: "English",
                },
                {
                  value: "ukrainian",
                  label: "Українська",
                },
              ]}
            />
          </Form.Item>
        </Row>
      </div>

      <Row justify={"end"}>
        <Button type="primary">Save</Button>
      </Row>
    </div>
  );
};

export default Settings;
