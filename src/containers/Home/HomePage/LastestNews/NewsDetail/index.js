import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as newsAction from 'redux/actions/QuanLyTinTucAction';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ScreenLoader from 'components/Loader';
class NewsDetail extends Component {
    constructor(props){
        super(props);
        const { id } = this.props.match.params;
        this.state = {
            movieID: id,
            isFirstLoading: true
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.setState({isFirstLoading: false});
        }, 2500);
        this.props.dispatch(newsAction.getNewsDetailAxios(this.state.movieID));
    }
    render() {
        let nesDetail = this.props.newsDetail;
        return (
            <div>
              {!this.state.isFirstLoading ? (
                <div className="newsdetail">
                <div className="container">
                    <h2>{nesDetail.tieuDe}</h2>
                    <div className="newsdetail__credit"><span>{nesDetail.nguoiDang}</span> | <span>{nesDetail.ngayDang}</span></div>
                    <div className="newsdetail__statistics"><span className="statistics_likes">{nesDetail.likes} <i className="fas fa-thumbs-up"></i> </span>  <span className="statistics_shares"> {nesDetail.shares} <i className="fas fa-share-alt"></i> </span></div>
                    <Zoom wrapElement="div">
                        <img src={nesDetail.hinhAnh2} className="img-fluid" />
                    </Zoom>
                    <div className="newsdetail__content">{nesDetail.noiDung}</div>
                    <Zoom>
                        <img src={nesDetail.hinhAnh3} className="img-fluid" />
                    </Zoom>
                </div>
            </div>
              ): <ScreenLoader/>}
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    newsDetail: state.QuanLyTinTucReducer.newsDetail
})
export default connect(mapStateToProps)(NewsDetail)
