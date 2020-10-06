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
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-light collapsed"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lịch Sử Đặt Vé
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body bg-light">
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
