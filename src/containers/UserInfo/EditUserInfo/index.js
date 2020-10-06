import React, { useEffect, useState } from "react";
import { userLogin } from "../../../Config/config";
import { quanLyAdminService } from "../../../services/QuanLyAdminServices";
import { quanLyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
import Swal from "sweetalert2";
export default function EditUser() {
  const infoUser = JSON.parse(localStorage.getItem(userLogin));
  let [account] = useState({
    taiKhoan: infoUser.taiKhoan,
  });
  let [state, setState] = useState({
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maLoaiNhanVien: "KhachHang",
      maNhom: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
  });
  useEffect(() => {
    quanLyNguoiDung
      .thongTinTaiKhoan(account)
      .then((res) => {
        setState({
          values: res.data,
          errors: {
            hoTen: "",
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDT: "",
          },
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [account]);

  const handleInput = (event) => {
    var { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống !!" : "",
    };
    if (name === "email") {
      let regEmail = /^[a-z0-9._%+\-\/!#\$&'*=?^_`{|}~]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      if (value.match(regEmail)) {
        newErrors.email = "";
      } else {
        newErrors.email = "Email không hợp lệ";
      }
    }
    if (name === "soDT") {
      let regPhone = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;
      if (value.match(regPhone)) {
        newErrors.soDT = "";
      } else {
        newErrors.soDT = "Số điện thoại không hợp lệ";
      }
    }
    setState({ values: newValues, errors: newErrors });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isvalid = true;
    let { values, errors } = state;
    for (let key in values) {
      if (values[key] === "") {
        isvalid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        isvalid = false;
      }
    }
    if (!isvalid) {
      alert("thông tin sửa không hợp lệ");
      return;
    }
    let infoUserUpdate = {
      taiKhoan: values.taiKhoan,
      matKhau: values.matKhau,
      hoTen: values.hoTen,
      email: values.email,
      soDT: values.soDT,
      maNhom: values.maNhom,
      maLoaiNguoiDung: infoUser.maLoaiNguoiDung,
    };
    quanLyAdminService
      .capNhatThongTinNguoiDung(infoUserUpdate)
      .then((res) => {
        Swal.fire({
          title: "Sửa thông tin thành công",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          text: "Điền lại thông tin!",
          icon: "error",
        });
      });
  };

  return (
    <div style={{ marginTop: "35px" }}>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-light collapsed"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Chỉnh Sửa Thông Tin Tài Khoản
              </button>
            </h5>
          </div>

          <div            
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body bg-light">
              <form onSubmit={handleSubmit}>
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
                      onChange={handleInput}
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
                        <i className="fa fa-id-badge"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="taiKhoan"
                      className="form-control input-sm"
                      placeholder="Nhập Tài Khoản"
                      value={state.values.taiKhoan}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbTaiKhoan">
                    {state.errors.taiKhoan}
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
                      onChange={handleInput}
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
                      onChange={handleInput}
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
                      name="soDT"
                      className="form-control input-sm"
                      placeholder="Nhập Số Điện Thoại"
                      onChange={handleInput}
                      value={state.values.soDT}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbSoDt">
                    {state.errors.soDT}
                  </span>
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-success form-control"
                    type="submit"                 
                  >
                    Thay đổi thông tin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
