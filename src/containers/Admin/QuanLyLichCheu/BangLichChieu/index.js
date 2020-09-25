import React, { useEffect, useState } from "react";
import {quanLyPhimServices } from "../../../../services/QuanLyPhimServices";
var moment = require("moment");
export default function BangLichChieu(props) {
  let { maPhim } = props;
  let [thongTinLichChieu, setThongTinLichChieu]  = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layThongTinPhim(maPhim)
      .then((res) => {
        setThongTinLichChieu(res.data);
      })
      .catch((err) => {});
  }, [maPhim]);

  const renderBangLichChieu = () => {
    return thongTinLichChieu?.heThongRapChieu?.map((rap, index) => {
      return rap.cumRapChieu.map((cumRap) => {
        return cumRap.lichChieuPhim.map((lichChieu) => {
          return (
            <tr key={index}>
              <td>{lichChieu.maLichChieu}</td>
              <td>
                <img  src={rap.logo} height="50" width="50"/>
                <p>{rap.tenHeThongRap}</p>
              </td>
              <td>{cumRap.tenCumRap}</td>     
             <td>{lichChieu.tenRap}</td>
             <td>{moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")}</td>
             <td>{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}</td>
             <td>{lichChieu.giaVe + " VNĐ"}</td>
            </tr>
          );
        });
      });
    });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mã Lịch Chiếu</th>
            <th scope="col">Hệ Thống Rạp</th>
            <th scope="col">Tên Cụm Rạp</th>
            <th scope="col">Tên Rạp</th>
            <th scope="col">Ngày Chiếu</th>
            <th scope="col">Giờ Chiếu</th>
            <th scope="col">Giá Vé</th>
          </tr>
        </thead>
        <tbody>
            {renderBangLichChieu()}
        </tbody>
      </table>
    </div>
  );
}
