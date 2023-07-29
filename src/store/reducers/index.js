import {combineReducers} from "redux";
import user_token from './user_token'
import user_data from './user_data'
export default combineReducers({
  user_token,
  user_data
});
