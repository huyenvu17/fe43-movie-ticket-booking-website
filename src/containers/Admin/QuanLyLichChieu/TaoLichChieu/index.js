import React, { useEffect, useState } from "react";
import BangLichChieu from "../BangLichChieu";
import { quanLyPhimServices } from "services/QuanLyPhimServices";
import { quanLyAdminService } from "services/QuanLyAdminServices";
import Swal from "sweetalert2";
import { GiFilmProjector, GiSandsOfTime,  } from 'react-icons/gi'
import { SiCinema4D } from 'react-icons/si'
import { FaTicketAlt } from 'react-icons/fa'
export default function TaoLichChieu(props) {
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layDanhSachPhim()
      .then((result) => {
        setDanhSachPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  let [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layHeThongRap()
      .then((result) => {
        setHeThongRap(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  var moment = require("moment");
  let [maPhim, setMaPhim] = useState();
  const layMaPhim = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };

  let [maHeThongRap, setMaHeThongRap] = useState();
  const layMaHeThongRap = (event) => {
    let maHeThongRap = event.target.value;
    setMaHeThongRap(maHeThongRap);
  };

  let [maCumRap, setMaCumRap] = useState();
  const layMaCumRap = (event) => {
    let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };

  let [gioChieu, setGioChieu] = useState();
  const layGioChieu = (event) => {
    let gioChieu = event.target.value;
    setGioChieu(gioChieu);
  };

  let [ngayChieu, setNgayChieu] = useState();
  const layNgayChieu = (event) => {
    let ngayChieu = moment(event.target.value).format("DD/MM/yyyy");
    setNgayChieu(ngayChieu);
  };

  let ngayChieuGioChieu = `${ngayChieu} ${gioChieu}`;

  let [giaVe, setGiaVe] = useState();
  const layGiaVe = (event) => {
    let giaVe = parseInt(event.target.value);
    setGiaVe(giaVe);
  };

  let [maRap, setMaRap] = useState();
  const layMaRap = (event) => {
    let maRap = event.target.value;
    setMaRap(maRap);
  };

  let [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    quanLyPhimServices
      .layThongTinCumRapTheoHeThong(maHeThongRap)
      .then((result) => {
        setCumRap(result.data);
      })
      .catch((err) => {
      });
  }, [maHeThongRap]);

  const renderHinhAnhPhim = () => {
    return danhSachPhim.map((phim, index) => {
      if (maPhim === phim.maPhim) {
        return <img src={phim.hinhAnh} alt={phim.hinhAnh} key={index} className="img-fluid mb-4" />;
      } else {
        return null;
      }
    });
  };
  const renderPhim = () => {
    return danhSachPhim?.map((phim, index) => {
      return (
        <option value={phim.maPhim} key={index}>
          {phim.tenPhim}
        </option>
      );
    });
  };

  const renderHeThongRap = () => {
    return heThongRap?.map((heThongRap, index) => {
      return (
        <option value={heThongRap.maHeThongRap} key={index}>
          {heThongRap.tenHeThongRap}
        </option>
      );
    });
  };

  const renderCumRap = () => {
    return cumRap.map((item, index) => {
      return (
        <option value={item.maCumRap} key={index}>
          {item.tenCumRap}
        </option>
      );
    });
  };

  const renderRap = () => {
    return cumRap?.map((item) => {
      if (maCumRap === item.maCumRap) {
        return item.danhSachRap.map((rap, index) => {
          return (
            <option value={rap.maRap} key={index}>
              {rap.tenRap}
            </option>
          );
        });
      }
    });
  };

  const taoLichChieu = () => {
    let thongTinLichChieu = {
      maPhim: maPhim,
      ngayChieuGioChieu: ngayChieuGioChieu,
      maRap: maRap,
      giaVe: giaVe,
    };
    quanLyAdminService
      .taoLichChieu(thongTinLichChieu)
      .then((res) => {
        Swal.fire({
          title: "Thêm lịch chiếu thành công",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          icon: "error",
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-12">
          <h3>Thêm Lịch Chiếu</h3>
          <form>
            <div className="row">
              <div className="col-md-6">
                {/* Chọn Phim */}
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-film" />
                    </span>
                  </div>
                  <select
                    className="form-control"
                    id="selection"
                    onChange={layMaPhim}
                  >
                    <option value="#">--Chọn Phim--</option>
                    {renderPhim()}
                  </select>
                </div>
                {/* Chọn Hệ Thống Rạp */}
                <div className="input-group mt-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                   <i className="fa fa-home" />
                    </span>
                  </div>
                  <select
                    className="form-control"
                    id="selection"
                    onChange={layMaHeThongRap}
                  >
                    <option value="#">--Chọn Hệ Thống Rạp Chiếu--</option>
                    {renderHeThongRap()}
                  </select>
                </div>
                {/* Chọn cụm rạp */}
                <div className="input-group mt-4 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                   <GiFilmProjector/>
                    </span>
                  </div>
                  <select
                    className="form-control"
                    id="selection"
                    onChange={layMaCumRap}
                  >
                    <option value="#">--Chọn Cụm Rạp Chiếu--</option>
                    {renderCumRap()}
                  </select>
                </div>
                {/* Chọn Rạp Chiêu */}
                <div className="input-group mt-4 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                  <SiCinema4D/>
                    </span>
                  </div>
                  <select
                    className="form-control"
                    id="selection"
                    onChange={layMaRap}
                  >
                    <option value="#">--Chọn Rạp Chiếu--</option>
                    {renderRap()}
                  </select>
                </div>                      
              </div>
              <div className="col-md-6 ">
              {/* Tạo ngày chiếu và giờ chiếu*/}
              <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <i className="fa fa-calendar-alt"></i>
                      </span>
                    </div>
                    <input
                      type="date"
                      name="ngayChieu"
                      min="today"
                      className="form-control input-sm"
                      placeholder="Ngày Chiếu"
                      onChange={layNgayChieu}
                      required
                    />
                  </div>               
                </div>                             
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                   <GiSandsOfTime/>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="gioChieu"
                      className="form-control input-sm"
                      placeholder="Giờ Chiếu (giờ:phút:giây)"
                      onChange={layGioChieu}
                      required
                    />
                  </div>               
                </div>                           
              {/* Giá vé  */}
                <div className="input-group mt-4 ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                    <FaTicketAlt/>
                    </span>
                  </div>
                  <select
                    className="form-control"
                    id="selection"
                    name="giaVe"
                    onChange={layGiaVe}
                  >
                  <option value="#">--Chọn giá vé--</option>
                      <option value="75000">75.000đ</option>
                      <option value="95000">90.000đ</option>
                  </select>
                </div>             
              </div>
            </div>
          </form>
          <button className="btn btn-primary mt-2" 
          onClick={() => {
            Swal.fire({
              title: "Tạo lịch chiếu này?",
              icon: "error",             
              dangerMode: true,
            }).then((Delete) => {
              if (Delete) {
                taoLichChieu();
              }
            });
          }}
          >Thêm Lịch Chiếu</button>
        </div>
        <div className="col-md-3 col-sm-12">
        {renderHinhAnhPhim()}
        </div>
      </div>
      <BangLichChieu maPhim={maPhim} />
    </div>
  );
}
