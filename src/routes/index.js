import HomePage from "../containers/Home/HomePage";
import UsersManagement from "../containers/Admin/Users";
import Login from "../containers/Login/index";

import Admin from "../containers/Admin";
import QuanLyPhim from "../containers/Admin/Movie";
import QuanLyUsers from "../containers/Admin/Users";
import SignInSignUp from "../containers/Home/SignInSignUp";
import QuanLyNguoiDung from "../containers/Admin/Users";
import NewsPage from "../containers/Home/NewsPage";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/news",
    component: NewsPage,
  },  
  {
    exact: false,
    path: "/signin",
    component: SignInSignUp,
  },
];
const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: Admin,
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
    path: "/quanlyphim",
    component: QuanLyPhim,
  },
  {
    exact: false,
    path: "/quanlynguoidung",
    component: QuanLyNguoiDung,
  },
];
export { routesHome, routesAdmin };
