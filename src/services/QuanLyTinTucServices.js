import axios from "axios";

export class QuanLyTinTucServices {
  constructor() {}
  layDanhSachTinTuc = () => {
    return axios({
      url: "https://5f656df5fb1b5700169c9bc4.mockapi.io/tintuc",
      method: "get",
    });
  };
  
}

export const quanLyTinTucServices = new QuanLyTinTucServices();
