import React from 'react'
import BangPhim from "./BangPhim";
import ModalThemPhim from "./ModalThemPhim";
import { userLogin } from '../../../Config/config'
export default function QuanLyPhim(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (!localStorage.getItem(userLogin) || info.maLoaiNguoiDung === "KhachHang") {
    props.history.push("/");
  }
  return (
    <div>
       <h1 className="h3 mb-2 text-gray-800">Bảng Phim</h1>
                {/* <p className="mb-4">
                 Bảng Danh sách phim có thể thêm xóa sửa phim 
                </p> */}
                <div className="row">
                  <div className="col-md-6 col-xl-12 text-left">
                    <button
                      className="btn btn-primary"

                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Thêm Phim
                    </button>
                  </div>
                </div>
                <br />
                {/* Bảng phim */}
         {/* Bảng phim */}
         <BangPhim />
         {/* Modal Thêm Phim */}
        <ModalThemPhim />
    </div>
  )
}
