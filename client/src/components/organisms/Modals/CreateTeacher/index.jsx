import React from "react";

import MyModal from "../../../atoms/Modal";
import { useUsersStore } from "../../../../stores/users";
import CreateTeacherForm from "../../Forms/CreateTeacher";

const CreateTeacherModal = () => {
  const changeCreateUserModalState = useUsersStore(
    (state) => state.changeCreateUserModalState
  );

  const isOpen = useUsersStore((state) => state.isOpenCreateUserModal);

  const handleCancel = () => {
    changeCreateUserModalState(false);
  };

  return (
    <MyModal
      content={<CreateTeacherForm />}
      title="Create Teacher"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateTeacherModal;
