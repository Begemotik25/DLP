import { Button } from "antd";
import React from "react";

const SubmitButton = ({ text }) => {
  return (
    <Button type="primary" htmlType="submit" className="submit-btn">
      {text}
    </Button>
  );
};

export default SubmitButton;
