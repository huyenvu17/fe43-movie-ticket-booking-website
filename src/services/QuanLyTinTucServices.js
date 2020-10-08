import axios from "axios";
import { news_domain } from "../Config/config";
export class QuanLyTinTucServices {
  constructor() {}
  layDanhSachTinTuc = () => {
    return axios({
      url: `${news_domain}/tintuc`,
      method: "get",
    });
  };
  layChiTietTinTuc = (newsId) =>{
    return axios({
      url: `${news_domain}/tintuc/${newsId}`,
      method: "get",
    })
  }
  
}

export const quanLyTinTucServices = new QuanLyTinTucServices();
