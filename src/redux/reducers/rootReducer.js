import { combineReducers } from "redux";
import QuanLyPhimReducer from '../reducers/QuanLyPhimReducer';
import QuanLyNguoiDungReducer from '../reducers/QuanLyNguoiDungReducer';
const rootReducer = combineReducers({
    QuanLyPhimReducer,
    // QuanLyNguoiDungReducer,
    
});

export default rootReducer;
