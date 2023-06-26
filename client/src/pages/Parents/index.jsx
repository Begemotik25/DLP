import React, { useEffect } from "react";
import { Divider, Space } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import UserCard from "../../components/organisms/UserCard";
import { useUsersStore } from "../../stores/users";
import CreateStudentModal from "../../components/organisms/Modals/CreateStudent";
import { ROLES } from "../../constants/user";

import "./styles.scss";

const Parents = () => {
  const usersStore = useUsersStore((state) => state);
  const getByRole = usersStore.getByRole;
  const changeCreateUserModalState = usersStore.changeCreateUserModalState;
  const parents = usersStore.parents;

  useEffect(() => {
    // getByRole(ROLES.PARENT);
    getByRole(ROLES.STUDENT);
  }, []);

  const handleCreate = () => {
    changeCreateUserModalState(true);
  };
  console.log(parents);
  return (
    <div className="users-page">
      <ContentHeaderSection handleCreate={handleCreate} />
      <Divider />
      <Space size={"middle"} className="users-list">
        {parents?.map((i) => {
          return <UserCard key={i.id} data={i} />;
        })}
      </Space>
      <CreateStudentModal />
    </div>
  );
};

export default Parents;
