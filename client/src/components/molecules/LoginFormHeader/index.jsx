import React from "react";

import logoJPG from "../../../assets/images/logo.jpg";

import "./styles.scss";

const LoginFormHeader = () => {
  return (
    <div className="login-form__header">
      <div className="login-form__header-icon">
        <img
          className="login-form__logo-img"
          src={logoJPG}
          alt="logo"
          height={110}
          width={110}
        />
      </div>
    </div>
  );
};

export default LoginFormHeader;
