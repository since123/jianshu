import styled from 'styled-components';
import logoPic from '../../static/image/nav-logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div.attrs({
  href: '/'
}) `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: cover;
`
export const Nav = styled.div `
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div `
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchRapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #777;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) 
`
  width: 160px;
  height: 38px;
  padding: 0 45px 0 20px;
  margin-top: 9px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-radius: 15px;
  background: #eee;
  font-size: 15px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 260px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 260px
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div `
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  width: 240px;
  top: 56px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0, .2);
`
export const SearchInfoTitle = styled.div`
  margin: 15px 0 10px 0 ;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  .iconfont {
    /* float: right; */
    position: absolute;
    right: 50px;
    top: 10px;
    transform: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.div`
  display: block;
  float: left;
  line-height: 20px;
  margin:  0 10px 15px 0;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878; 
  border-radius: 3px;

`
export const SearchInfoList = styled.div`
  
`

