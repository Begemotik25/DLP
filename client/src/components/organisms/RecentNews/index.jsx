import React from "react";
import { List, Empty, Button } from "antd";

import "./styles.scss";
import { useUsersStore } from "../../../stores/users";
import { ROLES } from "../../../constants/user";

const RecentNews = () => {
  const usersStore = useUsersStore();
  const user = usersStore.user;
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <div className="recent-news-block page-block">
      <div className="recent-news-header">
        <h2>Recent news</h2>
        {user.role === ROLES.ADMIN ? (
          <Button type="primary">Create</Button>
        ) : null}
      </div>
      <Empty className="empty-icon" />
      {/* <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className="list-item">
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      /> */}
    </div>
  );
};

export default RecentNews;
