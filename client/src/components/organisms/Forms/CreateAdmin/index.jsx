import React from "react";
import { Form } from "antd";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import { useUsersStore } from "../../../../stores/users";
import { useInstitutionStore } from "../../../../stores/institutions";
import SelectFormItem from "../../../molecules/FormItems/Select";
import { ROLES } from "../../../../constants/user";
import UploadFormItem from "../../../molecules/FormItems/Upload";

const CreateAdminForm = () => {
  const [form] = Form.useForm();
  const userStore = useUsersStore((state) => state);
  const createUser = useUsersStore((state) => state.create);
  const institutionStore = useInstitutionStore((state) => state);

  const onFinish = (values) => {
    const { avatar, ...restValues } = values;
    createUser({ ...restValues, role: ROLES.ADMIN });
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
      <TextInputFormItem name="tempPassword" placeholder="Temp password" />
      <UploadFormItem name="avatar" extra={"Upload avatar"} />
      <SelectFormItem
        name="institutionId"
        placeholder="Institution"
        options={institutionStore.fullList.map((institution) => {
          return { value: institution.id, label: institution.title };
        })}
      />

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateAdminForm;
