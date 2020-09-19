import { DANG_NHAP } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (taiKhoan) => {
  return { type: DANG_NHAP, taiKhoan };
};
