import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'
import { actionCreators } from '../store'

class Topic extends Component {
  render(){ 
    const  { list, getMoreTopic }  = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item, index) => (
            <TopicItem key={index}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt={'wert'}
              />
                <span className='title'>{item.get('title')}</span>
            </TopicItem>
          ))
        }
        <span className='more-topic' onClick={() => getMoreTopic()}>更多热门专题 >>></span>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});
const mapDispatch = (dispatch) => ({
  getMoreTopic(){
    const action = actionCreators.getMoreTopic()
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Topic);