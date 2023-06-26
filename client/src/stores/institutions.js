import { create } from "zustand";

import { InstitutionsService } from "../services/institutions";

export const useInstitutionStore = create((set, get) => ({
  institutions: [],
  fullList: [],
  singleInstitution: {},
  isOpenCreateInstitutionModal: false,
  isOpenInstitutionInfoModal: false,

  getAll: async () => {
    const { data } = await InstitutionsService.getAll();
    set({ fullList: data });
    return data;
  },

  changeCreateInstitutionModalState: async (isOpen) => {
    set({ isOpenCreateInstitutionModal: isOpen });
  },

  changeInstitutionInfoModalState: async (isOpen) => {
    set({ isOpenInstitutionInfoModal: isOpen });
  },

  setSingleInstitution: async (institution) => {
    set({ singleInstitution: institution });
  },

  create: async (values) => {
    const { data } = await InstitutionsService.create(values);
    get().changeCreateInstitutionModalState(false);
    get().getAll();
    return data;
  },
}));
