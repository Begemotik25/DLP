import { Empty } from "antd";
import React from "react";

const Placeholder = ({ description = "No data" }) => {
  return <Empty description={description} />;
};

export default Placeholder;
