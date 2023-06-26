import React, { useEffect } from "react";
import { Space, Col, Row } from "antd";

import ProfileHeader from "../../components/organisms/ProfileHeader";
import { useUsersStore } from "../../stores/users";
import RecentNews from "../../components/organisms/RecentNews";
import NearestTasks from "../../components/organisms/NearestTasks";
import CoursesProgress from "../../components/organisms/CoursesProgress";

const Home = () => {
  const usersStore = useUsersStore();

  useEffect(() => {
    usersStore.getMe();
  }, []);

  return (
    <div className="home-page">
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <ProfileHeader />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <RecentNews />
        </Col>
        <Col span={12}>
          <NearestTasks />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <CoursesProgress />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
