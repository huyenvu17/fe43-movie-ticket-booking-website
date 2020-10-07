import { event } from "jquery";
import React, { useState } from "react";
import { quanLyAdminService } from "services/QuanLyAdminServices";
import Swal from "sweetalert2";
import { MdDateRange, MdTitle } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { BiLike, BiRename, BiShare } from 'react-icons/bi';

export default function EditNews(props) {
  let {tintuc} = props;
  let [state, setState] = useState({
    values: {
      tieuDe: tintuc.tieuDe,
      noiDung: tintuc.noiDung,
      hinhAnh1: tintuc.hinhAnh1,
      hinhAnh2: tintuc.hinhAnh2,
      hinhAnh3: tintuc.hinhAnh3,
      ngayDang:tintuc.ngayDang,
      likes: tintuc.likes,
      shares: tintuc.likes,
      nguoiDang: tintuc.shares,
    },
    errors: {
      tieuDe: "",
      noiDung: "",
      hinhAnh1: "",
      hinhAnh2: "",
      hinhAnh3: "",
      ngayDang: "",
      likes: "",
      shares: "",
      nguoiDang: "",
    },
  });
  const handleInput = (event) => {
    let { value, name } = event.target;
    let newValues = {
      ...state.values,
      [name]: value,
    };
    let newErrors = {
      ...state.errors,
      [name]: value === "" ? "Không được để trống " : "",
    };
    setState({ values: newValues, errors: newErrors });
    console.log(state);
  };
  const handleSubmit = (event) =>{
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
        alert("Tin tức bạn nhập chưa hợp lệ !!!");
        return;
    }else{
        quanLyAdminService.suaTinTuc(tintuc.id, values)
        .then((result) => {
            Swal.fire({
              title: "Thêm tin thành công",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1800);
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data,
              text: "Điền lại thông tin cho tin tức !!!",
              icon: "error",
            });
          });
      }
  }
  return(
    <div className="modal fade" id={`d${tintuc.id}`} tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <header className="head-form mb-0 text-center">
          <h2 id="header-title ">Thêm Tin Tức</h2>
        </header>
        <div className="modal-body">
          <form role="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                   <MdTitle/>
                  </span>
                </div>
                <input
                  type="text"
                  name="tieuDe"
                  className="form-control input-sm"
                  placeholder="Tiêu Đề Tin Tức"
                  onChange={handleInput}
                  value= {state.values.tieuDe}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <BsBook/>
                  </span>
                </div>
                <input
                  type="text"
                  name="noiDung"
                  className="form-control input-sm"
                  placeholder="Nhập Nội Dung"
                  onChange={handleInput}
                  value= {state.values.noiDung}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="hinhAnh1"
                  className="form-control input-sm"
                  placeholder="Hình Ảnh 1"
                  onChange={handleInput}
                  value= {state.values.hinhAnh1}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="hinhAnh2"
                  className="form-control input-sm"
                  placeholder="Hình Ảnh 2"
                  onChange={handleInput}
                  value= {state.values.hinhAnh2}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="hinhAnh3"
                  className="form-control input-sm"
                  placeholder="Hình Ảnh 3"
                  onChange={handleInput}
                  value= {state.values.hinhAnh3}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <MdDateRange/>
                  </span>
                </div>
                <input
                  type="date"
                  name="ngayDang"
                  className="form-control input-sm"
                  placeholder="Ngày Đăng"
                  onChange={handleInput}
                  value= {state.values.ngayDang}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BiLike/>
                  </span>
                </div>
                <input
                  type="text"
                  name="likes"
                  className="form-control input-sm"
                  placeholder="Lượt Like"
                  onChange={handleInput}
                  value= {state.values.likes}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                   <BiShare/>
                  </span>
                </div>
                <input
                  type="text"
                  name="shares"
                  className="form-control input-sm"
                  placeholder="Lượt Chia Sẻ"
                  onChange={handleInput}
                  value= {state.values.shares}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <BiRename/>
                  </span>
                </div>
                <input
                  type="text"
                  name="nguoiDang"
                  className="form-control input-sm"
                  placeholder="Người Đăng Tin Tức"
                  onChange={handleInput}
                  value= {state.values.nguoiDang}
                  required
                />
              </div>
            </div>

            <div className="modal-footer" id="modal-footer">
              <button type="submit" className="btn btn-success">
                Sửa Tin Tức
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
