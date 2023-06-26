import API from "../utils/api";

export const GroupsService = {
  create: async (data) => {
    return await API.post(`/groups`, data);
  },
  getAll: async () => {
    return await API.get(`/groups`);
  },
};
