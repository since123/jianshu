import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  QRcode: require("../../../static/image/QRcode.png"),
  totalPage: 5,
  page: 1,
  list: [],
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case constants.ADD_HOME_LIST:
        console.log('concat(articleList)', action)
      return state.merge({
        'articleList': state.get('articleList').concat(action.list)
      })
    case constants.ADD_TOP_LIST:
      console.log('concat(action.list)', action)
      return state.merge({
        'topicList': state.get('topicList').concat(action.toplist)
      })
    case constants.CHANGE_PAGE:
      return state.merge({
        page: fromJS(action.page)
      })
    default:
      return state;
  }
}