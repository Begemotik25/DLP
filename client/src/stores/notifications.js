import { create } from "zustand";

export const useNotificationStore = create((set) => ({
  notification: "",
  add: (value) => set({ notification: value }),
  remove: () => set({ notification: "" }),
}));
