import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import MotiLogo from '../../content/images/logo/moti-logo-white.svg';
import '../../content/styles/components/_menu.scss';
export default class Navbar extends Component {
  render() {
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
                <NavLink exact activeClassName="active" className="nav-link" to="/">
                  Lịch Chiếu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/about">
                  Về Chúng Tôi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/signin">
                  Đăng Nhâp / Đăng Ký
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      
      </div>
    );
  }
}
