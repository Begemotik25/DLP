import API from "../utils/api";

export const AuthService = {
  login: async (data) => {
    return await API.post(`/authentication/log-in`, data);
  },
};
