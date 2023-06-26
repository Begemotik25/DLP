import React, { useEffect } from "react";
import { Divider } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import CreateGroupModal from "../../components/organisms/Modals/CreateGroup";
import { useGroupsStore } from "../../stores/groups";
import GroupsTable from "../../components/organisms/GroupsTable";

const Groups = () => {
  const groupsStore = useGroupsStore();

  useEffect(() => {
    groupsStore.getAll();
  }, []);

  const handleCreate = () => {
    groupsStore.changeCreateGroupModalState(true);
  };

  return (
    <div className="groups-page">
      <ContentHeaderSection handleCreate={handleCreate} />
      <Divider />
      <GroupsTable />
      <CreateGroupModal />
    </div>
  );
};

export default Groups;
