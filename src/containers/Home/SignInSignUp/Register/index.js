import React, { Component } from "react";
import { groupID } from "../../../../Config/config";
import { quanLyNguoiDung } from "../../../../services/QuanLyNguoiDungServices";
import Swal from "sweetalert2";
export default class Register extends Component {
  state = {
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: groupID,
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
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
      [name]: value === "" ? "Không được bỏ trống!!" : "",
    };
    if (name === "email") {
      let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (value.match(regEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email của bạn không hợp lệ !!";
      }
    }
    if (name === "soDT") {
      let regPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
      if (value.match(regPhone)) {
        newErrors.soDT = "";
      } else {
        newErrors.soDT = "Số điện thoại chưa hợp lệ !!!";
      }
    }
    this.setState({ values: newValues, errors: newErrors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let isVaild = true;
    let { values, errors } = this.state;
    for (let key in values) {
      if (values[key] === "") {
        isVaild = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        isVaild = false;
      }
    }
    if (!isVaild) {
      alert("Thông tin bạn nhập chưa hợp lệ !!!");
      return;
    }
    let { navigator } = this.props;
    quanLyNguoiDung
      .dangKy(values)
      .then((res) => {
        Swal.fire({
          title: "Đăng kí tài khoản Moti",
          icon: "success",
        });
        navigator.history.push("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          text: "Điền lại thông tin đăng ký!",
          icon: "error",
        });
      });
  };
  render() {
    return (
      <div className="mt-5">
        <form action="#">
          <h1>Tạo Tài Khoản</h1>
          <input
            type="text"
            placeholder="Tên Tài Khoản"
            name="taiKhoan"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.taiKhoan}</span>
          <input
            type="text"
            placeholder="Tên Người Dùng"
            name="hoTen"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.hoTen}</span>
          <input
            type="password"
            placeholder="Mật Khẩu"
            name="matKhau"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.matKhau}</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.email}</span>
          <input
            type="text"
            placeholder="Số Điện Thoại"
            name="soDT"
            onChange={this.handleChangeInput}
          />
          <span className="text-danger">{this.state.errors.soDT}</span>
          <button onClick={this.handleSubmit} type="submit">
            Đăng Ký
          </button>
        </form>
      </div>
    );
  }
}
