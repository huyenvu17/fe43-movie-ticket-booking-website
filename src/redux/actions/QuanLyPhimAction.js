import * as MovieTypes from 'redux/types/QuanLyPhimType';
import { quanLyPhimServices } from 'services/QuanLyPhimServices'
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
      dispatch(MovieTypes.getMovieTheaterAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
