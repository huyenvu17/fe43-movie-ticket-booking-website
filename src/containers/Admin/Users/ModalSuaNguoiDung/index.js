import React, { Component, useState } from "react";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
import { groupID } from "../../../../Config/config";
import Swal from "sweetalert2";

export default function ModalSuaNguoiDung(props) {
  let { user } = props;
  let [state, setState] = useState({
    values: {
      hoTen: user.hoTen,
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      soDt: user.soDt,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      maNhom: groupID,
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      soDt: "",
      maLoaiNguoiDung: "",
    },
  });
  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Ô nhập không được để trống !!" : "",
    };
    if (name === "email") {
      let regEmail = /^[a-z0-9._%+\-\/!#\$&'*=?^_`{|}~]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (value.match(regEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    if (name === "soDt") {
      let regPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;
      if (value.match(regPhone)) {
        newErrors.soDt = "";
      } else {
        newErrors.soDt = "Số điện thoại không hợp lệ";
      }
    }
    setState({ values: newValues, errors: newErrors });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let { values, errors } = state;
    for (let key in values) {
      if (values[key] === "") {
        //Kiểm tra lỗi
        isValid = false;
      }
    } 
   for (let key in errors) {
        if (errors[key] !== "") {
          isValid = false;
        }
      }
    if (!isValid) {
      alert("Thông Tin Bạn Nhập Không Hợp Lệ");
      return;
    }
    quanLyAdminService
      .capNhatThongTinNguoiDung(values)
      .then((res) => {
        Swal.fire({
          title: "Sửa Thông Tin Thành Công",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          title: "Sửa Thông Tin Thất Bại",
          icon: "error",
        });
      });
  };
  return (
    <div className="modal fade" id={`mte${user.taiKhoan}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <header className="head-form mb-0 text-center">
            <h2 id="header-title ">Sửa Thông Tin Người Dùng</h2>
          </header>
          {/* Modal Header */}
          {/* 	<div class="modal-header">
                <h4 class="modal-title" id="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div> */}
          {/* Modal body */}
          <div className="modal-body">
            <form role="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-id-badge"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="taiKhoan"
                    className="form-control input-sm"
                    placeholder="Nhập Tài Khoản"
                    value={state.values.taiKhoan}
                    disabled
                    required
                  />
                </div>
                <span className="text-danger">
                  {state.errors.taiKhoan}
                </span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="hoTen"
                    className="form-control input-sm"
                    placeholder="Nhập Họ Tên"
                    onChange={handleChangeInput}
                    value={state.values.hoTen}
                    required
                  />
                </div>
                <span className="text-danger" id="tbHoTen">
                  {state.errors.hoTen}
                </span>
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="matKhau"
                    className="form-control input-sm"
                    placeholder="Nhập Mật Khẩu"
                    onChange={handleChangeInput}
                    value={state.values.matKhau}
                    required
                  />
                </div>
                <span className="text-danger" id="tbMatKhau">
                  {state.errors.matKhau}
                </span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="form-control input-sm"
                    placeholder="Nhập Email"
                    onChange={handleChangeInput}
                    value={state.values.email}
                    required
                  />
                </div>
                <span className="text-danger" id="tbEmail">
                  {state.errors.email}
                </span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="fa fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="soDt"
                    className="form-control input-sm"
                    placeholder="Nhập Số Điện Thoại"
                    onChange={handleChangeInput}
                    value={state.values.soDt}
                    required
                  />
                </div>
                <span className="text-danger" id="tbSoDt">
                  {state.errors.soDt}
                </span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-address-book" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="maNhom"
                    className="form-control input-sm"
                    placeholder="Mã Nhóm"
                    onChange={handleChangeInput}
                    value={state.values.maNhom}
                    required
                  />
                </div>
                <span className="text-danger" id="tbMaNhom">
                  {state.errors.maNhom}
                </span>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    </span>
                  </div>
                  <select
                   className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={handleChangeInput}
                    value={state.values.maLoaiNguoiDung}
                  >
                    <option value="#">--Chọn loại người dùng--</option>
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </select>
                </div>
                <span className="text-danger" id="MaLoai">
                  {state.errors.maLoaiNguoiDung}
                </span>
              </div>
              <div className="modal-footer" id="modal-footer">
                <button type="submit" className="btn btn-success">
                  Sửa Thông Tin
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
