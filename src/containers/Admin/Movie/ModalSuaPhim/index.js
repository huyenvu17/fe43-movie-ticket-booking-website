import React, { useState } from "react";
import Swal from "sweetalert2";
import { groupID } from "Config/config";
import { quanLyAdminService } from "services/QuanLyAdminServices";

export default function SuaPhim(props) {
  let { phim } = props;
  let [state, setState] = useState({
    values: {
      hinhAnh: phim.hinhAnh,
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      biDanh: phim.biDanh,
      trailer: phim.trailer,
      hinhAnh: phim.hinhAnh,
      moTa: phim.moTa,
      ngayKhoiChieu: phim.ngayKhoiChieu,
      danhGia: phim.danhGia,
      maNhom: groupID,
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: "",
      trailer: "",
      hinhAnh:"",
      moTa: "",
      ngayKhoiChieu: "",
      maNhom: "",
      danhGia: "",
    },
  });
  const handleChangeInput = (event) => {
    let { value, name } = event.target;

    var moment = require("moment");

    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Ô nhập không được để trống!!" : "",
    };
    //Kiểm tra ngày chiếu
    if (name === "ngayKhoiChieu") {
      newValues[name] = moment(value, "yyyy-MM-DD").format("DD/MM/yyyy");
    }
    //kiểm tra file Ảnh
    if (name === "hinhAnh") {
      newValues[name] = event.target.files[0];
    }
    //Kiểm tra đánh giá
    if (name === "danhGia") {
      let regexNum = /^[0-9]*$/;
      if (value <= 10 && value >= 0 && value.match(regexNum)) {
        newErrors.danhGia = "";
      } else {
        newErrors.danhGia = "Chỉ được nhập số từ 1 tới 10";
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
        // kiểm tra lỗi
        isValid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        isValid = false;
      }
    }
    if (!isValid) {
      alert("Thông Tin Không Hợp Lệ");
      return;
    }
    quanLyAdminService
      .suaPhim(values)
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          title: "Sửa Thông Tin Phim Thành Công",
          icon: "success",        
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error(error)
        Swal.fire({
          title: "Điền lại thông tin phim",
          icon: "error",        
        });
      });
  };
     
  const renderSuaPhim = () => {
    return (
      <div
        className="modal fade"
        id={`m${phim.maPhim}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center">
              <h2 id="header-title ">Sửa Phim</h2>
            </header>
            {/* Modal body */}
            <div className="modal-body">
              <form role="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-address-book" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="maPhim"
                      className="form-control input-sm"
                      placeholder="Mã Phim"
                      onChange={handleChangeInput}
                      value={state.values.maPhim}
                      disabled
                    />
                  </div>
                  <span className="text-danger" id="tbMaPhim">
                    {state.errors.maPhim}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-film"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="tenPhim"
                      className="form-control input-sm"
                      placeholder="Tên Phim"
                      onChange={handleChangeInput}
                      value={state.values.tenPhim}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbtenPhim">
                    {state.errors.tenPhim}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-ad"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="biDanh"
                      className="form-control input-sm"
                      placeholder="Bí Danh"
                      onChange={handleChangeInput}
                      value={state.values.biDanh}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbBiDanh">
                    {state.errors.biDanh}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-link"></i>
                      </span>
                    </div>
                    <input
                      type="trailer"
                      name="trailer"
                      className="form-control input-sm"
                      placeholder="Trailer"
                      onChange={handleChangeInput}
                      value={state.values.trailer}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbTrailer">
                    {state.errors.trailer}
                  </span>
                </div>
              <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-file"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="moTa"
                      className="form-control input-sm"
                      placeholder="Mô Tả"
                      onChange={handleChangeInput}
                      value={state.values.moTa}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbMoTa">
                    {state.errors.moTa}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="danhGia"
                      placeholder="Đánh giá"
                      className="form-control input-sm"
                      onChange={handleChangeInput}
                      value={state.values.danhGia}
                      required
                    />
                  </div>
                  <span className="text-danger" id="danhGia">
                    {state.errors.danhGia}
                  </span>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-calendar"></i>
                      </span>
                    </div>
                    <input
                      type="date"
                      name="ngayKhoiChieu"
                      min="today"
                      className="form-control input-sm"
                      onChange={handleChangeInput}                    
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbNgayChieu">
                    {state.errors.ngayKhoiChieu}
                  </span>
                </div>
                <div className="modal-footer" id="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Sửa Phim
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
            {/* Modal footer */}
          </div>
        </div>
      </div>
    );
  };
  return <div>{renderSuaPhim()}</div>;
}
