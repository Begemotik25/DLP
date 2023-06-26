import React from "react";
import { Table, Tag, Space } from "antd";
import { useGroupsStore } from "../../../stores/groups";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Members count",
    dataIndex: "membersCount",
    key: "membersCount",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const GroupsTable = () => {
  const groupsStore = useGroupsStore();
  return (
    <div className="groups-table">
      <Table columns={columns} dataSource={groupsStore.groups} />
    </div>
  );
};

export default GroupsTable;
