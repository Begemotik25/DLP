import React from "react";
import { Form } from "antd";

import SubmitButton from "../../../atoms/Buttons/SubmitButton";
import { useInstitutionStore } from "../../../../stores/institutions";
import TextInputFormItem from "../../../molecules/FormItems/TextInput";
import UploadFormItem from "../../../molecules/FormItems/Upload";

const CreateInstitutionForm = () => {
  const [form] = Form.useForm();
  const createInstitution = useInstitutionStore((state) => state.create);

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      photo: values.upload?.[0],
    };
    delete formattedValues.upload;
    createInstitution(formattedValues);
  };

  return (
    <Form
      name="create_institution"
      className="create-institution-form"
      form={form}
      onFinish={onFinish}
    >
      <TextInputFormItem name="title" placeholder="Title" />
      <TextInputFormItem name="description" placeholder="Description" />
      <TextInputFormItem name="email" placeholder="Email" />
      <UploadFormItem name="photo" />

      <SubmitButton text={"Create"} />
    </Form>
  );
};

export default CreateInstitutionForm;
