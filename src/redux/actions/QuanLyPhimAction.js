import * as MovieTypes from '../types/QuanLyPhimType';
import { quanLyPhimServices } from "../../services/QuanLyPhimServices";
import axios from 'axios';
export const xemChiTietAction = (maPhim) => {
  return { type: MovieTypes.XEM_CHI_TIET, maPhim };
};
export const getMovieListAxios = () => {
  return dispatch => {
    quanLyPhimServices.layDanhSachPhim().then(res => {
      dispatch(MovieTypes.getMovieListAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
export const getMovieScheduleAxios = () => {
  return dispatch => {
    quanLyPhimServices.layHeThongRap().then(res => {
      dispatch(MovieTypes.getMovieListAction(res.data))
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    })
  }
}
