import * as MovieTypes from '../types/QuanLyPhimType';
import * as MovieConstants from '../constants/movieContants';
import axios from 'axios';
export const xemChiTietAction = (maPhim) => {
  return { type: MovieTypes.XEM_CHI_TIET, maPhim };
};
export const getMovieListAxios = () => {
  return dispatch => {
    axios({
      url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET'
    }).then(res => {
      // sau khi lay du lieu tu api => dispatch reducer danhsachphim
      dispatch(MovieTypes.getMovieListAction(res.data))
      console.log(res.data)
    }).catch(error => {
      console.log(error);
    })
  }
}
