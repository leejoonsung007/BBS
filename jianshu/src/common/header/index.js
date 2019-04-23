import React from 'react';
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
       } from './style';

const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames="slide"
            >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}>
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToPros = (dispatch) => {
  return {
      handleInputBlur() {
        dispatch(actionCreators.searchBlur());
      },

      handleInputFocus(){
        dispatch(actionCreators.searchFocus());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToPros)(Header);
