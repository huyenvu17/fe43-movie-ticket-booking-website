import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {connect} from 'react-redux';
import * as movieAction from 'redux/actions/QuanLyPhimAction';
import movieLine from 'content/images/illustrations/movie-lines.svg';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import {Tab, Nav} from 'react-bootstrap';
import * as config from 'Config/config'
class MovieTheater extends Component {
 
  renderTheaterLogo = (theaterList) => {
    return theaterList.map((theater, index) => {
      return(
        <Nav.Item key={index}>
          <Nav.Link eventKey={theater.maHeThongRap}>
            <img src={theater.logo}  />
            <div>{theater.tenHeThongRap}</div>
          </Nav.Link>
        </Nav.Item>
      )
    })
  }
  renderTheaterMovieList = (movieTheaterList) => {
    return movieTheaterList.map((theaterList, index) => {
      return (
        <Tab.Pane eventKey={theaterList.maHeThongRap} key={index}>
          <img src={movieLine} />
          <Tab.Container defaultActiveKey={config.firstMovieTheaterBranchTab}>
            <div className="row">
              <div className="col-5">
                <Nav variant="pills" className="flex-column" id="theaterListGroupTab">
                  {theaterList.lstCumRap.map((theaterListGroup, theaterListGroupIndex) => {
                    return (
                      <Nav.Item key={theaterListGroupIndex}>
                        <Nav.Link eventKey={theaterListGroup.maCumRap}>
                          <div>{theaterListGroup.tenCumRap}</div>
                          <div>{theaterListGroup.diaChi}</div>
                        </Nav.Link>
                      </Nav.Item>
                    )
                  })}
                </Nav>
              </div>
            <div className="col-7">
              {theaterList.lstCumRap.map((theaterListGroupContent, theaterListGroupContentIndex)=>{
                return(
                  <Tab.Content key={theaterListGroupContentIndex}>
                      <Tab.Pane eventKey={theaterListGroupContent.maCumRap}>
                        {theaterListGroupContent.danhSachPhim?.map((movieScheduleList, movieScheduleIndex) => {
                          return (
                            <div key={movieScheduleIndex} id="theaterListGroupTabContent" >
                              <img src={movieScheduleList.hinhAnh} className="theater__tabmovie-img" />
                              <div>{movieScheduleList.tenPhim}</div>
                              <div>
                                {movieScheduleList.lstLichChieuTheoPhim?.slice(0,5).map((movieScheduleItem, movieScheduleItemIndex) => {
                                  let ngayChieuFormat = moment(movieScheduleItem.ngayChieuGioChieu).format('hh:mm A');
                                  return (
                                    <NavLink className="col-3" key={movieScheduleItemIndex} to={`/booking/${movieScheduleItem.maLichChieu}`}>{ngayChieuFormat}</NavLink>
                                  )
                                })
                                }
                              </div>
                            </div>
                          )
                        })}
                      </Tab.Pane>
                    </Tab.Content>
                )
              })}
            </div>
          </div>
          </Tab.Container>
        </Tab.Pane>
      )
    })
  }
  render() {
    return (
      <div className="container theater" id="movieTheater">
        <div className="heading-md">lịch chiếu</div>
        <Tab.Container defaultActiveKey={config.firstMovieTheaterTab}>
          <div className="row theater__panel">
            <div className="col-3 theater__panel-tab">
              <Nav variant="pills" className="flex-column" id="movieTheaterTab">
                {this.renderTheaterLogo(this.props.movieTheater)}
              </Nav>
            </div>
            <div className="col-9 theater__panel-content">
              <Tab.Content id="movieTheaterTabContent">
                {this.renderTheaterMovieList(this.props.movieTheater)}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
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
