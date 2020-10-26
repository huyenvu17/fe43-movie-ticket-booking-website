import React, { Fragment, useState, useEffect } from "react";
import { quanLyPhimServices  } from "services/QuanLyPhimServices";
import ChooseChair from "./ChooseChair";
import Payment from "./Payment";
export default function Booking(props) {
  let [thongTinPhongVe, setThongTinPhongVe, loadingThongtinPhongVe, setLoadingThongTinPhongVe] = useState({});
  let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([]);
  let { maLichChieu } = props.match.params;
  useEffect(() => {
    quanLyPhimServices
      .layThongTinPhongVe(maLichChieu)
      .then((result) => {
        setThongTinPhongVe(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [maLichChieu]);
  return (
    <Fragment>
      <div className="container-fluid bg-light" style={{ paddingTop: 20 }}>
        <div className="booking__content row">
          <div className="booking__wrapper row">
            <ChooseChair
              param={props}
              thongTinPhongVe={thongTinPhongVe}
              danhSachGheDangDat={danhSachGheDangDat}
              setDanhSachGheDangDat={setDanhSachGheDangDat}
            />
            <Payment
              param={props}
              thongTinPhongVe={thongTinPhongVe}
              danhSachGheDangDat={danhSachGheDangDat}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
