import React from "react";
import { Avatar, Row } from "antd";

import MyModal from "../../../atoms/Modal";
import { useInstitutionStore } from "../../../../stores/institutions";

import "./styles.scss";

const InstitutionInfoModal = () => {
  const singleInstitution = useInstitutionStore(
    (state) => state.singleInstitution
  );
  const changeInstitutionInfoModalState = useInstitutionStore(
    (state) => state.changeInstitutionInfoModalState
  );

  const isOpen = useInstitutionStore(
    (state) => state.isOpenInstitutionInfoModal
  );

  const handleCancel = () => {
    changeInstitutionInfoModalState(false);
  };

  const modalContent = (
    <div className="modal-content">
      <Row align={"center"}>
        <Avatar className="avatar" size={164} src={singleInstitution.photos} />
      </Row>
    </div>
  );

  return (
    <MyModal
      className={"institution-info-modal"}
      content={modalContent}
      title="Institution info"
      isOpen={isOpen}
      handleCancel={handleCancel}
    />
  );
};

export default InstitutionInfoModal;
