import React from "react";
import { Form } from "antd";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import { useUsersStore } from "../../../../stores/users";
import { ROLES } from "../../../../constants/user";

const CreateParent = () => {
  const [form] = Form.useForm();
  const createUser = useUsersStore((state) => state.create);
  const getByRole = useUsersStore((state) => state.getByRole);
  const userStore = useUsersStore((state) => state);
  const students = userStore.students;

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

      <SelectFormItem
        name="studentId"
        placeholder="Student"
        options={students.map((student) => {
          return {
            value: student.id,
            label: `${student.group.name} ${student.firstName} ${student.lastName}`,
          };
        })}
      />

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateParent;
