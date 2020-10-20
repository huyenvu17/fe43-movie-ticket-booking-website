import HomePage from "containers/Home/HomePage";
import UsersManagement from "containers/Admin/Users";
import QuanLyPhim from "containers/Admin/Movie";
import SignInSignUp from "containers/Home/SignInSignUp";
import QuanLyNguoiDung from "containers/Admin/Users";
import NewsPage from "containers/Home/NewsPage";
import Admin from "containers/Admin";
import QuanLyLichChieu from "containers/Admin/QuanLyLichChieu";
import News from "containers/Admin/News";
import UserInfo from "containers/UserInfo";
import NewsDetail from "containers/Home/HomePage/LastestNews/NewsDetail";
import MovieAll from "containers/Home/HomePage/MovieAll";
import DetailMovie from "containers/Home/HomePage/MovieList/MovieDetail";
import Booking from "containers/Home/HomePage/Booking";

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
    path: "/movieall",
    component: MovieAll,
   
  },
  {
    exact: false,
    path: "/movie-detail/:maPhim",
    component: DetailMovie,
  },   
  {
    exact: false,
    path: "/news-detail/:id",
    component: NewsDetail,
  },  
  {
    exact: false,
    path: "/signin",
    component: SignInSignUp,
  },
  {
    exact: false,
    path: "/profile",
    component: UserInfo,
  },
  {
    exact: false,
    path: "/booking/:maLichChieu",
    component: Booking,
  },
  
];
const routesAdmin = [
  {
    exact: false,
    path: "/admin",
    component: Admin,
  },
  {
    exact: false,
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
    component: QuanLyLichChieu,
  },
  {
    exact: false,
    path: "/quanlytintuc", 
    component: News,
  },
];
export { routesHome, routesAdmin };
