import React from "react";

import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const rules = [
  {
    required: true,
    message: "Please input your Password!",
  },
];

const PasswordFormItem = ({
  name = "password",
  placeholder = "Password",
  required = true,
}) => {
  return (
    <div className="password-form-item">
      <Form.Item name={name} rules={required ? rules : []}>
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={placeholder}
        />
      </Form.Item>
    </div>
  );
};

export default PasswordFormItem;
