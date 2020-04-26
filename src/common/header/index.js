import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {actionCreators}  from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchRapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
 } from './style';


class Header extends Component {
  showListArea = () => {
    const {focused, list, page} = this.props;
    let newList = list.toJS();
    let pageList = []
    for(let i = (page - 1) * 10; i < page * 10 ; i++){
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    if(focused){
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  render (){
    const {focused, handleBlured, handleFocused} = this.props;
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登陆</NavItem>
          <SearchRapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                onBlur={handleBlured}
                onFocus={handleFocused}
                className={focused ? "focused" : ""}/>
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>&#xe61c;</i>
            {this.showListArea()}
          </SearchRapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6e5;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleFocused(){
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlured(){
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);