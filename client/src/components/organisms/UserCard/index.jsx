import React from "react";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";

import Placeholder from "../../atoms/Placeholder";

const { Meta } = Card;

const UserCard = ({ data = {} }) => {
  const getFullName = (data) => {
    return data.firstName + " " + data.lastName;
  };
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        data?.image ? (
          <Image alt="User image" src={data?.image} />
        ) : (
          <Placeholder description="No avatar" />
        )
      }
      actions={[<InfoCircleOutlined key="info" />, <EditOutlined key="edit" />]}
    >
      <Meta
        title={getFullName(data)}
        description={
          <>
            <div>{data?.role}</div>
            <div>{data?.description}</div>
            <div>{data?.group?.name}</div>
          </>
        }
      />
    </Card>
  );
};

export default UserCard;
