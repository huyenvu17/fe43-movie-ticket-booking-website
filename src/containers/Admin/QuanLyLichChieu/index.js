import React from "react";
import TaoLichChieu from "./TaoLichChieu";
import { userLogin } from "../../../Config/config";

export default function QuanLyLichChieu(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (
    !localStorage.getItem(userLogin) ||
    info.maLoaiNguoiDung === "KhachHang"
  ) {
    props.history.push("/");
  }
  return (
    <div>
      <TaoLichChieu />
    </div>
  );
}
