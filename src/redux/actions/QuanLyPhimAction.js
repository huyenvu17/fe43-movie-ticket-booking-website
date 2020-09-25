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
    // axios({
    //   url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    //   method: 'GET'
    // }).then(res => {
    //   // sau khi lay du lieu tu api => dispatch reducer danhsachphim
    //   dispatch(MovieTypes.getMovieListAction(res.data))
    //   console.log(res.data)
    // }).catch(error => {
    //   console.log(error);
    // })
    quanLyPhimServices.layDanhSachPhim().then((res)=>{
    //Sau khi lấy dữ liệu từ  api => dispatch reducer danh sách phim
          dispatch(MovieTypes.getMovieListAction(res.data))
          console.log(res.data)
    }).catch((err)=>{
      console.log(err);
    });
  }
}
