import React from "react";

import MyModal from "../../../atoms/Modal";
import { useUsersStore } from "../../../../stores/users";
import CreateGroupForm from "../../Forms/CreateGroup";
import { useGroupsStore } from "../../../../stores/groups";

const CreateGroupModal = () => {
  const groupsStore = useGroupsStore();

  const changeCreateGroupModalState = groupsStore.changeCreateGroupModalState;

  const isOpen = groupsStore.isOpenCreateGroupModal;

  const handleCancel = () => {
    changeCreateGroupModalState(false);
  };

  return (
    <MyModal
      content={<CreateGroupForm />}
      title="Create Group"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateGroupModal;
