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
}
export const quanLyNguoiDung = new QuanLyNguoiDung();
