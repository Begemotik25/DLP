import React from "react";

import MyModal from "../../../atoms/Modal";
import { useInstitutionStore } from "../../../../stores/institutions";
import CreateInstitutionForm from "../../Forms/CreateInstitution";

const CreateInstitutionModal = () => {
  const changeCreateInstitutionModalState = useInstitutionStore(
    (state) => state.changeCreateInstitutionModalState
  );

  const isOpen = useInstitutionStore(
    (state) => state.isOpenCreateInstitutionModal
  );

  const handleCancel = () => {
    changeCreateInstitutionModalState(false);
  };

  return (
    <MyModal
      content={<CreateInstitutionForm />}
      title="Create Institution"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default CreateInstitutionModal;
