import API from "../utils/api";

export const UsersService = {
  create: async (data) => {
    return await API.post(`/users`, data);
  },
  changePassword: async (userId, data) => {
    return await API.post(`/users/change-password/${userId}`, data);
  },
  getAll: async () => {
    return await API.get(`/users`);
  },
  getById: async (id) => {
    return await API.get(`/users/${id}`);
  },
  getByRole: async (role) => {
    return await API.get(`/users/role/${role}`);
  },
};
