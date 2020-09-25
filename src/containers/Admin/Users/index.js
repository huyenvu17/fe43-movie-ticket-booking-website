import React, { Component } from "react";
import BangNguoiDung from "./BangNguoiDung";
import ModalThemNguoiDung from "./ModalThemNguoiDung";

export default class QuanLyNguoiDung extends Component {
  render() {
    return (
      <div>
        <div className="row">
                  <div className="col-md-6 col-xl-12 text-left">
                    <button
                      className="btn btn-primary"

                      data-toggle="modal"
                      data-target="#themNguoiDung"
                    >
                      Thêm Người Dùng
                    </button>
                  </div>
                </div>
        {/* Bảng Người Dùng */}
        <BangNguoiDung />
        
        {/* Modal Thêm  Người Dùng */}
        <ModalThemNguoiDung />
      </div>
    );
  }
}
