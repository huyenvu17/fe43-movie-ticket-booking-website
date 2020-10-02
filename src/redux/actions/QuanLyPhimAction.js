import * as MovieTypes from '../types/QuanLyPhimType';
import * as MovieConstants from '../constants/movieContants';
import { quanLyPhimServices } from '../../services/QuanLyPhimServices'
import axios from 'axios';
import { result } from 'lodash';
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
    quanLyPhimServices.layCumRapTheoHeThong().then(res => {
      console.log(res.data)
      dispatch(MovieTypes.getMovieTheaterAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
