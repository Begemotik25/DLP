import React, { useState } from "react";
import { Upload, Form, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const rules = [
  {
    required: true,
    message: "Please upload your file!",
  },
];

const UploadFormItem = ({
  required = false,
  name,
  formats,
  extra = "Upload university photo",
}) => {
  const [isFileUploaded, setFileUploaded] = useState(false);
  const normFile = (e) => {
    if (e.file) {
      setFileUploaded(true);
    }
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <Form.Item
      rules={required ? rules : []}
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra={extra}
    >
      <Upload name={name} customRequest={dummyRequest} listType="picture">
        {isFileUploaded ? null : (
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        )}
      </Upload>
    </Form.Item>
  );
};

export default UploadFormItem;
