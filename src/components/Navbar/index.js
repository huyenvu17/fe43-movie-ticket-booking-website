import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MotiLogo from "content/images/logo/moti-logo-white.svg";
import "content/styles/user/components/_menu.scss";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {dangXuatAction} from 'redux/actions/QuanLyNguoiDungAction'
import { userLogin } from "Config/config";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { BiLogOut } from 'react-icons/bi';

export default function Navbar(props) {
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

  const renderMenu = () => {
    if (
      JSON.parse(JSON.stringify(localStorage.getItem(userLogin))).maLoaiNguoiDung === "QuanTri"
    ) {
      return (
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/admin"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <i className="fa fa-user mr-2"></i>
            Admin
          </NavLink>
        </MenuItem>
      );
    } else {
      return null;
    }
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
            style={{ cursor: "pointer" ,zIndex:"1000" }}
          >
         <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" height="32" width="32" />
            <span style={{fontSize:"13px" , color:"white" , marginLeft:"5px"}}>{taiKhoan}</span>
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
                      {renderMenu()}
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
                        <BiLogOut className="mr-2"/> Logout 
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
    <div className="container menu">
      <nav className="navbar navbar-expand-md menu">
        <a className="navbar-brand" href="/">
          <img src={MotiLogo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="nav navbar-nav ml-auto menu__links">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/#movieList"
              >
                Lịch Chiếu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/#movieTheater"
              >
                Rạp phim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/#latestNews"
              >
                Tin Tức
              </NavLink>
            </li>
            <li className="nav-item">
              {renderLogin()}
            </li>
          </ul>
          {/* <div>{renderLogin()}</div> */}
        </div>
      </nav>
    </div>
  );
}
