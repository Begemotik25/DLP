import React from "react";
import { Form } from "antd";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import { useUsersStore } from "../../../../stores/users";
import { ROLES } from "../../../../constants/user";

const CreateTeacherForm = () => {
  const [form] = Form.useForm();
  const createUser = useUsersStore((state) => state.create);
  const getByRole = useUsersStore((state) => state.getByRole);
  const userStore = useUsersStore((state) => state);

  const onFinish = (values) => {
    createUser({ ...values, role: ROLES.TEACHER }).then(() => {
      getByRole(ROLES.TEACHER);
    });
    userStore.changeCreateUserModalState(false);
  };

  return (
    <Form
      name="create_user"
      className="create-user-form"
      form={form}
      onFinish={onFinish}
    >
      <TextInputFormItem name="email" placeholder="Email" />
      <TextInputFormItem name="firstName" placeholder="First name" />
      <TextInputFormItem name="lastName" placeholder="Last name" />

      <div className="temp-password__section">
        <TextInputFormItem
          name="tempPassword"
          placeholder="Temporary password"
        />
      </div>

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateTeacherForm;
