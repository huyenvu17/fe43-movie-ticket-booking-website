import React, { useEffect, useState } from "react";
import { quanLyPhimServices } from "services/QuanLyPhimServices";
var moment = require("moment");
export default function MovieSearchForm(props) {
  //Lưu trữ local state
  let [danhSachPhim, setDanhSachPhim] = useState([]);
  let [thongTinPhim, setThongTinPhim] = useState([]);
  let [maPhim, setMaPhim] = useState({});
  let [maLichChieu, setMaLichChieu] = useState();
  let [maCumRap, setMaCumRap] = useState();
  let [ngayChieu, setNgayChieu] = useState();
  //Lấy danh sách phim
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
  //Lấy thông tin phim 
  useEffect(() => {
    quanLyPhimServices
      .layThongTinPhim(maPhim)
      .then((result) => {
        setThongTinPhim(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [maPhim]);
   //Lây mã hệ thống rạp chiếu
 const layMaHeThongRap = (event) => {
  let maCumRap = event.target.value;
    setMaCumRap(maCumRap);
  };
  //Lấy mã phim
  const layMaPhim = (event) => {
    let maPhim = parseInt(event.target.value);
    setMaPhim(maPhim);
  };
  //Lấy mã lịch chiếu
  const handleLichChieu = (event) => {
    let maLichChieu = event.target.value;
    setMaLichChieu(maLichChieu);
  };
  //Lấy ngày chiếu
  const handleNgayChieu = (event) => {
    let ngayChieu = event.target.value;
    setNgayChieu(ngayChieu);
  };

//Load danh sách phim
  const renderDanhSachPhim = () => {
  return danhSachPhim?.map((phim, index) => {
    return (
      <option value={phim.maPhim} key={index}>
        {phim.tenPhim}
      </option>
    );
  });
};
//Load  danh sách rạp đang chiếu phim 
const renderCumRap = () => {
  return thongTinPhim.heThongRapChieu?.map((rap) => {
    return rap.cumRapChieu?.map((cumRap, index) => {
      return (
        <option value={cumRap.maCumRap} key={index}>
          {cumRap.tenCumRap}
        </option>
      );
    });
  });
};
  //Lấy giờ chiếu ngày chiếu 
    const groupBy = (array, key) => {
      // trả lại kết quả cuối cùng
      return array.reduce((result, currentValue) => {      
        //Tách Mảng  , lấy mảng có key trùng, tạo mảng mới đẩy các đối tượng vào
        (result[moment(currentValue[key]).format("yyyy-MM-DD")] =
          result[moment(currentValue[key]).format("yyyy-MM-DD")] || []).push(
          currentValue
         
        );
        // Trả về giá trị `kết quả` lặp lại,
        return result;
      }, {}); // Mặc định giá trị rỗng trả lại kết quả
    };
    //Load danh sách ngày chiếu
    const renderNgayChieu = () => {
      return thongTinPhim.heThongRapChieu?.map((rap) => {
        return rap.cumRapChieu.map((cumRap) => {
          if (maCumRap === cumRap.maCumRap) {
            const lichChieuPhim = groupBy(
              cumRap.lichChieuPhim,
              "ngayChieuGioChieu"
            );
            let entries = Object.entries(lichChieuPhim);
            let dataLayout = entries.map(([value], i) => {
              return (
                <option value={value} key={i}>
                  {moment(value).format("DD-MM-yyyy")}
                </option>
              );
            });
            return dataLayout;
          } else {
            return null;
          }
        });
      });
    };
    //Load  danh sách giờ chiếu
    const renderGioChieu = () => {
      return thongTinPhim.heThongRapChieu?.map((rap) => {
        return rap.cumRapChieu?.map((cumRap) => {
          if (maCumRap === cumRap.maCumRap) {
            const lichChieuPhim = groupBy(
              cumRap.lichChieuPhim,
              "ngayChieuGioChieu"
            );
            let entries = Object.entries(lichChieuPhim);
            let dataLayout = entries.map(([index, value], i) => {
              return value.map((item) => {
                if (ngayChieu === index) {
                  return (
                    <option value={item.maLichChieu} key={i}>
                      {moment(item.ngayChieuGioChieu).format("hh:mm A")}
                    </option>
                  );
                } else {
                  return null;
                }
              });
            });
            return dataLayout;
          }
        });
      });
    };
  return (
    <form>
      <div className="form-row">
        <h1 className="heading-lg">PHIM HAY TRÊN MOTI</h1>
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <select id="inputState" className="form-control" defaultValue={'DEFAULT'}  onChange={layMaPhim}>
            <option value="DEFAULT" >Phim</option>
            {renderDanhSachPhim()}
          </select>
        </div>
        <div className="form-group col-6">
          <select id="inputState" className="form-control"  defaultValue={'DEFAULT'} onChange={layMaHeThongRap}>
            <option value="DEFAULT" > Chọn Rạp Chiếu </option>
            {renderCumRap()}
          
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <select id="inputState" className="form-control"  defaultValue={'DEFAULT'}  onChange={handleNgayChieu}>
            <option  value="DEFAULT" >Ngày Xem</option>
            {renderNgayChieu()}
          </select>
        </div>
        <div className="form-group col-6">
          <select id="inputState" className="form-control"  defaultValue={'DEFAULT'} onChange={handleLichChieu}>
            <option value="DEFAULT" >Xuất Chiếu</option>
            {renderGioChieu()}
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
