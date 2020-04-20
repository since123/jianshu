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
    if(this.props.focused){
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  render (){
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
              in={this.props.focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                onBlur={this.props.handleBlured}
                onFocus={this.props.handleFocused}
                className={this.props.focused ? "focused" : ""}/>
            </CSSTransition>
            <i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe61c;</i>
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
    list: state.getIn(['header', 'list'])
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