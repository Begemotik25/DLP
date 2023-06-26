import React, { useEffect } from "react";
import { Divider, Space, Pagination } from "antd";

import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";
import InstitutionCard from "../../components/organisms/InstitutionCard";
import CreateInstitutionModal from "../../components/organisms/Modals/CreateInstitution";
import { useInstitutionStore } from "../../stores/institutions";
import InstitutionInfoModal from "../../components/organisms/Modals/InstitutionInfo";

import "./styles.scss";

const Institutions = () => {
  const getAllInstitutions = useInstitutionStore((state) => state.getAll);

  const changeCreateInstitutionModalState = useInstitutionStore(
    (state) => state.changeCreateInstitutionModalState
  );

  const fullList = useInstitutionStore((state) => state.fullList);

  useEffect(() => {
    getAllInstitutions();
  }, []);

  const handleCreate = () => {
    changeCreateInstitutionModalState(true);
  };

  const handleRefresh = () => {
    getAllInstitutions();
  };

  return (
    <div className="institutions-page">
      <ContentHeaderSection
        handleCreate={handleCreate}
        handleRefresh={handleRefresh}
      />
      <Divider />
      <div className="content-block">
        <Space size={"middle"} className="cards-list">
          {fullList.map((i) => {
            return <InstitutionCard key={i.id} data={i} />;
          })}
        </Space>
        {!!fullList.length && (
          <Pagination
            className="pagination-block"
            defaultCurrent={1}
            total={1}
          />
        )}
      </div>
      <CreateInstitutionModal />
      <InstitutionInfoModal />
    </div>
  );
};

export default Institutions;
