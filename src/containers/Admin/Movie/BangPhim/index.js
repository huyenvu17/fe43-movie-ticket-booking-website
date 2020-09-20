import React, { useState, useEffect } from "react";
import { quanLyPhimServices } from "../../../../services/QuanLyPhimServices";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
import SuaPhim from "../ModalSuaPhim";
import Swal from "sweetalert2";
import UpLoadHinhAnh from "../UpLoadHinhAnh";
var moment = require("moment");
export default function BangPhim() {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layDanhSachPhim()
      .then((result) => {
        console.log(result.data);
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderDanhSachPhim = () => {
    return danhSachPhim.map((phim, index) => {
      return (
        <tr tabIndex={-1} key={phim.maPhim}>
          <th scope="row">{phim.maPhim}</th>
          <td>{phim.tenPhim}</td>
          <td>
            <img
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              style={{ width: 70, height: 90 }}
            ></img>
          </td>
          <td>{phim.moTa}</td>
          <td> {moment(phim.ngayKhoiChieu).format("DD/MM/yyyy")}</td>
          <td> {phim.danhGia}</td>
          <td>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="edit mr-2">
                {/* Sự kiện sửa phim                */}
                <i
                  className="fa fa-edit"
                  style={{
                    cursor: "pointer",
                    color: "#0e3cc9",
                  }}
                  data-toggle="modal"
                  data-target={`#m${phim.maPhim}`}
                ></i>
                <SuaPhim phim={phim} />
                </div>
              <div className="upload mr-2">              
                {/* Sự Kiện Xóa Phim */}
                <i
                  className="fa fa-trash"
                  style={{
                    cursor: "pointer",
                    color: "#d61313",
                  }}
                  onClick={() => {
                    Swal.fire({
                      title: "Bạn có muốn ?",
                      text: `Xoá phim ${phim.tenPhim}`,
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((Delete) => {
                      if (Delete) {
                        quanLyAdminService
                          .xoaPhim(phim.maPhim)
                          .then((res) => {
                            Swal.fire({
                              title: "Xóa phim thành công",
                              icon: "success",
                              button: "OK",
                            });
                            quanLyPhimServices
                              .layDanhSachPhim()
                              .then((result) => {
                                setDanhSachPhim(result.data);
                              })
                              .catch((err) => {
                                console.log(err.response.data);
                              });
                          })
                          .catch((err) => {
                            Swal.fire({
                              title: "Xóa Phim không thành công",
                              icon: "warning",
                            });
                          });
                      }
                    });
                  }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Xóa Phim"
                >        
                </i>
                </div>
                {/* Sự kiện upload hình ảnh */}
                <div className="delete mr-2"> 
                <i
                  className="fa fa-images"
                  style={{
                    cursor: "pointer",
                    color: "#21d617",
                  }}
                  data-toggle="modal"
                  data-target={`#mt${phim.maPhim}`}
                ></i>
                <UpLoadHinhAnh phim={phim} />
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mã Phim</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col" className="text-center">
              Nội Dung
            </th>
            <th scope="col">Ngày Khởi Chiếu</th>
            <th scope="col">Đánh giá</th>
            <th scope="col">Thao Tác</th>
          </tr>
        </thead>
        <tbody>{renderDanhSachPhim()}</tbody>
      </table>
    </div>
  );
}
