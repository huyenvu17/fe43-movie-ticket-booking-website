import { combineReducers } from "redux";
import QuanLyPhimReducer from '../reducers/QuanLyPhimReducer';
import QuanLyNguoiDungReducer from '../reducers/QuanLyNguoiDungReducer';
import QuanLyTinTucReducer from 'redux/reducers/QuanLyTinTucReducer';
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyTinTucReducer
});

export default rootReducer;
