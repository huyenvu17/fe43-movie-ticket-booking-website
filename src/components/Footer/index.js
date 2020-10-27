import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import MotiLogo from "content/images/logo/moti-logo-white.svg";
export default class Footer extends Component {
  render() {
    return (
      // <footer className="footer-section">
      //   <div className="newslater-section padding-bottom">
      //     <div className="container">
      //       <div className="newslater-container bg_img">
      //         <div className="newslater-wrapper">
      //           <h5 className="cate">Nhận ưu đãi hội viên MOTI</h5>
      //           <NavLink class="btn btn-primary btn-solid-dark" to="/signin">ĐĂNG KÍ NGAY</NavLink>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="container">
      //     <div className="footer-top">
      //       <div className="logo">
      //         <a href="index-1.html">
      //           <img src={MotiLogo} />
      //           <div className="heading-md">MOTI</div>
      //         </a>
      //       </div>
      //       <ul className="social-icons">
      //         <li><NavLink to="https://www.facebook.com/" ><i className="fab fa-facebook-f fb"></i></NavLink></li>
      //         <li><NavLink to="https://twitter.com/"><i className="fab fa-twitter twt"></i></NavLink></li>
      //         <li><NavLink to="https://www.google.com/"><i className="fab fa-google-plus-g google"></i></NavLink></li>
      //       </ul>
      //     </div>
      //     <div className="footer-bottom">
      //       <div className="footer-bottom-area">
      //         <div className="left">
      //           <p>Copyright © 2020.All Rights Reserved By <a href="#0">MOTI </a></p>
      //         </div>
      //         <ul className="links">
      //           <li>
      //           <NavLink to="#0" >About</NavLink>
      //           </li>
      //           <li>
      //             <NavLink to="#0" >Terms Of Use</NavLink>
      //           </li>
      //           <li>
      //           <NavLink to="#0" >Privacy Policy</NavLink>
      //           </li>
      //           <li>
      //           <NavLink to="#0" >FAQs</NavLink>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
      <footer>
      <div className="footer__content">
        <div className="footer__above">
          <div className="above__row row">
            <div className="above__item col-2 tix-info">
              <p className="above__title">AP Movie</p>
              <ul className="above__list">
                <li className="list__item">
                  <a className="list__link" href="/#">
                    FAQ
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="/#">
                    Brand Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div className="above__item col-2 tix-security">
              <p className="above__title non--title" />
              <ul className="above__list">
                <li className="list__item">
                  <a className="list__link" href="/#">
                    Thoả thuận sử dụng
                  </a>
                </li>
                <li className="list__item">
                  <a className="list__link" href="/#">
                    Chính sách bảo mật
                  </a>
                </li>
              </ul>
            </div>
            <div className="above__item img__col col-4 tix-coop">
              <p className="above__title">ĐỐI TÁC</p>
              <ul className="img__list">
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/QPJb0sq/cgv.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/qy7Zxt6/bhd.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/nnYH6XW/galaxy.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/Y7spP5M/cinestar.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/vZ9myZy/lotte.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/r2g97r7/megags.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/7NDTSnJ/beta.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/Hq57mwP/dongdacinema.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/VQ0wbkj/TOUCH.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/bKGdjCY/cnx.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/nDZgccs/STARLIGHT.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/Yc2Jzzm/dcine.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/kMwVgNK/zalopay-icon.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/Jtqmn5J/payoo.jpg"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/kcKrb8N/VCB.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/2K08K6K/AGRIBANK.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/xq10kSK/viettin.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/j6xvWHm/IVB.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/yWmpqsj/123go.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="img__item">
                  <a className="img__link" href="/#">
                    <img
                      src="https://i.ibb.co/4VRdzs4/laban.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="above__item mobile__app col-2">
              <p className="above__title">MOBILE APP</p>
              <ul className="logo__list">
                <li className="logo__item">
                  <a className="logo__link" href="/#">
                    <img
                      src="https://i.ibb.co/Zm8vZgX/apple-logo.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="logo__item">
                  <a className="logo__link" href="/#">
                    <img
                      src="https://i.ibb.co/m6YfCrT/android-logo.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="above__item text-center col-2 tix-social">
              <p className="above__title">SOCIAL</p>
              <ul className="logo__list">
                <li className="logo__item">
                  <a className="logo__link" href="/#">
                    <img
                      className="img__social"
                      src="https://i.ibb.co/9H50pyY/facebook-logo.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
                <li className="logo__item">
                  <a className="logo__link" href="/#">
                    <img
                      className="img__social"
                      src="https://i.ibb.co/1MrJQT3/zalo-logo.png"
                      alt="hinhanh"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="gachchan" />
        <div className="footer__below">
          <div className="below__row row">
            <div className="below__left col-md-3 col-xs-12 col-sm-12">
              <img
                src={MotiLogo}
                alt="hello"
              />
              <span className="text-logo">Moti Movie</span>
            </div>
            <div className="below__middle col-md-7 col-sm-12 col-xs-12">
              <div className="middle__title">
                Moti Movie – DỰ ÁN ĐẶT VÉ XEM PHIM
              </div>
              <span>
                <span>Số Điện Thoại (Hotline): 1900 000 222</span>
                <br />
                <span>
                  Email:
                  <a className="middle__link" href="/#">
                    support@info.vn
                  </a>
                </span>
              </span>
            </div>
            <div className="below__right col-md-2 col-sm-12 col-xs-12">
              <div className="right__link">
                <img
                  className="img-fuild"
                  src="https://file.hstatic.net/1000012850/file/thong-bao-website-voi-bo-cong-thuong_grande.png"
                  alt="hello"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
 

    )
  }
}
