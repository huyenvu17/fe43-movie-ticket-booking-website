import HomePage from "../containers/Home/HomePage";
import AboutPage from "../containers/Home/AboutPage";
import Dashboard from "../containers/Admin/Dashboard";
import UsersManagement from '../containers/Admin/Users';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    exact: false,
    path: '/about',
    component: AboutPage
  }
]
const routesAdmin = [
  {
    exact: true,
    path: '/admin',
    component: Dashboard
  },
  {
    exact: true,
    path: '/user-management',
    component: UsersManagement
  },
]
export {routesHome, routesAdmin};
