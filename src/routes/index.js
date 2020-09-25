import HomePage from "../containers/Home/HomePage";
import AboutPage from "../containers/Home/AboutPage";
import UsersManagement from "../containers/Admin/Users";
import Login from "../containers/Login/index";

import Admin from "../containers/Admin";
import QuanLyPhim from "../containers/Admin/Movie";
import QuanLyNguoiDung from "../containers/Admin/Users";
import TaoLichChieu from "../containers/Admin/QuanLyLichCheu/TaoLichChieu";
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
  {
    exact: false,
    path: "/quanLyLichChieu",
    component: TaoLichChieu,
  },
];
export { routesHome, routesAdmin };
