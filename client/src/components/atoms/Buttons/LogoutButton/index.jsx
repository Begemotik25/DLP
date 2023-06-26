import { Button, Tooltip } from "antd";
import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthStore } from "../../../../stores/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const authStore = useAuthStore();

  const onClick = () => {
    authStore.logout();
    navigate("/login");
  };

  return (
    <Tooltip title="Log out">
      <Button
        type="primary"
        shape="circle"
        icon={<LogoutOutlined />}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default LogoutButton;
