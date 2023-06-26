import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const rules = [
  {
    required: true,
    message: "Please input your Email!",
  },
];

const EmailFormItem = ({ required = true }) => {
  return (
    <div className="email-form-item">
      <Form.Item name="email" rules={required ? rules : []}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
    </div>
  );
};

export default EmailFormItem;
