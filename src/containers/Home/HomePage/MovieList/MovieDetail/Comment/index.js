import React, { Fragment, useEffect, useState } from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import {quanLyNguoiDung} from 'services/QuanLyNguoiDungServices'
import ModalComment from '../ModalComment';
export default function Comment(props) {
let { maPhim } = props;
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
  let [binhLuan, setBinhLuan] = useState([]);
  useEffect(() => {
    quanLyNguoiDung
      .layBinhLuanPhim()
      .then((res) => {
        setBinhLuan(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [binhLuan]);
  const renderBinhLuan = () => {
    if (binhLuan) {
      return binhLuan.reverse().map((item, index) => {
        if (item.maPhim === parseInt(maPhim)) {
          return (
            <div className="comment__items" key={index}>
              <div className="comment__info">
                <div className="items__img">
                  <img
                    src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png"
                    alt="commentavt"
                  />
                </div>
                <div className="items__info">
                  <p className="info--name">{item.taiKhoan}</p>
                  <p className="info--time">{item.ngayBinhLuan}</p>
                </div>
                <div className="items__rating">
                  <p className="rating--point">
                    {countRating(item.rating)}
                  </p>
                  <div className="rating--stars">{renderStar(item.rating)}</div>
                </div>
              </div>
              <div className="comment__content">{item.binhLuan}</div>
              <hr />
              <div className="comment__icon">
                <i className="far fa-thumbs-up" />
                <span className="count--number">0 </span>
                <span className="like--text">Thích</span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
    }
  };
    return (
        <Fragment>
        <div className="youthink" data-toggle="modal" data-target="#CommentModal">
          <div className="youthink__items">
            <div className="items__img">
              <img   src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt="avt" height="32" />
              <span style={{backgroundColor:"#17a0b5"}} className="items__text">Bình luận phim đi nào .....</span>
            </div>
            <div className="items__stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        </div>
        <ModalComment maPhim={maPhim} />
        <div className="list__comment">{renderBinhLuan()}</div>
        <div className="readMore">
          <button className="btn btn__readmore btn-primary">XEM THÊM</button>
        </div>
      </Fragment>
    )
}
