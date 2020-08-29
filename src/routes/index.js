import HomePage from "../containers/Home/HomePage";
import AboutPage from "../containers/Home/AboutPage";
import Dashboard from "../containers/Admin/Dashboard";
import UsersManagement from "../containers/Admin/Users";
import Login from "../containers/Admin/Login";
import Register from "../containers/Admin/Register";
import ForgotPassword from "../containers/Admin/ForgotPassword";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
];
const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: Dashboard,
  },
  {
    exact: true,
    path: "/user-management",
    component: UsersManagement,
  },
  {
    exact: false,
    path: "/login",
    component: Login,
  },
  {
    exact: false,
    path: "/register",
    component: Register,
  },
  {
    exact: false,
    path: "/forgot-password",
    component: ForgotPassword,
  },
];
export { routesHome, routesAdmin };
