import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { userLogin } from "Config/config";
import { quanLyNguoiDung } from "services/QuanLyNguoiDungServices";
import BookingInfo from "./BookingInfo";
import EditUser from "./EditUserInfo";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer';
import Nav from 'react-bootstrap/Nav';
import TabPane from 'react-bootstrap/TabPane'
export default function UserInfo() {
  const infoUser = JSON.parse(localStorage.getItem("userLogin"));
  let [thongTin, setThongTin] = useState([]);
  useEffect(() => {
    quanLyNguoiDung
      .layThongTinTaiKhoan(JSON.parse(localStorage.getItem(userLogin)))
      .then((result) => {
        setThongTin(result.data);
      });
  }, []);
  const renderAdmin = () => {
    if (infoUser.maLoaiNguoiDung === "QuanTri") {
      return (
        <button className="btn btn-default">
          <NavLink className="admin_link" to="/admin">
            Về Trang Quản Lý
          </NavLink>
        </button>
      );
    } else {
      return;
    }
  };
  if (!localStorage.getItem("userLogin")) {
    return <Redirect to="/home" />;
  }
  const renderUserProfileInfo = () => {
    return (
      <div className="panel">
        <div className="panel-body bio-graph-info">
          <h1>Thông tin tài khoản</h1>
          <div className="row">
            <div className="bio-row">
              <p><span>Họ tên </span>: {infoUser.hoTen}</p>
            </div>
            <div className="bio-row">
              <p><span>Tài khoản </span>: {infoUser.taiKhoan}</p>
            </div>
            <div className="bio-row">
              <p><span>Mã Nhóm</span>: {infoUser.maNhom}</p>
            </div>
            <div className="bio-row">
              <p><span>Email </span>: {infoUser.email}</p>
            </div>
            <div className="bio-row">
              <p><span>Điện Thoại </span>: {infoUser.soDT}</p>
            </div>
            <div className="bio-row">
              <p><span>Loại Người Dùng </span>: {infoUser.maLoaiNguoiDung}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
  return (
    <div className="container-fluid profile text-light">
      <Tab.Container id="left-tabs-example" defaultActiveKey="user-profile">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="#">
                  <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt />
                </a>
                <h1 style={{marginTop: 5, fontWeight: 600}}>{infoUser.hoTen}</h1>
                <p style={{fontSize: 13}}>{infoUser.email}</p>
              </div>
              <Nav variant="pills" className="nav flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="user-profile"><i className="fa fa-user" /> Hồ Sơ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="user-profile-edit"><i className="fa fa-edit" /> Sửa Hồ Sơ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="user-tickets"><i className="fa fa-calendar" /> Lịch Sử Đặt Vé</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <Tab.Content>
              <Tab.Pane eventKey="user-profile">
                {renderUserProfileInfo()}
              </Tab.Pane>
              <Tab.Pane eventKey="user-profile-edit">
                <EditUser />
              </Tab.Pane>
              <Tab.Pane eventKey="user-tickets">
                <BookingInfo thongTin={thongTin} />
              </Tab.Pane>
            </Tab.Content>
            <div>
            </div>
          </div>
        </div>

      </Tab.Container>
      </div>
  );
}
