import React from "react";
import { Form, Input } from "antd";

const rules = [
  {
    required: true,
    message: "Please input your Email!",
  },
];

const TextInputFormItem = ({ required = true, name, placeholder }) => {
  return (
    <div className="text-input-form-item">
      <Form.Item name={name} rules={required ? rules : []}>
        <Input placeholder={placeholder} />
      </Form.Item>
    </div>
  );
};

export default TextInputFormItem;
