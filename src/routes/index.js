import HomePage from "../containers/Home/HomePage";
import UsersManagement from "../containers/Admin/Users";
import QuanLyPhim from "../containers/Admin/Movie";
import SignInSignUp from "../containers/Home/SignInSignUp";
import QuanLyNguoiDung from "../containers/Admin/Users";
import NewsPage from "../containers/Home/NewsPage";
import TaoLichChieu from '../containers/Admin/QuanLyLichChieu/TaoLichChieu'
import ThongKe from "../containers/Admin/ThongKe";



const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: true,
    path: "/home",
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
    component: ThongKe,
  },
  {
    exact: true,
    path: "/user-management",
    component: UsersManagement,
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
