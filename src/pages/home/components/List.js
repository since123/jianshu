import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import {actionCreators} from '../store'
import { Link } from 'react-router-dom'
class List extends Component {
  render() {
    const { list, getMoreList } = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link style={{ textDecoration:'none'}} key={index} to={'/detail/' + item.get('id')}>
                <ListItem >
                  <ListInfo>
                    <h3 className='title'>{item.get('title')} </h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                  <img alt='' className='pic' src={item.get('imgUrl')}></img>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList()}>更多文字</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
const mapDispatch = (dispatch) => ({
    getMoreList() {
      const action = actionCreators.getMoreList()
      dispatch(action)
    }
})
export default connect(mapState, mapDispatch)(List);