import React from "react";
import BangNguoiDung from "./BangNguoiDung";
import ModalThemNguoiDung from "./ModalThemNguoiDung";
import {userLogin} from 'Config/config';

export default function QuanLyNguoiDung(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (!localStorage.getItem(userLogin)|| info.maLoaiNguoiDung === "KhachHang") {
      props.history.push("/")
  }
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1 className="h3 mb-2 text-gray-800">Quản Lý Người Dùng</h1>
        </div>
        <div className="col-md-6 col-xl-12 text-left">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#themNguoiDung"
          >
            Thêm Người Dùng
          </button>
        </div>
      </div>
      {/* Bảng Người Dùng */}
      <BangNguoiDung />

      {/* Modal Thêm  Người Dùng */}
      <ModalThemNguoiDung />
    </div>
  );
}
