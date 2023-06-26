import API from "../utils/api";

export const InstitutionsService = {
  create: async (data) => {
    return await API.post(`/institutions`, data);
  },
  getAll: async () => {
    return await API.get(`/institutions`);
  },
};
