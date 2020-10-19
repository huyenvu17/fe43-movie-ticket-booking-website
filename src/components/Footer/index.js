import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import MotiLogo from "content/images/logo/moti-logo-white.svg";
export default class Footer extends Component {
  render() {
    return (
      // <div className="footer">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-12 col-sm-6 footer__left">
      //         <div className="heading-md">MOTI</div>
      //         <div className="footer__left__content">MoTi is an online movie booking platform where you can find tickets and enjoy thousands of wonderful movies.</div>
      //         <div className="footer__left_copyright"> 2020 <i className="fa fa-copyright"></i> MOTI team</div>
      //       </div>
      //       <div className="col-12 col-sm-6 footer__right">
      //         <div className="heading-md">Follow us</div>
      //         <div className="footer__right__icons">
      //         <NavLink to="https://www.facebook.com/" ><i className="fab fa-facebook-f fb"></i></NavLink>
      //         <NavLink to="https://twitter.com/"><i className="fab fa-twitter twt"></i></NavLink>
      //         <NavLink to="https://www.google.com/"><i className="fab fa-google-plus-g google"></i></NavLink> 
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <footer className="footer-section">
  <div className="newslater-section padding-bottom">
    <div className="container">
      <div className="newslater-container bg_img">
        <div className="newslater-wrapper">
          <h5 className="cate">Thành Viên MOTI</h5>
          <h3 className="title">đăng kí nhận ưu đãi</h3>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="footer-top">
      <div className="logo">
        <a href="index-1.html">
        <img src={MotiLogo} />
        <div className="heading-md">MOTI</div>
        </a>
      </div>
      <ul className="social-icons">
              <li><NavLink to="https://www.facebook.com/" ><i className="fab fa-facebook-f fb"></i></NavLink></li>
              <li><NavLink to="https://twitter.com/"><i className="fab fa-twitter twt"></i></NavLink></li>
              <li><NavLink to="https://www.google.com/"><i className="fab fa-google-plus-g google"></i></NavLink></li>
      </ul>
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-area">
        <div className="left">
          <p>Copyright © 2020.All Rights Reserved By <a href="#0">MOTI </a></p>
        </div>
        <ul className="links">
          <li>
            <a href="#0">About</a>
          </li>
          <li>
            <a href="#0">Terms Of Use</a>
          </li>
          <li>
            <a href="#0">Privacy Policy</a>
          </li>
          <li>
            <a href="#0">FAQ</a>
          </li>
          <li>
            <a href="#0">Feedback</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    )
  }
}
