import React from "react";
import { List, Empty } from "antd";

import "./styles.scss";
import { useUsersStore } from "../../../stores/users";
import { ROLES } from "../../../constants/user";

const NearestTasks = () => {
  const usersStore = useUsersStore();
  const isStudent = usersStore.user.role === ROLES.STUDENT;
  const data = [
    {
      title: "Web programming.",
      description: "Task 1. React. Due date: 10.06.2023",
    },
  ];

  return (
    <div className="nearest-tasks-block page-block">
      <h2>Nearest task</h2>
      {!isStudent ? (
        <Empty className="empty-icon" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className="list-item">
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default NearestTasks;
