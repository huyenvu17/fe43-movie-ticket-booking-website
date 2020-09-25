import React, { useEffect, useState } from "react";
import { quanLyPhimServices } from "../../../../../services/QuanLyPhimServices";
import moduleName from "module";
import { quanLyAdminService } from "../../../../../services/QuanLyAdminServices";
import { result } from "lodash";
import { event } from "jquery";

var moment = require("moment");
export default function MovieSearchForm(props) {
  //Lấy danh sách phim
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.reponse.data);
      });
  });
  //Lấy danh sách hệ thống rạp
  let [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
      }).catch((err) => {
        console.log(err.reponse.data);
      });
  });
  //Lấy ma Cụm Rạp Chiếu
  let [maHeThongRap, setMaHeThongRap] = useState();
  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };
  //Load danh sách rạp
  const renderHeThongRap = () => {
    return heThongRap?.map((heThongRap, index) => {
      return(
        <option value= {heThongRap.maHeThongRap} key={index}>
          {heThongRap.tenHeThongRap}
        </option>
      )
    });
  };
  //Lấy mã phim
  let [maPhim, setMaPhim] = useState([]);
  const layMaPhim = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };
  //Load danh sách chọn phim
  const renderDanhSachPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <option value={phim.maPhim} key={index}>
          {phim.tenPhim}
        </option>
      );
    });
  };
  //Lấy giờ chiếu ngày chiếu
  return (
    <form>
      <div className="form-row">
        <h1 className="heading-lg">PHIM HAY TRÊN MOTI</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <select id="inputState" className="form-control" onChange={layMaPhim}>
            <option selected>Phim</option>
            {renderDanhSachPhim()}
          </select>
        </div>
        <div className="form-group col-6">
          <select id="inputState" className="form-control" onChange={layMaHeThongRap}>
            <option selected value="choose theater" > Chọn Rạp Chiếu </option>
            {renderHeThongRap()}
          
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <select id="inputState" className="form-control">
            <option selected>Ngày Xem</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-6">
          <select id="inputState" className="form-control">
            <option selected>Xuất Chiếu</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-12">
          <button className="btn btn-primary btn-solid-dark">đặt vé</button>
        </div>
      </div>
    </form>
  );
}
