import React from "react";

import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Space } from "antd";
import { useState } from "react";

import GenerateRandomPasswordButton from "../../../atoms/Buttons/GenerateRandomPasswordButton";

const rules = [
  {
    required: true,
    message: "Please input Temp Password!",
  },
];

const TempPasswordFormItem = ({ required = true }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {};

  return (
    <div className="temp-password-form-item">
      <Space>
        <Form.Item name="tempPassword" rules={required ? rules : []}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Temp Password"
          />
        </Form.Item>
        <GenerateRandomPasswordButton handleClick={handleClick} />
      </Space>
    </div>
  );
};

export default TempPasswordFormItem;
