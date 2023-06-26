import React from "react";
import { useEffect } from "react";

import { CookieManager } from "../../utils/CookieManager";
import { useAuthStore } from "../../stores/auth";
import { useWindowSize } from "../../hooks/useWindowSize";
import { getLoginImageByWindowWidth } from "../../helpers/images";
import LoginForm from "../../components/organisms/Forms/Login";

import "./styles.scss";

const Login = () => {
  const logout = useAuthStore((state) => state.logout);
  const windowSize = useWindowSize();
  const windowWidth = windowSize?.[0];

  useEffect(() => {
    if (CookieManager.getAccessToken()) {
      logout();
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-section">
        <div className="login-section__form">
          <LoginForm />
        </div>
        <div className="login-section__picture">
          {getLoginImageByWindowWidth(windowWidth)}
        </div>
      </div>
    </div>
  );
};

export default Login;
