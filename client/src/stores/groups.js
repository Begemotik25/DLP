import { create } from "zustand";

import { GroupsService } from "../services/groups";

const initialState = {
  groups: [],
  fullList: [],
  isOpenCreateGroupModal: false,
};

export const useGroupsStore = create((set, get) => ({
  ...initialState,

  getAll: async () => {
    const { data } = await GroupsService.getAll();
    const formattedData = data.map((i) => {
      return { ...i, key: i.name, membersCount: 0 };
    });
    set({ fullList: formattedData, groups: formattedData });
    return data;
  },

  create: async (values) => {
    const { data } = await GroupsService.create(values);
    get().getAll();
    return data;
  },

  changeCreateGroupModalState: async (isOpen) => {
    set({ isOpenCreateGroupModal: isOpen });
  },

  reset: () => {
    set(initialState);
  },
}));
