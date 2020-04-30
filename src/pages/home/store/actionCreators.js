import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
const addHomeList = (list) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list)
})
const addTopList = (toplist) => ({
  type: constants.ADD_TOP_LIST,
  toplist: fromJS(toplist)
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changHomeData(result))
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('./api/homeList.json').then((res) => {
      const list = res.data.data
      dispatch(addHomeList(list))
    })
  }
}
export const getMoreTopic = () => {
  return (dispatch) => {
    axios.get('./api/topicList.json').then((res) => {
      const list = res.data.data
      dispatch(addTopList(list))
    })
  }
}