import axios from "axios";
import { domain, token, groupID } from "../Config/config";

export class QuanLyAdmin {

  //Service Phim
  themPhim = (form_data) => {
    return axios({
      url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: form_data,
    });
  };

  uploadHinhAnhPhim = (hinhAnh) => {
    return axios({
      url: `${domain}/QuanLyPhim/UploadHinhAnhPhim`,
      method: "POST",
      data: hinhAnh,
    });
  };

  suaPhim = (phim) => {
    return axios({
      url: `${domain}/QuanLyPhim/CapNhatPhim  `,
      method: "POST",
      data: phim,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
  xoaPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
 //Service Người Dùng
  layDanhSachNguoiDung = () => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`,
      method: "GET",
    });
  };
  themNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
  capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: thongTinNguoiDung,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
  xoaNguoiDung = (taiKhoan) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
  taoLichChieu = (thongTin) => {
    return axios({
      url: `${domain}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data: thongTin,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

}
export const quanLyAdminService = new QuanLyAdmin();
