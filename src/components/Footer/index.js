import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import MotiLogo from "content/images/logo/moti-logo-white.svg";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <div className="newslater-section padding-bottom">
          <div className="container">
            <div className="newslater-container bg_img">
              <div className="newslater-wrapper">
                <h5 className="cate">Nhận ưu đãi hội viên MOTI</h5>
                <NavLink class="btn btn-primary btn-solid-dark" to="/signin">ĐĂNG KÍ NGAY</NavLink>
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
                <NavLink to="#0" >About</NavLink>
                </li>
                <li>
                  <NavLink to="#0" >Terms Of Use</NavLink>
                </li>
                <li>
                <NavLink to="#0" >Privacy Policy</NavLink>
                </li>
                <li>
                <NavLink to="#0" >FAQs</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}
