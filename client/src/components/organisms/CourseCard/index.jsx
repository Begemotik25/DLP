import React from "react";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Card, Progress } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const CourseCard = ({ data = {} }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: 300,
      }}
      actions={[<InfoCircleOutlined key="info" />, <EditOutlined key="edit" />]}
    >
      <Meta
        title={
          <a
            onClick={() => {
              navigate("/courses/4");
            }}
          >
            Course: {data.name}
          </a>
        }
        description={
          <>
            <div>{`Group: ${data?.group}`}</div>
            <div>{`No. of tasks: ${data.tasks}`}</div>
            <Progress percent={data?.progress} size="small" />
          </>
        }
      />
    </Card>
  );
};

export default CourseCard;
