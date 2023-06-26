import {
  UserOutlined,
  HomeOutlined,
  ControlOutlined,
  BankOutlined,
  IdcardOutlined,
  FolderOutlined,
  GroupOutlined,
  BarChartOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ROLES } from "../../../constants/user";
import { useUsersStore } from "../../../stores/users";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = {
  [ROLES.SUPERADMIN]: [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Institutions", "institutions", <BankOutlined />),
    getItem("Admins", "admins", <UserOutlined />),
    getItem("Students", "students", <UserOutlined />),
    getItem("Teachers", "teachers", <UserOutlined />),
    getItem("Parents", "parents", <UserOutlined />),
    getItem("Courses", "courses", <FolderOutlined />),
    getItem("Statistics", "statistics", <BarChartOutlined />),
    getItem("Profile", "profile", <IdcardOutlined />),
    getItem("Settings", "settings", <ControlOutlined />),
  ],
  [ROLES.ADMIN]: [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Chats", "chats", <WechatOutlined />),
    getItem("Groups", "groups", <GroupOutlined />),
    getItem("Students", "students", <UserOutlined />),
    getItem("Teachers", "teachers", <UserOutlined />),
    getItem("Parents", "parents", <UserOutlined />),
    getItem("Courses", "courses", <FolderOutlined />),
    getItem("Statistics", "statistics", <BarChartOutlined />),
    getItem("Profile", "profile", <IdcardOutlined />),
    getItem("Settings", "settings", <ControlOutlined />),
  ],
  [ROLES.TEACHER]: [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Chats", "chats", <WechatOutlined />),
    getItem("Students", "students", <UserOutlined />),
    getItem("Teachers", "teachers", <UserOutlined />),
    getItem("Courses", "courses", <FolderOutlined />),
    getItem("Statistics", "statistics", <BarChartOutlined />),
    getItem("Profile", "profile", <IdcardOutlined />),
    getItem("Settings", "settings", <ControlOutlined />),
  ],
  [ROLES.STUDENT]: [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Chats", "chats", <WechatOutlined />),
    getItem("Students", "students", <UserOutlined />),
    getItem("Teachers", "teachers", <UserOutlined />),
    getItem("Courses", "courses", <FolderOutlined />),
    getItem("Parents", "parents", <UserOutlined />),
    getItem("Statistics", "statistics", <BarChartOutlined />),
    getItem("Profile", "profile", <IdcardOutlined />),
    getItem("Settings", "settings", <ControlOutlined />),
  ],
  [ROLES.PARENT]: [
    getItem("Home", "home", <HomeOutlined />),
    getItem("Profile", "profile", <IdcardOutlined />),
    getItem("Settings", "settings", <ControlOutlined />),
  ],
};

const MyMenu = () => {
  const location = useLocation();
  const usersStore = useUsersStore();
  const userRole = usersStore.user.role;
  const isTempPassword = usersStore.user.tempPassword;
  return (
    <Menu mode="inline" theme="dark" selectedKeys={[location.pathname]}>
      {items?.[userRole]?.map((item) => {
        return (
          <Menu.Item
            disabled={isTempPassword}
            key={"/" + item.key}
            icon={item.icon}
          >
            <Link to={"/" + item.key}>{item.label}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MyMenu;
