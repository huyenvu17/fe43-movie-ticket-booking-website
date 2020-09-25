import axios from "axios";
import { domain, groupID } from "../Config/config";

export class QuanLyPhimServices {
  constructor() {}
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
  layHeThongRap = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };

  layCumRapTheoHeThong = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`,
      method: "GET",
    });
  };

  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  };

  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  
}

export const quanLyPhimServices = new QuanLyPhimServices();
