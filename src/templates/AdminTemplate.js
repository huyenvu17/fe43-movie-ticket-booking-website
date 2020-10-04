import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import "../content/styles/admin/sb-admin-2.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {dangXuatAction} from '../redux/actions/QuanLyNguoiDungAction'
import { userLogin } from "../Config/config";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { BiLogOut } from 'react-icons/bi';
function AdminLayout(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(true);
    }
  }
  const taiKhoan = useSelector(
    (state) => state.QuanLyNguoiDungReducer.taiKhoan
  );

  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(dangXuatAction());
  };

  const renderLogin = () => {
    if (taiKhoan) {
      return (
        <Fragment>
          <div
            className="login_toggle mt-4 ml-5"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ cursor: "pointer",textAlign:"right" }}
          >
            <img
              src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png"
              height="32"
              width="32"
            />
            <span
              style={{ fontSize: "13px", color: "white", marginLeft: "5px" }}
            >
              {taiKhoan}
            </span>
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >                    
                      <MenuItem onClick={handleClose}>
                        <NavLink
                          to="/profile"
                          style={{ textDecoration: "none", color: "#333" }}
                        >
                          <i className="fa fa-user mr-2"></i>
                          Profile
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={Logout}>
                        <BiLogOut className="mr-2" /> Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      );
    }
    return (
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/signin">
          Đăng Nhâp / Đăng Ký
        </NavLink>
      </li>
    );
  };
  return (
    <div id="page-top">
      <div id="wrapper">
        <NavbarAdmin />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
          <nav className="navbar navbar-expand navbar-light  bg-gradient-primary  topbar mb-4 static-top shadow">
            <div style={{display:"flex" , marginLeft:"80%"}}>
            {renderLogin()}
            </div>    
            </nav>
            <div className="container-fluid">{props.children}</div>
          </div>
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © MOTI 2020</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  );
}
