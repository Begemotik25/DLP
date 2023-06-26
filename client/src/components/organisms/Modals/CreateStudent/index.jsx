import React from "react";

import MyModal from "../../../atoms/Modal";
import { useUsersStore } from "../../../../stores/users";
import CreateStudentForm from "../../Forms/CreateStudent";

const CreateStudentModal = () => {
  const changeCreateUserModalState = useUsersStore(
    (state) => state.changeCreateUserModalState
  );

  const isOpen = useUsersStore((state) => state.isOpenCreateUserModal);

  const handleCancel = () => {
    changeCreateUserModalState(false);
  };

  return (
    <MyModal
      content={<CreateStudentForm />}
      title="Create Student"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateStudentModal;
