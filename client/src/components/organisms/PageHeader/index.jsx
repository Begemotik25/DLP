import React from "react";

import logoJPG from "../../../assets/images/logoDLP.jpg";

import "./styles.scss";

const PageHeader = () => {
  return (
    <div className="page-logo">
      <img
        className="my-menu__logo"
        src={logoJPG}
        alt="logo"
        height={50}
        width={50}
      />
    </div>
  );
};

export default PageHeader;
