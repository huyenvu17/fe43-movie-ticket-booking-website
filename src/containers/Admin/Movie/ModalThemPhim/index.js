import React, { Component } from "react";
import Swal from "sweetalert2";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";

export default class ModalThemPhim extends Component {
  state = {
    values: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: {},
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
      maNhom: "",
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      hinhAnh: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
      maNhom: "",
    },
  };
  handleChangeInput = (event) => {
    var { value, name } = event.target;
    //tạo ra object this.state.values mới
    let newValues = {
      ...this.state.values,
      [name]: value,
    };
    let newErrors = {
      ...this.state.errors,
      [name]: value === "" ? "không được bỏ trống!" : "",
    };   
    if (name === "maPhim") {
      let regexNum = /^[0-9]*$/;
      if (value.match(regexNum)) {
          newErrors="";
      }
      else{
        newErrors.maPhim = "Mã phim chỉ được nhập số";
      }
    }
    if (name === "hinhAnh") {
      newValues[name] = event.target.files[0];
    }
    if (name === "ngayKhoiChieu") {
      var moment = require("moment");
      // console.log(value);
      newValues[name] = moment(value, "yyyy-MM-DD").format("DD/MM/yyyy");
    }
    if (name === "danhGia") {    
      let regexNum = /^[0-9]*$/;
      if (value <= 10 && value >= 0 && value.match(regexNum)) {
        newErrors.danhGia = "";
      } else {
        newErrors.danhGia = "Chỉ được nhập số từ 1 tới 10";
      }
    }

    this.setState({ values: newValues, errors: newErrors });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let { values, errors } = this.state;
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
      alert("thông tin không hợp lệ");
      return;
    } else {
      // gọi api hoạc dispatch redux
      var form_data = new FormData();
      for (let key in this.state.values) {
        form_data.append(key, this.state.values[key]);
      }
      quanLyAdminService
        .themPhim(form_data)
        .then((res) => {
          Swal.fire({
            title: "Thêm phim thành công",
            icon: "success",
            button: "OK",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          Swal.fire({
            title: err.response.data,
            text: "Điền lại thông tin!",
            icon: "warning",
            button: "OK",
          });
        });
    }
  };
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center">
              <h2 id="header-title ">Thêm Phim</h2>
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
                        <i className="fa fa-address-book" />
                      </span>
                    </div>
                    <input
                      type="text"
                      name="maPhim"
                      className="form-control input-sm"
                      placeholder="Mã Phim"
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbMaPhim">
                    {this.state.errors.maPhim}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbtenPhim">
                    {this.state.errors.tenPhim}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fa fa-align-justify"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="biDanh"
                      className="form-control input-sm"
                      placeholder="Bí Danh"
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbBiDanh">
                    {this.state.errors.biDanh}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbTrailer">
                    {this.state.errors.trailer}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text mr-2">
                        <i className="fa fa-image"></i>
                      </span>
                      <input
                        type="file"
                        className="form-control-file"
                        name="hinhAnh"
                        onChange={this.handleChangeInput}
                      />
                    </div>
                  </div>
                  <span className="text-danger" id="tbTrailer">
                    {this.state.errors.hinhAnh}
                  </span>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fa fa-align-justify"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="moTa"
                      className="form-control input-sm"
                      placeholder="Mô Tả"
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbMoTa">
                    {this.state.errors.moTa}
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
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="danhGia"
                      placeholder="Đánh giá"
                      className="form-control input-sm"
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="danhGia">
                    {this.state.errors.danhGia}
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
                      onChange={this.handleChangeInput}
                      required
                    />
                  </div>
                  <span className="text-danger" id="tbNgayChieu">
                    {this.state.errors.ngayKhoiChieu}
                  </span>
                </div>
                <div className="modal-footer" id="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Thêm Phim
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
  }
}
