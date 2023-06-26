import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/user";

const Groups = lazy(() => import("../pages/Groups"));
const SingleCourse = lazy(() => import("../pages/Courses/SingleCourse"));
const Login = lazy(() => import("../pages/Login"));
const ChangeTempPassword = lazy(() => import("../pages/ChangeTempPassword"));
const Admins = lazy(() => import("../pages/Admins"));
const Students = lazy(() => import("../pages/Students"));
const NoMatch = lazy(() => import("../pages/NoMatch"));
const Home = lazy(() => import("../pages/Home"));
const Institutions = lazy(() => import("../pages/Institutions"));
const Settings = lazy(() => import("../pages/Settings"));
const Teachers = lazy(() => import("../pages/Teachers"));
const Parents = lazy(() => import("../pages/Parents"));
const Courses = lazy(() => import("../pages/Courses"));
const Profile = lazy(() => import("../pages/Profile"));
const Statistics = lazy(() => import("../pages/Statistics"));
const Chats = lazy(() => import("../pages/Chats"));
const SingleInstitution = lazy(() =>
  import("../pages/Institutions/SingleInstitution")
);

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <Suspense fallback={"Loading..."}>
              <Login />{" "}
            </Suspense>
          }
        />
        <Route
          element={
            <ProtectedRoute
              allowedRoles={[
                ROLES.SUPERADMIN,
                ROLES.ADMIN,
                ROLES.STUDENT,
                ROLES.PARENT,
                ROLES.TEACHER,
              ]}
            />
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={[ROLES.SUPERADMIN]} />}>
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/:id" element={<SingleInstitution />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              allowedRoles={[ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT]}
            />
          }
        >
          <Route path="/home" element={<Home />} />
          <Route
            path="/change-temp-password"
            element={<ChangeTempPassword />}
          />
          <Route path="/chats" element={<Chats />} />
          <Route path="/institutions/:id" element={<SingleInstitution />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<Parents />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default Router;
