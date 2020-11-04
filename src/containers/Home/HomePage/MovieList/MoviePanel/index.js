import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import * as movieAction from 'redux/actions/QuanLyPhimAction';
import MovieTrailer from "../../MovieTrailer";
import { NavLink } from "react-router-dom";
var moment = require('moment');
class MoviePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieItem: {},
    }
  }
  showMovieItemTrailer = (movieItemRender) => {
    this.setState({movieItem: movieItemRender})
  }

  renderMovieItem = (movieListDivision) =>{
    return movieListDivision?.map((movieItem, index) => {
      return (
        <div className="movie-card" key={index}>
          <NavLink className="card-link" to={`/movie-detail/${movieItem.maPhim}`}>
            <div className="card-content">
              <div className="content-left">
                <div className="left-header-movie">
                  <h1 className="movie-name">{movieItem.tenPhim}</h1>
                  {/* <h4 className="group-id">{phim.maNhom}</h4> */}
                  <p className="during-time">120 phút | </p>
                  <p className="date-time">
                    {moment(movieItem.ngayKhoiChieu).format("DD-MM-yyyy")}
                  </p>
                  <div className="below-header">
                  <p className="description">{movieItem.moTa}</p>
                </div>
                </div>
              </div>
              <div
                className="content-right"
                style={{ backgroundImage: `url(${movieItem.hinhAnh})` }}
              ></div>
            </div>
          </NavLink>
          <div
            className="play-trailer"
            data-toggle="modal"
            data-target={`#${"d" + movieItem.maPhim}`}
            onMouseOver={() => this.showMovieItemTrailer(movieItem)}
          >
            <i className="play-icon fa fa-play"></i>
          </div>
          {/* <MovieTrailer xemChiTiet={this.props.movieList} /> */}
        </div>
      )
    })
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 7000,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    };
    let movieList = this.props.movieList;
    let currentDateConfig = moment().subtract(500, 'days').calendar();
    let showingMovies = movieList.filter(movieFilter => moment(movieFilter.ngayKhoiChieu).format("DD-MM-yyyy") > moment(currentDateConfig).format("DD-MM-yyyy"));
    let comingMovies = movieList.filter(movieFilter => moment(movieFilter.ngayKhoiChieu).format("DD-MM-yyyy") < moment(currentDateConfig).format("DD-MM-yyyy"))
    //let tabId = showingMovies ? "movie-showing" : "movie-upcoming";
    //let tabActive = showingMovies ? "actie=ve" : "movie-upcoming";
    return (
      <Fragment>
        <div className="container">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="movie-showing-tab" data-toggle="pill" href="#movie-showing" role="tab" aria-controls="movie-showing" aria-selected="true">đang chiếu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="movie-upcoming-tab" data-toggle="pill" href="#movie-upcoming" role="tab" aria-controls="movie-upcoming" aria-selected="false">sắp chiếu</a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="movie-showing" role="tabpanel" aria-labelledby="movie-showing-tab">
              <div className="moviepanel">
                <div className="row moviepanel__slider">
                  <div className="container">
                    <div className="col-12 slider__list">
                      <Slider {...settings}>
                        {this.renderMovieItem(showingMovies)}
                      </Slider>
                    </div>
                  </div>
                </div>
                <MovieTrailer xemChiTiet={this.state.movieItem} />
              </div>
            </div>
            <div className="tab-pane fade show" id="movie-upcoming" role="tabpanel" aria-labelledby="movie-upcoming-tab">
              <div className="moviepanel">
                <div className="row moviepanel__slider">
                  <div className="container">
                    <div className="col-12 slider__list">
                      <Slider {...settings}>
                        {this.renderMovieItem(comingMovies)}
                      </Slider>
                    </div>
                  </div>
                </div>
                <MovieTrailer xemChiTiet={this.state.movieItem} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      
      
    )
  }
  componentDidMount(){
    this.props.dispatch(movieAction.getMovieListAxios());
  }
}

const mapStateToProps = state => ({
  movieList: state.QuanLyPhimReducer.movieList
})
export default connect(mapStateToProps)(MoviePanel)
