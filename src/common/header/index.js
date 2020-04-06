import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchRapper
 } from './style'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false
    }
    this.handleFocused = this.handleFocused.bind(this)
    this.handleBlured = this.handleBlured.bind(this)
  }
  
  render(){
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
              in={this.state.focused}
              timeout={200}
              classNames="slide">
              <NavSearch 
                onBlur={this.handleBlured}
                onFocus={this.handleFocused}
                className={this.state.focused ? "focused" : ""}/>
            </CSSTransition>
            <i className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe61c;</i>
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
  handleFocused(){
    this.setState({
      focused: true
    })
  }
  handleBlured(){
    this.setState({
      focused: false
    })
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispathToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);