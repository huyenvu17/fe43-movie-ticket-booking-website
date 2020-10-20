import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { quanLyPhimServices } from "services/QuanLyPhimServices";
import { quanLyAdminService } from "services/QuanLyAdminServices";
import SuaPhim from "../ModalSuaPhim";
import Swal from "sweetalert2";
import UpLoadHinhAnh from "../UpLoadHinhAnh";
import { TablePagination } from "@material-ui/core";
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
    return listDanhSachPhim.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((phim, index) => {
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
              <div className="delete mr-2">
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
                      icon: "error",                   
                    }).then((result) => {
                      if (result.value) {
                        quanLyAdminService
                          .xoaPhim(phim.maPhim)
                          .then((result) => {
                            Swal.fire({
                              title: "Xóa phim thành công",
                              icon: "success",                          
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
                ></i>
              </div>
              {/* Sự kiện upload hình ảnh */}
              <div className="upload mr-2">
                <i
                  className="fa fa-image"
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

  //Phân Trang
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(+event.target.value));
    setPage(0);
  };
 //Tìm kiếm người phim
 const [searchTerm, setSearchTerm] = useState("");
 const [listDanhSachPhim, setlistDanhSachPhim] = useState([]);
 const handleChange = (event) => {
   setSearchTerm(event.target.value);
 };
 useEffect(() => {
  const results = danhSachPhim.filter((phim) => {
    return phim.tenPhim
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  setlistDanhSachPhim(results);
}, [searchTerm, danhSachPhim]);
  return (
    <div>
       <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          name="search"
          placeholder="Nhập tên tài khoản cần tìm....."
        />
        <button className="searchButton" href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
     
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
        <TablePagination
           labelRowsPerPage={"Số Phim Cần Hiển Thị"}
          rowsPerPageOptions={[5 , 10 , 20 , 50 ,100]}
          component="div"
          count={danhSachPhim.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
 
    </div>
    );
}
