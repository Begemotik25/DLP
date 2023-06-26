import React from "react";
import { Empty, Progress } from "antd";

import "./styles.scss";
import { ROLES } from "../../../constants/user";
import { useUsersStore } from "../../../stores/users";

const CoursesProgress = () => {
  const usersStore = useUsersStore();
  const isStudent = usersStore.user.role === ROLES.STUDENT;
  return (
    <div className="courses-progress-block page-block">
      <h2>Progress</h2>
      {isStudent ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span>Web programming</span>
          <Progress type="circle" percent={0} />
        </div>
      ) : (
        <Empty className="empty-icon" />
      )}
    </div>
  );
};

export default CoursesProgress;
