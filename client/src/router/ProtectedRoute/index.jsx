import React, { Suspense, useEffect } from "react";

import { Navigate, Outlet } from "react-router-dom";

import PageTemplate from "../../components/templates/PageTemplate";
import { CookieManager } from "../../utils/CookieManager";
import { useUsersStore } from "../../stores/users";

const ProtectedRouter = () => {
  const usersStore = useUsersStore();
  useEffect(() => {
    usersStore.getMe();
  }, []);

  let token = CookieManager.get("access_token");

  return token ? (
    <PageTemplate>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </PageTemplate>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRouter;
