import MovieTrailer from "containers/Home/HomePage/MovieTrailer";
import React from "react";
import {BsStarFill, BsStarHalf} from 'react-icons/bs';

export default function MovieInfo(props) {

  let { phim } = props;
  var moment = require("moment");
  const renderStar = (rating) => {
    if (rating > 5) rating = 5;
    var content = [];
    for (let i = 0; i < rating; i++) {
      let star = [];
      star.push(<BsStarFill key={i} />);
      content.push(star);
    }
    for (let i = 0; i < 5 - rating; i++) {
      let star = [];
      star.push(<BsStarHalf key={i}/>);
      content.push(star);
    }
    return content;
  };
  const countRating = (rating) => {
    return rating * 0.5 + 10 * 0.5;
  };
  return (
    <section className="infoMovie">
      <div className="movie_background">
        <img
          src={phim.hinhAnh}
          alt={phim.hinhAnh}
          style={{ height: "450px" }}
        ></img>
        <div className="overlay__gradient" />
        <div
          className="play_trailer"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          <i className="fa fa-play" />
        </div>
        <div className="rating_film">
            <p className="film_point">{countRating(phim.danhGia)}</p>
            <p className="film_star">{renderStar(phim.danhGia)}</p>
        </div>
      </div>
      <div className="info container-fluid">
      <div className="row">
          <div className="movie__poster col-3">
            <div className="poster__img">
              <img
                style={{ width: 220, height: 300 }}
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
              />
              <div
                className="play__btn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-play" />
              </div>
            </div>
          </div>
          <div className="movie__info col-6">
            <div className="showtime">
              {moment(phim.ngayKhoiChieu).format("DD-MM-yy")}
            </div>
            <span className="code_group">{phim.maNhom}</span>
            <span className="name_fiml">{phim.tenPhim}</span>
            <p className="time_film"> 120 phút </p>
            <a href="#movieTheater">
              <button className="bookTicket-btn">Mua Vé</button>
            </a>
          </div>
          <div className="movie__rating col-2">
            <div className="rating__point">
              {countRating(phim.danhGia)}
              <div className="vongtron"></div>
            </div>
            <div className="rating__stars">{renderStar(phim.danhGia)}</div>
            <div className="rating__text">{phim.danhGia} Lượt Đánh Giá</div>
          </div>
        </div>  
      </div>
     <MovieTrailer xemChiTiet = {phim} />
    </section>
  );
}
