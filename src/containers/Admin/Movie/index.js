import React, { Component } from "react";
import BangPhim from "./BangPhim";
import ModalThemPhim from "./ModalThemPhim";
export default class QuanLyPhim extends Component {
  render() {
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
    );
  }
}
