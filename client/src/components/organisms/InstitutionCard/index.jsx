import React from "react";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";

import Placeholder from "../../atoms/Placeholder";
import { useInstitutionStore } from "../../../stores/institutions";
import photo from "../../../assets/images/institution.jpg";

const { Meta } = Card;

const InstitutionCard = ({ data }) => {
  const institutionStore = useInstitutionStore((state) => state);

  const onClickInfo = () => {
    institutionStore.setSingleInstitution(data);
    institutionStore.changeInstitutionInfoModalState(true);
  };

  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        photo ? (
          <Image alt="Institution image" src={photo} height={300} width={300} />
        ) : (
          <Placeholder />
        )
      }
      actions={[
        <InfoCircleOutlined key="info" onClick={onClickInfo} />,
        <EditOutlined key="edit" />,
      ]}
    >
      <Meta title={data?.title} description={data?.description} />
    </Card>
  );
};

export default InstitutionCard;
