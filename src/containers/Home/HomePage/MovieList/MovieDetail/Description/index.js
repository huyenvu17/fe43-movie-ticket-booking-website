import React from 'react'

export default function Description(props) {
    let { thongTin } = props;
    var moment = require("moment");
    return (
       <div className="container" style={{color:"black"}}>
           <div className="row">
           <div className="listInfo__Fiml col-md-6 col-sm-12">
           <p className="listInfo__name">Tên Phim</p>
           <p className="listInfo__content">{thongTin.tenPhim}</p>
           <p className="listInfo__name">Ngày phát hành</p>
           <p className="listInfo__content">{moment(thongTin.ngayKhoiChieu).format('DD/MM/yyyy')}</p>
           <p className="listInfo__name">Mã Nhóm</p>
           <p className="listInfo__content">{thongTin.maNhom}</p>        
           </div>
           <div className="listInfo__Fiml col-md-6 col-sm-12">
           <p className="listInfo__name">Mô Tả</p>
           <p className="listInfo__content">{thongTin.moTa}</p>               
           </div>
           </div>
       </div>
        
    )
}
