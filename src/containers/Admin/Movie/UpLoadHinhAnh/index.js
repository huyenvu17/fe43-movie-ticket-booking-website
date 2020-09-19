import React, { useState } from "react";
import { groupID } from "../../../../Config/config";
import Swal from "sweetalert2";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";

export default function UpLoadHinhAnh(props) {
  let { phim } = props;

  let [state, setState] = useState({
    values: {
      maPhim: phim.maPhim,
      tenPhim: phim.tenPhim,
      hinhAnh: {},
      ngayKhoiChieu: phim.ngayKhoiChieu,
      maNhom: groupID,
    },
    errors: {
      tenPhim: "",
    },
  });
  const handleChangeInput = (event) => {
    var { value, name } = event.target;
    let newValues = { ...state.values, [name]: value };
    let newErrors = {
      ...state.errors,
      [name]: value === " " ? "Chưa chọn hình Ảnh" : "",
    };
    if (name === "hinhAnh") {
      newValues[name] = event.target.files[0];
    }
    setState({ values: newValues, errors: newErrors });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let { values, errors } = state;
    for (let key in values) {
      if (values[key] === "") {
        isValid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== "") {
        isValid = false;
      }
    }
    if (!isValid) {
      alert("Hình Ảnh không hợp lệ !!!");
      return;
    }
    console.log(isValid)
    let formData = new FormData();
    formData.append("File", values.hinhAnh);
    formData.append("maPhim", values.maPhim);
    formData.append("tenPhim", values.tenPhim);
    formData.append("maNhom", values.maNhom);
    quanLyAdminService
      .uploadHinhAnhPhim(formData)
      .then(() => {
        Swal.fire({
          title: "Upload Hình Ảnh Thành Công",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          icon: "error",
        });
      });
  };
  return (
    <div className="modal fade" id={`mt${phim.maPhim}`} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <header className="head-form mb-0 text-center">
            <h2 id="header-title ">Up load Hình Ảnh</h2>
          </header>
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
                    disabled
                    value={state.values.maPhim}
                    required
                  />
                </div>
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
                    disabled
                    value={state.values.tenPhim}
                    required
                  />
                </div>
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
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <span className="text-danger" id="tbTrailer">
                  {state.errors.hinhAnh}
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
                    disabled
                    value={state.values.maNhom}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-calendar"></i>
                    </span>
                  </div>
                  <input
                    type="type"
                    name="ngayKhoiChieu"      
                    className="form-control input-sm"
                    disabled
                    value={state.values.ngayKhoiChieu}
                    required
                  />
                </div>
             </div>
              <div className="modal-footer" id="modal-footer">
                <button type="submit" className="btn btn-success">
                  Upload
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
