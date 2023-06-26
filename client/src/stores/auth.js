import { create } from "zustand";

import { AuthService } from "../services/auth";
import { CookieManager } from "../utils/CookieManager";

export const useAuthStore = create((set) => ({
  isAuthorized: false,

  login: async (values) => {
    const { data } = await AuthService.login(values);
    CookieManager.set("access_token", data.token);
    set({ isAuthorized: true, user: data.user });
    return data.user;
  },
  logout: () => {
    set({ isAuthorized: false, user: {} });
    CookieManager.remove("access_token");
  },
}));
