import React, { useEffect, useState } from "react";

import Router from "./router";
import { useUsersStore } from "./stores/users";
import { useAuthStore } from "./stores/auth";

const App = () => {
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  const getMe = useUsersStore((state) => state.getMe);

  useEffect(() => {
    if (isAuthorized) {
      getMe();
    }
  }, [isAuthorized]);

  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default App;
