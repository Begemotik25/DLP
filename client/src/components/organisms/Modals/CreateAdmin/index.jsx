import React from "react";

import MyModal from "../../../atoms/Modal";
import { useUsersStore } from "../../../../stores/users";
import CreateAdminForm from "../../Forms/CreateAdmin";

const CreateAdminModal = () => {
  const changeCreateAdminModalState = useUsersStore(
    (state) => state.changeCreateUserModalState
  );

  const isOpen = useUsersStore((state) => state.isOpenCreateUserModal);

  const handleCancel = () => {
    changeCreateAdminModalState(false);
  };

  return (
    <MyModal
      content={<CreateAdminForm />}
      title="Create Admin"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateAdminModal;
