import React, { useEffect, useState } from "react";
import { quanLyAdminService } from "../../../../services/QuanLyAdminServices";
var moment = require('moment');
export default function NewsTable() {
  let [danhSachTinTuc, setDanhSachTinTuc] = useState();
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
  const renderDanhSachTinTuc = () => {
    return danhSachTinTuc?.map((item, index) => {
      return (
        <tr tabIndex={-1} key={index}>
          <th scope="row">{item.id}</th>
          <td>{item.tieuDe}</td>
          <td>{item.noiDung}</td>
          <td>
          <img src={item.hinhAnh1} height="70" width="90"></img>
          </td>
          <td>
          <img src={item.hinhAnh2} height="70" width="90"></img>
            </td>
         <td>            
          <img src={item.hinhAnh2} height="70" width="90"></img>
           </td>     
          <td>{moment(item.ngayDang).format("DD/MM/YYYY")}</td>
          <td>{item.likes}</td>
          <td>{item.shares}</td>
          <td>
            <div style={{display: "inline-flex"}}>
            <button className="btn btn-primary"
            
            ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button className="btn btn-danger ml-2"
            
            ><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>         
          </td>
          
        </tr>
      );
    });
  };
  return (
  <div>
    <button className="btn btn-primary mb-2">Thêm Tin Tức</button>
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
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {renderDanhSachTinTuc()}
    </tbody>
  </table>
</div>

  );
}
