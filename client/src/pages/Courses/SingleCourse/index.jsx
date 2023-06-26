import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  Row,
  Upload,
  message,
  Divider,
  DatePicker,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  MinusCircleOutlined,
  InboxOutlined,
} from "@ant-design/icons";

import "./styles.scss";
import { CookieManager } from "../../../utils/CookieManager";
import { useUsersStore } from "../../../stores/users";
import { ROLES } from "../../../constants/user";
const { Dragger } = Upload;

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const studentProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const StudentSingleCourse = () => (
  <div className="content-block">
    <h2 style={{ textAlign: "center" }}>Web Programming</h2>
    <Divider />
    <h4>{`Work name: React.`}</h4>
    <Divider />

    <h4>{`Due Date: 10.06.2023`}</h4>
    <Divider />

    <h4>{`Max points: 6`}</h4>
    <Divider />

    <h4>{`Uploaded file: none`}</h4>
    <Divider />

    <div className="dragger-block">
      <Dragger {...studentProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
    <Divider />
    <Button
      type="primary"
      onClick={() => {
        message.success(`Task saved successfully.`);
      }}
    >
      Save
    </Button>
  </div>
);

const SingleCourse = () => {
  const [form] = Form.useForm();
  const userStore = useUsersStore();
  const isStudent = userStore.user.role === ROLES.STUDENT;
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    message.success(`Tasks saved successfully.`);
  };
  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
  };

  return (
    <div className="single-course-page">
      {isStudent ? (
        <StudentSingleCourse />
      ) : (
        <div className="content-block">
          <Row>
            <h2>Web Programming</h2>
          </Row>
          <Row>
            <Form
              form={form}
              name="dynamic_form_complex"
              onFinish={onFinish}
              style={{
                maxWidth: 880,
              }}
              autoComplete="off"
            >
              <Form.List name="tasks">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }, i) => (
                      <Space key={key} align="baseline">
                        <strong>{i + 1}.</strong>
                        <Form.Item
                          {...restField}
                          label="Name"
                          name={[name, "name"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing name",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          label="Max points"
                          name={[name, "points"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing points",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          label="File"
                          name={[name, "file"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing file",
                            },
                          ]}
                        >
                          <Upload {...props}>
                            <Button icon={<UploadOutlined />}>
                              Click to Upload
                            </Button>
                          </Upload>
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}

                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add work
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      )}
    </div>
  );
};

export default SingleCourse;
