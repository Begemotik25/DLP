import { Modal } from "antd";
import React, { useState, useEffect } from "react";

const MyModal = ({ content, isOpen, title, handleCancel }) => {
  const onCancel = () => {
    handleCancel();
  };

  return (
    <>
      <Modal title={title} open={isOpen} footer={false} onCancel={onCancel}>
        {content}
      </Modal>
    </>
  );
};

export default MyModal;
