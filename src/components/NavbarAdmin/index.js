import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MotiLogo from '../../content/images/logo/moti-logo-white.svg';
export default class NavbarAdmin extends Component {
  render() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/admin">
          <div className="sidebar-brand-icon">
            <img src={MotiLogo} />
          </div>
          <div className="sidebar-brand-text mx-3">MoTi Admin</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
            <NavLink activeClassName="active" className="nav-link" to="/quanlyphim">
            <i className="fa fa-film" aria-hidden="true"></i>
            <span>Phim</span> 
           </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item active">
          <NavLink activeClassName="active" className="nav-link" to="/quanlynguoidung">
          <i className="fa fa-users" aria-hidden="true"></i>
            <span>Người Dùng</span>
          </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item active">
            <NavLink activeClassName="active" className="nav-link" to="/quanlylichchieu">
            <i className="fas fa-chair" aria-hidden="true"></i>
            <span>Quản Lý Lịch Chiếu</span> 
           </NavLink>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item active">
            <NavLink activeClassName="active" className="nav-link" to="/quanlytintuc">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            <span>Tin Tức</span> 
           </NavLink>
        </li>
      </ul>
    )
  }
}
