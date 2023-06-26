import React from "react";

import MyModal from "../../../atoms/Modal";
import { useUsersStore } from "../../../../stores/users";
import CreateGroupForm from "../../Forms/CreateGroup";
import { useGroupsStore } from "../../../../stores/groups";
import { useCourseStore } from "../../../../stores/course";
import CreateCourseForm from "../../Forms/CreateCourseForm";

const CreateCourseModal = () => {
  const courseStore = useCourseStore();

  const changeCreateCourseModalState = courseStore.changeCreateCourseModalState;
  const isOpen = courseStore.isOpenCreateCourseModal;

  const handleCancel = () => {
    changeCreateCourseModalState(false);
  };

  return (
    <MyModal
      content={<CreateCourseForm />}
      title="Create Course"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateCourseModal;
