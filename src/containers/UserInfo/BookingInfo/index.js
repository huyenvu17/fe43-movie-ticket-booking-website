import React from "react";
import Table from 'react-bootstrap/Table'
var moment = require("moment");
export default function BookingInfo(props) {
  let { thongTin } = props;
  const renderThongTinDatVe = () => {
    return thongTin.thongTinDatVe?.map((ticket, index) => {
      return (
        <tr key={index}>
          <th scope="row">{"#" + Math.floor(Math.random() * 99999)}</th>
          <td>{ticket.tenPhim}</td>
          <td>
            {moment(ticket.ngayDat).format("DD-MM-yyyy")}
            <p>{moment(ticket.ngayDat).format("hh:mm A")}</p>
          </td>
          <td>
            <tr>
              {ticket.danhSachGhe?.map((ghe, index) => {
                return <td key={index}>Ghế: {ghe.tenGhe}</td>;
              })}
            </tr>
          </td>
            <td>{ticket.giaVe}</td>
            <td>{ticket.thoiLuongPhim}</td>
        </tr>
      );
    });
  };
  return (
    <div className="panel">
      <Table responsive="sm" className="userbookingtickets">
      <thead>
          <tr>
            <th scope="col">Mã Vé</th>
            <th scope="col">Tên Phim</th>
            <th scope="col">Thời Gian Đặt Vé</th>
            <th scope="col">Số Ghế </th>
            <th scope="col">Tiền Vé</th>
            <th scope="col">Thời Lượng Phim </th>
          </tr>
        </thead>
        <tbody>
          {renderThongTinDatVe()}
        </tbody>
      </Table>
    </div>
  );
}
