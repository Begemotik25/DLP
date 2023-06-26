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
import { useCourseStore } from "../../../../stores/course";
import { useEffect } from "react";

const CreateCourseForm = () => {
  const [form] = Form.useForm();
  const courseStore = useCourseStore();
  const groupsStore = useGroupsStore();

  useEffect(() => {
    groupsStore.getAll();
  }, []);

  const createCourse = useCourseStore((state) => state.create);
  const getByRole = useUsersStore((state) => state.getByRole);
  const userStore = useUsersStore((state) => state);

  const groups = groupsStore.groups;

  const onFinish = (values) => {
    createCourse({ ...values });
    courseStore.changeCreateCourseModalState(false);
  };

  return (
    <Form
      name="create_course"
      className="create-course-form"
      form={form}
      onFinish={onFinish}
    >
      <TextInputFormItem name="name" placeholder="Name" />

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

export default CreateCourseForm;
