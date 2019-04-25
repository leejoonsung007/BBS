import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         NavSearch,
         Addition,
         Button,
         SearchWrapper,
         SearchInfo,
         SearchInfoTitle,
         SearchInfoSwitch,
         SearchInfoItem,
         SearchInfoList,
       } from './style';

class Header extends Component {

  getListArea() {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage} = this.props;
    const newList = list.toJS();
    const pageList = [];

    if(newList.length > 0){
      for(let i = ((page - 1) * 10); i < page * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            Popular Search
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              Switch
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
      </SearchInfo>);
    } else {
      return null;
    }
  }

  render(){
    const {focused, handleInputFocus, handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Index</NavItem>
          <NavItem className='left'>Doenload App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
              >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='write'>
            <i className='iconfont'>&#xe608;</i>
            &nbsp; Post
          </Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage(page, totalPage){
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Header);
