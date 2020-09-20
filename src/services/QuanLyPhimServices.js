import axios from "axios";
import { domain, groupID } from "../Config/config";

export class QuanLyPhimServices {
  constructor() {}
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
}
export const quanLyPhimServices = new QuanLyPhimServices();
