import React, { useEffect } from "react";
import { Divider, Space } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import UserCard from "../../components/organisms/UserCard";
import { useUsersStore } from "../../stores/users";
import { useInstitutionStore } from "../../stores/institutions";
import CreateAdminModal from "../../components/organisms/Modals/CreateAdmin";
import { ROLES } from "../../constants/user";

const Admins = () => {
  const usersStore = useUsersStore();
  const institutionsStore = useInstitutionStore();
  const users = usersStore.admins;

  useEffect(() => {
    institutionsStore.getAll();
    usersStore.getByRole(ROLES.ADMIN);
  }, []);

  const handleCreate = () => {
    usersStore.changeCreateUserModalState(true);
  };

  return (
    <>
      <ContentHeaderSection handleCreate={handleCreate} />
      <Divider />
      <Space size={"middle"} className="cards-list">
        {users.map((i) => {
          return <UserCard key={i.id} data={i} />;
        })}
      </Space>
      <CreateAdminModal />
    </>
  );
};

export default Admins;
