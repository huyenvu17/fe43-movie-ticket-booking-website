import React from "react";
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
    <div style={{ marginTop: "35px" }}>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-light collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Lịch Sử Đặt Vé
              </button>
            </h5>
          </div>

          <div
            id="collapseTwo"
            className="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body bg-light">
              <table className="table table-bordered">
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
