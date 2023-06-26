import React from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import PasswordFormItem from "../../../molecules/FormItems/Password";
import LoginFormHeader from "../../../molecules/LoginFormHeader";
import EmailFormItem from "../../../molecules/FormItems/Email";
import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import BaseButton from "../../../atoms/Buttons/BaseButton";
import { useAuthStore } from "../../../../stores/auth";

import "./styles.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const login = useAuthStore((state) => state.login);

  const onFinish = (values) => {
    login(values).then((response) => {
      if (response.tempPassword) {
        navigate("/change-temp-password");
      } else if (response.id) {
        navigate("/home");
      }
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
    >
      <header>
        <LoginFormHeader />
      </header>
      <footer>
        <div className="login-form__subtitle">
          Quickly. Comfortably. Safely.
        </div>
        <EmailFormItem />
        <PasswordFormItem />
        <div className="login-form__buttons-section">
          <SubmitButton text={"Sign in"} />
          <BaseButton onClick={onReset} title={"Reset"} className="secondary" />
        </div>
      </footer>
    </Form>
  );
};

export default LoginForm;
