import React from 'react'
import moduleName, { userLogin } from 'Config/config';
import NewsTable from './NewsTable';
export default function News(props) {
    const info = JSON.parse((localStorage.getItem(userLogin)));
    if (!localStorage.getItem(userLogin) || info.maLoaiNguoiDung === "KhachHang") {
        props.history.push("/")
    }
    return (
        <div>
            <NewsTable/>
        </div>
    )
}
