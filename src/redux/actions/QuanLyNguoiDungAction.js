import { DANG_NHAP, DANG_XUAT } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (taiKhoan) => {
  return { type: DANG_NHAP, taiKhoan };
};

export const dangXuatAction = () => {
  return { type: DANG_XUAT };
};
