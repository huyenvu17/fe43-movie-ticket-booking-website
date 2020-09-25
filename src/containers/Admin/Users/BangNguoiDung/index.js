import React, { useEffect, useState } from "react";
import {} from "../../../../Config/config";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
import Swal from "sweetalert2";
import ModalSuaNguoiDung from "../ModalSuaNguoiDung";
export default function BangNguoiDung() {
  let [danhSachNguoiDung, setDanhSachNguoiDung] = useState([]);
  useEffect(() => {
    quanLyAdminService
      .layDanhSachNguoiDung()
      .then((res) => {
        setDanhSachNguoiDung(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const renderDangSachNguoiDung = () => {
    return danhSachNguoiDung?.map((user, index) => {
      return (
        <tr key={user.taiKhoan}>
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>{user.maLoaiNguoiDung}</td>
          <td>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="edit mr-2">
                {/* Sự kiện sửa thông tin người Dùng */}
                <i
                  className="fa fa-edit"
                  style={{
                    cursor: "pointer",
                    color: "#0e3cc9",
                  }}
                  data-toggle="modal"
                  data-target={`#mte${user.taiKhoan}`}
                ></i>
                <ModalSuaNguoiDung user={user} />
              </div>
              <div className="upload mr-2">
                {/* Sự Kiện Xóa người dùng */}
                <i
                  className="fa fa-trash"
                  style={{
                    cursor: "pointer",
                    color: "#d61313",
                  }}
                  onClick={() => {
                    Swal.fire({
                      title: "Bạn có muốn ?",
                      text: `Xoá người dùng ${user.taiKhoan}`,
                      icon: "error",
                      buttons: true,
                      dangerMode: true,
                    }).then((Delete) => {
                      if (Delete) {
                        quanLyAdminService
                          .xoaNguoiDung(user.taiKhoan)
                          .then((res) => {
                            Swal.fire({
                              title: "Xóa người dùng thành công",
                              icon: "success",
                            });
                            quanLyAdminService
                              .layDanhSachNguoiDung()
                              .then((result) => {
                                setDanhSachNguoiDung(result.data);
                              })
                              .catch((err) => {
                                console.log(err.response.data);
                              });
                          })
                          .catch((err) => {
                            Swal.fire({
                              title: "Xóa Phim không thành công",
                              icon: "error",
                            });
                          });
                      }
                    });
                  }}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="xóa Người Dùng"
                ></i>
              </div>
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên Tài Khoản</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số Điện Thoại</th>
            <th scope="col">Mã Loại Người Dùng</th>
            <th scope="col">Thao Tác</th>
          </tr>
        </thead>
        <tbody>{renderDangSachNguoiDung()}</tbody>
      </table>
    </div>
  );
}
