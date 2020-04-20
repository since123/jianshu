import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
});
export default reducer;


