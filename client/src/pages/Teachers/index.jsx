import React, { useEffect } from "react";
import { Divider, Space } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import UserCard from "../../components/organisms/UserCard";
import { useUsersStore } from "../../stores/users";
import { ROLES } from "../../constants/user";
import CreateTeacherModal from "../../components/organisms/Modals/CreateTeacher";

import "./styles.scss";

const Teachers = () => {
  const usersStore = useUsersStore((state) => state);
  const getByRole = usersStore.getByRole;
  const changeCreateUserModalState = usersStore.changeCreateUserModalState;
  const teachers = usersStore.teachers;

  useEffect(() => {
    getByRole(ROLES.TEACHER);
  }, []);

  const handleCreate = () => {
    changeCreateUserModalState(true);
  };

  return (
    <div className="users-page">
      <ContentHeaderSection handleCreate={handleCreate} />
      <Divider />
      <Space size={"middle"} className="users-list">
        {teachers?.map((i) => {
          return <UserCard key={i.id} data={i} />;
        })}
      </Space>
      <CreateTeacherModal />
    </div>
  );
};

export default Teachers;
