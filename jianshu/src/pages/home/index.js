import React, { Component } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommendation from "./components/Recommendation";
import Writer from "./components/Writer";
import { actionCreators } from "./store";

import { HomeWraper, HomeLeft, HomeRight, BackToTop } from "./style";

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWraper>
        <HomeLeft>
          <img
            className="banner-img"
            alt=""
            src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommendation />
          <Writer />
        </HomeRight>
        {showScroll ? (
          <BackToTop onClick={this.handleScrollTop}>顶部</BackToTop>
        ) : null}
      </HomeWraper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
