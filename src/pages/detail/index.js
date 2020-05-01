import React, { Component} from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Detail extends Component {
  render(){
    const { title, content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
				<Content
        dangerouslySetInnerHTML={{__html: content}}
				/>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    const action = actionCreators.getDetail(id)
    console.log("action", action)
    dispatch(action)
  }
})
export default connect(mapState, mapDispatch)(Detail)