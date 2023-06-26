import React from "react";
import { KeyOutlined } from "@ant-design/icons";

import BaseButton from "../BaseButton";

const GenerateRandomPasswordButton = ({ handleClick }) => {
  return <BaseButton icon={<KeyOutlined />} onClick={handleClick} />;
};

export default GenerateRandomPasswordButton;
