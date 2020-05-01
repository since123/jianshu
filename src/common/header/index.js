import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
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
    const {focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseEnter, handleChangePage} = this.props;
    let newList = list.toJS();
    let pageList = []
    if(newList.length){
      for(let i = (page - 1) * 10; i < page * 10 ; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseEnter){
      return (
        <SearchInfo onMouseEnter= {handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(spin) => {this.spinIcon = spin}} className="iconfont">&#xe65f;</i>换一批</SearchInfoSwitch>
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
    const {focused, handleBlured, handleFocused, login, logout} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
					<Logo/>
				</Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {
            login ? 
              <NavItem onClick={logout} className="right">退出</NavItem> :
              <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
          }
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
          <Link to='/write'>
            <Button className="writting">
            <i className="iconfont">&#xe6e5;</i>
            写文章
            </Button>
          </Link>
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
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    login: state.getIn(['login', 'login'])
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
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin){
      console.log('spin.style.transform', spin.style.transform)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 90) + 'deg';
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);