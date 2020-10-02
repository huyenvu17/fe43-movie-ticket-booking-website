import React from "react";
import { userLogin } from "../../Config/config";
import ThongKe from "./ThongKe";
export default function Admin(props) {
  const info = JSON.parse(localStorage.getItem(userLogin));
  if (!localStorage.getItem(userLogin) || info.maLoaiNguoiDung === "KhachHang") {
    props.history.push("/");
  }

    return <ThongKe/>;
}
