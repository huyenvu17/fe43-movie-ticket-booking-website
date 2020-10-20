import React from "react";
import { userLogin } from "Config/config";
import { quanLyNguoiDung } from "services/QuanLyNguoiDungServices";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import QuanLyNguoiDung from "containers/Admin/Users";
export default function Payment(props) {
  let { thongTinPhongVe, danhSachGheDangDat, param } = props;
  const renderThongTinGheDat = () => {
    return danhSachGheDangDat.map((gheDaDat, index) => {
      return <span key={index}>Ghế: {gheDaDat.tenGhe}</span>;
    });
  };
  const renderTinhTongTien = () => {
    return danhSachGheDangDat
      .reduce((tongTien, gheDaDat, index) => {
        return (tongTien += gheDaDat.giaVe);
      }, 0)
      .toLocaleString();
  };
  if (!localStorage.getItem(userLogin)) {
    Swal.fire({
      title: "Bạn Chưa Đăng Nhập",
      text: "Đăng Nhập Để Đặt vé Xem Phim",
      icon: "error",
    });
    return <Redirect to="/signin" />;
  }
  const datVe = () => {
    let thongTinDatVe = {
      maLichChieu: param.match.params.maLichChieu,
      danhSachVe: danhSachGheDangDat,
      taiKhoanNguoiDung: JSON.parse(localStorage.getItem("userLogin")).taiKhoan,
    };
    quanLyNguoiDung
      .datVeXemPhim(thongTinDatVe)
      .then((res) => {
        console.log(res.data);
        Swal.fire(
          'Bạn Có Chắc ??',
          'Muốn Đặt Vé Xem Phim ?',
          'question'
        ).then((result) => {
          if (result.value) {
            Swal.fire({
              title: "Thanh toán thành công! Chúc bạn xem phim vui vẻ",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else {
            Swal.fire({
              title: "Chọn Lại Ghế Để Thanh Toán !!!",
              icon: "error",
            });
          }
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div className=" col-md-3 col-sm-12">
      <div className="checkout__form">
        <div className="total__price">
          <span className="price">₫{renderTinhTongTien()}</span>
        </div>
        <div className="movie__info">
          <span className="movie__name--Cine">
            {thongTinPhongVe.thongTinPhim?.tenRap}
          </span>
          <span className="movie__name">
            {thongTinPhongVe.thongTinPhim?.tenPhim}
          </span>
          <p className="movie__detail">
            {thongTinPhongVe.thongTinPhim?.ngayChieu} -{" "}
            {thongTinPhongVe.thongTinPhim?.gioChieu}
          </p>
          <p className="theater__name">
            {thongTinPhongVe.thongTinPhim?.tenCumRap}
          </p>
          <p className="movie__address">
            {thongTinPhongVe.thongTinPhim?.diaChi}
          </p>
        </div>
        <div className="count__slot">
          <div>Ghế đã chọn: </div>
          <div className="slot">{renderThongTinGheDat()}</div>
        </div>
      </div>
      <button className="btn btn-success" onClick={() => datVe()}>
        Thanh toán
      </button>
    </div>
  );
}
