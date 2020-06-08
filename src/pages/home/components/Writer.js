import React, { Component } from 'react'
import { WriterWapper, WrapperHeader, SearchInfoSwitch, SearchInfoItem } from '../style'
import { connect } from 'react-redux' 
import { actionCreators } from '../../../common/header/store'

class Writer extends Component {
  showArea = () => {
    const { page, list } = this.props
    let newList = list.toJS();
    let pageList = []
    if(newList.length){
      for(let i = (page - 1) * 10; i < page * 10; i++){
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
  }
  render(){
    const { page, totalPage, handleChangePage } = this.props
    return (
      <WriterWapper>
        <WrapperHeader>
          <span className="title">推荐作者</span>
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(spin) => {this.spinIcon = spin}} className="iconfont">&#xe65f;</i>换一批
          </SearchInfoSwitch>
        </WrapperHeader>
        {this.showArea()}
      }
    
      </WriterWapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage']),
    list: state.getIn(['home', 'list'])
  }
}
const  mapDispathToProps=(dispatch) => {
  return {
    handleChangePage(page, totalPage, spin){
      console.log('spin.style.transform', spin.style.transform)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 60) + 'deg';
      console.log('spin.style.transform', originAngle)
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
        }
    }
  }
}
export default connect(mapStateToProps , mapDispathToProps)(Writer)