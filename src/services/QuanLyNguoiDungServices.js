import axios from "axios";
import { domain, token } from "../Config/config";
export class QuanLyNguoiDung {
  dangNhap = (userLogin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  };
  dangKy = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: thongTin,
    });
  };
  layThongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
  thongTinTaiKhoan = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: taiKhoan,
    });
  };
  layBinhLuanPhim = () => {
    return axios({
      url: "https://5f656df5fb1b5700169c9bc4.mockapi.io/binhluan",
      method: "GET",
    });
  };
  themBinhLuanPhim = (binhLuan) => {
    return axios({
      url: "https://5f656df5fb1b5700169c9bc4.mockapi.io/binhluan",
      method: "POST",
      data: binhLuan,
    });
  };
  datVeXemPhim = (thongTinDatVe) => {
    return axios({
      url: `${domain}/quanlydatve/datve`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}
export const quanLyNguoiDung = new QuanLyNguoiDung();
