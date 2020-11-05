import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { token, userLogin } from "Config/config";
import { quanLyNguoiDung } from "services/QuanLyNguoiDungServices";
import { dangNhapAction } from "redux/actions/QuanLyNguoiDungAction";
import Swal from 'sweetalert2';

const SignInForm = (props) => {
  let { navigator } = props;
  const dispatch = useDispatch();
  let [state, setState] = useState({
    values: {
      taiKhoan: "",
      matKhaur: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  });
  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = { ...state.values, [name]: value };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được bỏ trống!" : "",
    };
    setState({ values: newValues, errors: newErrors });
  };
  const handChangeSubmit = (event) => {
    event.preventDefault();
    quanLyNguoiDung
      .dangNhap(state.values)
      .then((res) => {
        localStorage.setItem(userLogin, JSON.stringify(res.data));
        localStorage.setItem(token,res.data.accessToken);
        dispatch(dangNhapAction(res.data.taiKhoan));
        Swal.fire({
          title: "Đăng Nhập Thành Công",
          text: "Xin Chào" + res.data.taiKhoan,
          text: "Chào Mừng Bạn Đến Với Moti",
          icon: "success",
        });
         navigator.history.push("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({         
          title: err.response.data,
          icon: 'error',
        });
      });
  };
  return (
    <section>
      <form action="#" onSubmit={handChangeSubmit}>
        <h2>Đăng Nhập</h2>
        <div className="form-group">
          <input
            type="text"
            name="taiKhoan"
            placeholder="Tài Khoản"
            className="form-control"
            onChange={handleChangeInput}
          />
          <span className="text-danger">{state.errors.taiKhoan}</span>
        </div>
        <div className="form-group">
          <input  name="matKhau" type="password" className="form-control" placeholder="Mật Khẩu" onChange={handleChangeInput}/>
          <span className="text-danger">{state.errors.matKhau}</span>
        </div>
        {/* <a href="#">Forgot your password?</a> */}
        <button type="submit">Đăng Nhập</button>
      </form>
    </section>
  );
};
export default SignInForm;
