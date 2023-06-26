import React from "react";
import { Form } from "antd";
import { KeyOutlined } from "@ant-design/icons";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import { useUsersStore } from "../../../../stores/users";
import { ROLES } from "../../../../constants/user";
import BaseButton from "../../../atoms/Buttons/BaseButton";
import { useGroupsStore } from "../../../../stores/groups";
import SelectFormItem from "../../../molecules/FormItems/Select";

const CreateStudentForm = () => {
  const [form] = Form.useForm();
  const createUser = useUsersStore((state) => state.create);
  const getByRole = useUsersStore((state) => state.getByRole);
  const userStore = useUsersStore((state) => state);

  const groupsStore = useGroupsStore();
  const groups = groupsStore.groups;

  const onFinish = (values) => {
    createUser({ ...values, role: ROLES.STUDENT }).then(() => {
      getByRole(ROLES.STUDENT);
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
        name="groupID"
        placeholder="Group"
        options={groups.map((group) => {
          return { value: group.id, label: group.name };
        })}
      />

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateStudentForm;
