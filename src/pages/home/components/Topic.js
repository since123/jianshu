import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'


class Topic extends Component {
  render(){ 
    const  { list }  = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt={'wert'}
              />
                <span className='title'>{item.get('title')}</span>
            </TopicItem>
          ))
        }
        <span className='more-topic'>更多热门专题 >>></span>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});

export default connect(mapState, null)(Topic);