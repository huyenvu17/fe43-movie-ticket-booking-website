import React, { Fragment, useEffect, useState } from 'react'
import  { quanLyPhimServices } from 'services/QuanLyPhimServices'
import MovieInfo from './MovieInfo';
import Time from './Times';
const DetailMovie = (props) => {
  let [phim, setPhim] = useState([]);
  useEffect(() => {
    quanLyPhimServices.layThongTinPhim(props.match.params.maPhim).then((result) => {
      setPhim(result.data);
    });
  }, [props.match.params.maPhim]);

  return (
    <Fragment>
      <MovieInfo phim={phim} />
      <Time phim={phim} maPhim={props.match.params.maPhim}/>
    </Fragment>
  );
};

  export default DetailMovie;