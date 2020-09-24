import React, { Component } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default class MovieItem extends Component {

  render() {
    let {movieItem} = this.props;
    return (
      <div className="row moviepanel__movieitem">
        <div className="col-12 col-md-6 movieitem__info">
          <div className="movieitem__rating"><i className="fa fa-star"></i> <span>{movieItem.danhGia}</span></div>
    <div className="heading-md">{movieItem.tenPhim}</div>
          <div className="text-normal">{movieItem.ngayKhoiChieu}</div>
          <div className="text-normal movieitem__desc">{movieItem.moTa}</div>
          <div className="btn-linking">
            <a href="/" >
              <span>chi tiết</span>
              <IoIosArrowRoundForward />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 movieitem__trailer">
          <iframe width={560} height={315} src={movieItem.trailer} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>
    )
  }
}
