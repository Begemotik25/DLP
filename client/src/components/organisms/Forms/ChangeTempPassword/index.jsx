import React from "react";
import { Form, Space, message } from "antd";
import { useNavigate } from "react-router-dom";

import PasswordFormItem from "../../../molecules/FormItems/Password";
import LoginFormHeader from "../../../molecules/LoginFormHeader";
import EmailFormItem from "../../../molecules/FormItems/Email";
import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import BaseButton from "../../../atoms/Buttons/BaseButton";
import { useUsersStore } from "../../../../stores/users";

const ChangeTempPasswordForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const usersStore = useUsersStore();

  const onFinish = (values) => {
    const { confirmPassword, password } = values;
    if (confirmPassword === password) {
      usersStore.changePassword({ password }).then((response) => {
        if (response.id) {
          navigate("/home");
        }
      });
    } else {
      message.error("Error - Password mismatch");
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      name="normal_login"
      className="login-form page-block"
      form={form}
      onFinish={onFinish}
    >
      <h2>Please, change your temporary password to use the app</h2>
      <PasswordFormItem />
      <PasswordFormItem placeholder="Confirm password" name="confirmPassword" />
      <Space>
        <SubmitButton text={"Change"} />
        <BaseButton onClick={onReset} title={"Reset"} className="secondary" />
      </Space>
    </Form>
  );
};

export default ChangeTempPasswordForm;
