import React from "react";
import { Form, Select } from "antd";

const rules = [
  {
    required: true,
    message: "Please input data!",
  },
];

const SelectFormItem = ({ required = true, name, placeholder, ...props }) => {
  return (
    <div className="select-form-item">
      <Form.Item name={name} rules={required ? rules : []}>
        <Select placeholder={placeholder} {...props} />
      </Form.Item>
    </div>
  );
};

export default SelectFormItem;
