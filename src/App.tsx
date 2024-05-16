import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/authLayout/main";
import ErrorPage from "./components/errorPage/errorPage";
import SignUp from "./components/auth/sign-up";
import SignIn from "./components/auth/signIn/signIn";
import LecturerProfile from "./components/lecturer/updateProfile/updateProfile";
import DashboardLayout from "./components/dashboardLayout/dashboardLayout";
import Overview from "./components/overview/overview";
import Subscribe from "./components/subscribe/subscribe";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<ErrorPage />} path="*" />
        <Route element={<SignUp />} path="/" />
      </Route>
      <Route element={<SignIn />} path="sign-in" />

      <Route element={<DashboardLayout />}>
        <Route element={<Overview />} path="/overview" />
        <Route element={<Subscribe />} path="/subscribe" />
        <Route element={<LecturerProfile />} path="lecturer-profile" />

      </Route>
    </Routes>
  );
}

export default App;
