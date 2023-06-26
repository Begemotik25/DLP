import React from "react";
import { Button } from "antd";

const BaseButton = ({ title, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {title}
    </Button>
  );
};

export default BaseButton;
