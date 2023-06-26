import React from "react";
import { Avatar, Row, Space, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./styles.scss";
import { useUsersStore } from "../../../stores/users";

const ProfileHeader = () => {
  const usersStore = useUsersStore();
  const user = usersStore.user;
  return (
    <div className="profile-header page-block">
      <Row>
        <Col span={2}>
          <Avatar size={72} className="header__avatar" src={user.avatar} />
        </Col>
        <Col span={20}>
          <div className="content-block full-name">
            {user.firstName + " " + user.lastName}
          </div>
          <div className="content-block description">{user.role}</div>
        </Col>
        <Col span={2} className="edit-block">
          <Button>Edit</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileHeader;
