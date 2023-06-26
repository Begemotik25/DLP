import React from "react";
import { Button, Popover } from "antd";
import { NotificationOutlined } from "@ant-design/icons";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Notifications = () => {
  return (
    <Popover content={content} title="Title">
      <Button type="primary" shape="circle" icon={<NotificationOutlined />} />
    </Popover>
  );
};

export default Notifications;
