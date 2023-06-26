import React from "react";
import { Form } from "antd";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import { useGroupsStore } from "../../../../stores/groups";

const CreateGroupForm = () => {
  const [form] = Form.useForm();
  const groupsStore = useGroupsStore();

  const onFinish = (values) => {
    groupsStore.create({ ...values });
    groupsStore.changeCreateGroupModalState(false);
  };

  return (
    <Form
      name="create_user"
      className="create-user-form"
      form={form}
      onFinish={onFinish}
    >
      <TextInputFormItem name="name" placeholder="Name" />

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateGroupForm;
