import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { userLogin } from "Config/config";
import { quanLyNguoiDung } from "services/QuanLyNguoiDungServices";
import BookingInfo from "./BookingInfo";
import EditUser from "./EditUserInfo";
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
  const renderInfo = () => {
    return (
      <div>
        <tr>
          <th scope="row">Tài Khoản</th>
          <td>{infoUser.taiKhoan}</td>
        </tr>
        <tr>
          <th scope="row">Họ Tên</th>
          <td>{infoUser.hoTen}</td>
        </tr>
        <tr>
          <th scope="row">Nhóm</th>
          <td>{infoUser.maNhom}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{infoUser.email}</td>
        </tr>
        <tr>
          <th scope="row">Số Điện Thoại</th>
          <td>{infoUser.soDT}</td>
        </tr>
        <tr>
          <th scope="row">Mã Loại Người Dùng</th>
          <td>{infoUser.maLoaiNguoiDung}</td>
        </tr>
      </div>
    );
  };
  return (
    <div className="container-fluid profile text-light">
      <div className="row">
        <div className="col-12">
          <div className="img-avatar p-5 text-center">
            <img
              src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png"
              width="200"
              height="200"
            />
          </div>
          <div className="tableInfo bg-dark ml-2">
            <div className="row">
              <div className="col-md-4 col-12 col-left bg-dark text-center">
                <h4>Thông Tin Cá Nhân</h4>
                <table class="table bg-light">
                  <tbody>
                    {renderInfo()}
                  </tbody>
                </table>
                {renderAdmin()}
              </div>
              <div className="col-md-7 col-sm-12 col-right bg-dark">
                <EditUser />
                <BookingInfo thongTin ={thongTin}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
