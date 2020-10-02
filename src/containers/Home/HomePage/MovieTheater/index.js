import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import * as movieAction from '../../../../redux/actions/QuanLyPhimAction';
import movieLine from '../../../../content/images/illustrations/movie-lines.svg';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
class MovieTheater extends Component {
  renderTheaterLogo = (theaterList) => {
    return theaterList.map((theater, index) => {
      return(
          <a key={index} className="nav-link" 
             id={theater.maHeThongRap} data-toggle="pill" 
             href={`#${theater.maHeThongRap}`} 
             role="tab" 
             aria-controls={theater.maHeThongRap}
             aria-selected="true"
             >
            <img src={theater.logo}  />
          </a>
      )
    })
  }
  renderTheaterMovieList = (movieTheaterList) => {
    return movieTheaterList.map((theaterList, index) => {
      return (
        <div key={index}
            className="tab-pane fade show" 
            id={theaterList.maHeThongRap} 
            role="tabpanel" 
            aria-labelledby={theaterList.maHeThongRap}>
          <img src={movieLine} />
          {theaterList.lstCumRap.map((theaterListGroup, theaterListGroupIndex) => {
            return (
              <div index={theaterListGroupIndex} className="row">
                <div className="col-5">
                <div>{theaterListGroup.tenCumRap}</div>
                <div>{theaterListGroup.diaChi}</div>
                </div>
                <div className="col-7">
                  {theaterListGroup.danhSachPhim?.map((movieScheduleList, movieScheduleIndex) => {
                    return(
                      <div key={movieScheduleIndex}>
                        <img src={movieScheduleList.hinhAnh} />
                        <div>{movieScheduleList.tenPhime}</div>
                        <div>
                          {movieScheduleList.lstLichChieuTheoPhim.map((movieScheduleItem, movieScheduleItemIndex) => {
                            let ngayChieuFormat = moment(movieScheduleItem.ngayChieuGioChieu).format('DD-MM hh:mm a');
                            return (
                              <NavLink className="col-3" key={movieScheduleItemIndex} to={`/bookingTicket/${movieScheduleItem.maLichChieu}`}>{ngayChieuFormat}</NavLink>
                            )
                          })
                          }
                        </div>
                      </div>
                    )
                    
                  })}
                </div>
              </div>
            )
          })}
          
        </div>
      )
    })
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: '10px',
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    console.log(this.props.movieTheater)
    return (
      <div className="container" id="movieTheater">
        <div className="heading-md">lịch chiếu</div>
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="nav flex-column nav-pills" id="movieTheaterTab" role="tablist" aria-orientation="vertical">
              {this.renderTheaterLogo(this.props.movieTheater)}
            </div>
          </div>
          <div className="col-12 col-md-9">
          <div className="tab-content" id="movieTheaterTabContent">
            {this.renderTheaterMovieList(this.props.movieTheater)}
          </div>
          </div>
        </div>
      </div>

    )
  }
  componentDidMount(){
    this.props.dispatch(movieAction.getMovieScheduleAxios());
  }
}

const mapStateToProps = state => ({
  movieTheater: state.QuanLyPhimReducer.movieTheater
})
export default connect(mapStateToProps)(MovieTheater)
