import { Avatar, Button, Input, Space } from "antd";
import React from "react";

const Profile = () => {
  return (
    <div className="page-block">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Avatar size={128} />
        <Input defaultValue={"Alina"} disabled />
        <Input defaultValue={"Student"} disabled />
        <Input placeholder={"Description"} disabled />
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default Profile;
