import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Space } from "antd";
import React, { useState } from "react";

import PageHeader from "../../organisms/PageHeader";
import { useUsersStore } from "../../../stores/users";
import MyMenu from "../../organisms/Menu";

import "./styles.scss";
import LogoutButton from "../../atoms/Buttons/LogoutButton";
import Notifications from "../../organisms/Notifications";

const { Header, Sider, Content } = Layout;

const PageTemplate = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const user = useUsersStore((state) => state.user);
  return (
    <Layout className="page-template__layout">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <PageHeader />
        <MyMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="header">
          <Space>
            <Notifications />
            <Avatar
              size={36}
              className="header__avatar"
              src={"admin" ? user.avatar : <UserOutlined />}
            />
            <div className="header__full-name">{`${user.firstName} ${user.lastName}`}</div>
            <LogoutButton />
          </Space>
        </Header>
        <br />
        <Content className="content">
          <div className="children-section">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageTemplate;
