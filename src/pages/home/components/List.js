import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <ListInfo>
                  <h3 className='title'>{item.get('title')} </h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
                <img alt='' className='pic' src={item.get('imgUrl')}></img>
              </ListItem>
            )
          })
        }
        {/* <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore> */}
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList'])
})
export default connect(mapState)(List);