import { create } from "zustand";

import { UsersService } from "../services/users";
import { CookieManager } from "../utils/CookieManager";
import avatar from "../assets/images/avatar.jpg";
import { UserOutlined } from "@ant-design/icons";

const initialState = {
  user: {},
  users: [],
  fullList: [],
  students: [],
  teachers: [],
  admins: [],
  parents: [
    {
      id: 1,
      firstName: "John",
      lastName: "Collins",
      group: {
        name: 409,
      },
      description: "The parent of the student Haisiuk Alina",
    },
  ],
  userInfo: {},
  isOpenCreateUserModal: false,
};

export const useUsersStore = create((set, get) => ({
  ...initialState,

  getMe: async () => {
    const id = CookieManager.getId();
    const { data } = await UsersService.getById(id);
    const ava = data.role === "admin" ? avatar : <UserOutlined />;
    set({ user: { ...data, avatar: ava } });
    return data;
  },

  getAll: async () => {
    const { data } = await UsersService.getAll();
    set({ fullList: data });
    return data;
  },

  getByRole: async (role) => {
    let { data } = await UsersService.getByRole(role.toLowerCase());
    const entityName = `${role.toLowerCase()}s`;
    const ava = role === "admin" ? avatar : null;
    data = data.map((i) => {
      return {
        image: ava,
        ...i,
      };
    });
    console.log(data);
    set({ [entityName]: data || [] });
    return data;
  },

  create: async (values) => {
    const { data } = await UsersService.create(values);
    get().getByRole(values.role);
    return data;
  },

  changePassword: async (values) => {
    const userId = CookieManager.getId();
    const { data } = await UsersService.changePassword(userId, values);
    return data;
  },

  changeCreateUserModalState: async (isOpen) => {
    set({ isOpenCreateUserModal: isOpen });
  },

  reset: () => {
    set(initialState);
  },
}));
