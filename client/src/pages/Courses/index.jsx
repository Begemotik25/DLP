import React from "react";
import { Pagination, Space, Divider } from "antd";

import CourseCard from "../../components/organisms/CourseCard";
import ContentHeaderSection from "../../components/organisms/ContentHeaderSection";

import "./styles.scss";
import { useCourseStore } from "../../stores/course";
import CreateCourseModal from "../../components/organisms/Modals/CreateCourse";

const Courses = () => {
  const courseStore = useCourseStore();

  const handleRefresh = () => {};

  const handleCreate = () => {
    courseStore.changeCreateCourseModalState(true);
  };

  return (
    <div className="courses-page">
      <ContentHeaderSection
        handleCreate={handleCreate}
        handleRefresh={handleRefresh}
      />
      <Divider />
      <div className="content-block">
        <Space size={"middle"} className="cards-list">
          {courseStore.courses?.map((i) => {
            return <CourseCard key={i.id} data={i} />;
          })}
        </Space>
        {courseStore.courses?.length ? (
          <Pagination
            className="pagination-block"
            defaultCurrent={1}
            total={1}
          />
        ) : null}
      </div>
      <CreateCourseModal />
    </div>
  );
};

export default Courses;
