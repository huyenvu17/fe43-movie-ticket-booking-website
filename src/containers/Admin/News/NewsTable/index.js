import { TablePagination } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
import AddNew from "../../News/AddNews";
import EditNews from "../EditNews";
var moment = require("moment");
export default function NewsTable() {
  let [danhSachTinTuc, setDanhSachTinTuc] = useState([]);
  useEffect(() => {
    quanLyAdminService
      .layDanhSachTinTuc()
      .then((result) => {
        console.log(result.data);
        setDanhSachTinTuc(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const xoaTinTuc = (id) => {
    quanLyAdminService
      .xoaTinTuc(id)
      .then((res) => {
        Swal.fire({
          title: "Xóa tin thành công",
          icon: "success",
          button: "OK",
        });
        quanLyAdminService
          .layDanhSachTinTuc()
          .then((result) => {
            setDanhSachTinTuc(result.data);
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      })
      .catch((err) => {
        Swal.fire({
          title: err.response.data,
          text: "Xóa không thành công",
          icon: "error",
        });
      });
  };
  const renderDanhSachTinTuc = () => {
    return danhSachTinTuc?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((tintuc, index) => {
      return (
        <tr tabIndex={-1} key={index}>
          <th scope="row">{tintuc.id}</th>
          <td>{tintuc.tieuDe}</td>
          <td>{tintuc.noiDung}</td>
          <td>
            <img src={tintuc.hinhAnh1} height="70" width="90"></img>
          </td>
          <td>
            <img src={tintuc.hinhAnh2} height="70" width="90"></img>
          </td>
          <td>
            <img src={tintuc.hinhAnh2} height="70" width="90"></img>
          </td>
          <td>{moment(tintuc.ngayDang).format("DD/MM/YYYY")}</td>
          <td>{tintuc.likes}</td>
          <td>{tintuc.shares}</td>
          <td>{tintuc.nguoiDang}</td>
          <td>
            <div style={{display:"inline-block"}}>
            <div className="edit mr-2">
              {/* Sự kiện sửa tin tức*/}
              <i
                className="fa fa-edit"
                style={{
                  cursor: "pointer",
                  color: "#0e3cc9",
                }}
                data-toggle="modal"
                data-target={`#d${tintuc.id}`}
              ></i>
              <EditNews tintuc={tintuc} />
            </div>
            <div className="delete mr-2">
              {/* Sự Kiện Xóa tin tức */}
              <i
                className="fa fa-trash"
                style={{
                  cursor: "pointer",
                  color: "#d61313",
                }}
                onClick={() => {
                  Swal.fire({
                    title: "Bạn chắc chứ?",
                    text: `Xoá tin này`,
                    icon: "error",                 
                  }).then((Delete) => {
                    if (Delete) {
                      xoaTinTuc(tintuc.id);
                    }
                  });
                }}
                data-toggle="tooltip"
                data-placement="top"
                title="Xóa Phim"
              ></i>
            </div>          
            </div>
            </td>
        </tr>
      );
    });
  };
  //Phân Trang
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(+event.target.value));
    setPage(0);
  };
  return (
    <div>
      <button
        className="btn btn-primary mb-2"
        data-toggle="modal"
        data-target="#addNews"
      >
        Thêm Tin Tức
      </button>
      <AddNew />
      <table className="table  table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Tiêu Đề</th>
            <th scope="col">Nội Dung</th>
            <th scope="col">Hình Ảnh 1</th>
            <th scope="col">Hình Ảnh 2</th>
            <th scope="col">Hình Ảnh 3</th>
            <th scope="col">Ngày Đăng</th>
            <th scope="col">Likes</th>
            <th scope="col">Shares</th>
            <th scope="col">Người Đăng</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderDanhSachTinTuc()}</tbody>
      </table>
      <TablePagination
           labelRowsPerPage={"Số Tin Tức Cần Hiển Thị"}
          rowsPerPageOptions={[5 , 10 , 20 , 50 ,100]}
          component="div"
          count={danhSachTinTuc.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  );
}
