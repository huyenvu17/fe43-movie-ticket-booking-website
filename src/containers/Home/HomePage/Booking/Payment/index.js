import React from "react";
import { userLogin } from "Config/config";
import { quanLyNguoiDung } from "services/QuanLyNguoiDungServices";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import QuanLyNguoiDung from "containers/Admin/Users";
import movieLine from 'content/images/illustrations/movie-lines.svg';
export default function Payment(props) {
  let { thongTinPhongVe, danhSachGheDangDat, param } = props;
  const renderThongTinGheDat = () => {
    return danhSachGheDangDat.map((gheDaDat, index) => {
      let danhSachGheDatCount = danhSachGheDangDat.length;
      console.log(danhSachGheDangDat.length)
      return <span key={index}>{danhSachGheDatCount > 0 ? gheDaDat.tenGhe : 'Chưa chọn ghế'}{danhSachGheDatCount > 1 && ', '}</span>;
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
          'Xác nhận đặt vé??',
          'Bạn muốn đặt vé phim này?',
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
    <div className="col-md-4 col-sm-12 checkout__form">
      <div className="">
        <div className="row">
          <div className="col-12">
            <img src={movieLine} className="movie-line img-fluid my-2" />
          </div>
          <div className="col-12">
          <div className="checkout__moviename">
            {thongTinPhongVe.thongTinPhim?.tenPhim}
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="checkout__title">Ghế</div>
            <div className="checkout__ticketitem">
              {danhSachGheDangDat.length > 0 ? renderThongTinGheDat() : 'Chưa chọn ghế'}
            </div>
          </div>
          <div className="col-6 text-right">
            <div className="checkout__title">Lịch chiếu</div>
            <div className="checkout__ticketitem">
              {thongTinPhongVe.thongTinPhim?.ngayChieu} - {" "}
              {thongTinPhongVe.thongTinPhim?.gioChieu}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="checkout__title">Cụm Rạp</div>
            <div className="checkout__ticketitem">
              <p>{thongTinPhongVe.thongTinPhim?.tenCumRap} <br />{thongTinPhongVe.thongTinPhim?.diaChi}</p>
            </div>
          </div>
          <div className="col-6 text-right">
            <div className="checkout__title">Rạp</div>
            <div className="checkout__ticketitem">
              {thongTinPhongVe.thongTinPhim?.tenRap}
            </div>
          </div>
        </div>
        <div className="row payment-total">
          <div className="col-6">
            <div className="checkout__ticketitem">TỔNG TIỀN</div>
          </div>
          <div className="col-6 text-right">
            <div className="checkout__ticketitem">
              {renderTinhTongTien()} ₫
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-success btn-solid-dark w-100" onClick={() => datVe()}>
            Thanh Toán
          </button>
        </div>
        <div className="col-12">
        <img src={movieLine} className="movie-line img-fluid my-3" />
        </div>
      </div>
    </div>
  );
}
