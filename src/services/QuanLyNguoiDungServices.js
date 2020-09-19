import axios from "axios";
import { domain } from "../Config/config";
export class QuanLyNguoiDung {
  dangNhap = (userLogin) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userLogin,
    });
  };
}
export const quanLyNguoiDung = new QuanLyNguoiDung();
