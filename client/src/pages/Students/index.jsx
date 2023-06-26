import React, { useEffect } from "react";
import { Divider, Space } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import UserCard from "../../components/organisms/UserCard";
import { useUsersStore } from "../../stores/users";
import CreateStudentModal from "../../components/organisms/Modals/CreateStudent";
import { ROLES } from "../../constants/user";

import "./styles.scss";

const Students = () => {
  const usersStore = useUsersStore((state) => state);
  const getByRole = usersStore.getByRole;
  const changeCreateUserModalState = usersStore.changeCreateUserModalState;
  const students = usersStore.students;

  useEffect(() => {
    getByRole(ROLES.STUDENT);
  }, []);

  const handleCreate = () => {
    changeCreateUserModalState(true);
  };

  return (
    <div className="users-page">
      <ContentHeaderSection handleCreate={handleCreate} />
      <Divider />
      <Space size={"middle"} className="users-list">
        {students?.map((i) => {
          return <UserCard key={i.id} data={i} />;
        })}
      </Space>
      <CreateStudentModal />
    </div>
  );
};

export default Students;
