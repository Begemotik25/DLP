import Cookies from "js-cookie";
import { parseJwt } from "../common";

export const CookieManager = {
  set: (name, value, config = {}) => Cookies.set(name, value, config),
  get: (name) => Cookies.get(name),
  getAccessToken: () => Cookies.get("access_token"),
  getId: () => {
    const accessToken = Cookies.get("access_token");
    const decodedToken = parseJwt(accessToken);
    return decodedToken.userId;
  },
  remove: (name) => Cookies.remove(name),
};
