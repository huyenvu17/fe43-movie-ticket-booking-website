import React, { Component } from "react";
import { groupID } from "../../../../Config/config";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
import Swal from "sweetalert2";

export default class ModalThemNguoiDung extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
      maNhom: groupID,
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;

    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "Ô nhập không được bỏ trống !!!" : "",
    };
    if (name === "email") {
      let regEmail = /^[a-z0-9._%+\-\/!#\$&'*=?^_`{|}~]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (value.match(regEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ !!";
      }
      if (name === "soDt") {
        let regPhone =/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;
        if (value.match(regPhone)) {
          newErrors.soDt = "";
        } else {
          newErrors.soDt = "Số Điện thoại không hợp lệ !!";
        }
      }
    }
    // setState lại values , errors
    this.setState({ values: newValues, errors: newErrors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        //kiểm tra lỗi
        isValid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        isValid = false;
      }
    }
    if (!isValid) {
      alert("Thông Tin Nhập Không Hợp Lệ !!!");
    }
    //call api và xử lý
    quanLyAdminService
      .themNguoiDung(values)
      .then((res) => {
        Swal.fire({
          title: "Thêm người Dùng Thành Công ",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          text: "Điền lại thông tin ",
          icon: "error",
        });
      });
  };
  render() {
    return( 
        <div className="modal fade" id="themNguoiDung" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center">
              <h2 id="header-title ">Thêm Người Dùng</h2>
            </header>
            {/* Modal Header */}
            {/* 	<div class="modal-header">
                      <h4 class="modal-title" id="modal-title">Modal Heading</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div> */}
            {/* Modal body */}
            <div className="modal-body">
              <form role="form" onSubmit={this.handleSubmit}>
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbHoTen">
                    {this.state.errors.hoTen}
                  </span>
                </div>
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbTaiKhoan">
                    {this.state.errors.taiKhoan}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbMatKhau">
                    {this.state.errors.matKhau}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbEmail">
                    {this.state.errors.email}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbSoDt">
                    {this.state.errors.soDt}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbMaNhom">
                    {this.state.errors.maNhom}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i class="fa fa-users" aria-hidden="true"></i>
                      </span>
                    </div>
                    <select
                    class="form-control"
                    name="maLoaiNguoiDung"
                    onChange={this.handleChangeInput}                
                  >
                    <option value="#">--Chọn loại người dùng--</option>
                    <option value="KhachHang">Khách Hàng</option>
                    <option value="QuanTri">Quản Trị</option>
                  </select>
                  </div>
                  <span className="text-danger" id="MaLoai">
                    {this.state.errors.maLoaiNguoiDung}
                  </span>
                </div>
              <div className="modal-footer" id="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Thêm Người Dùng
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
}
