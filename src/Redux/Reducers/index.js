import { combineReducers } from "redux";
import authReducer from "./Auth.Reducer";
export default combineReducers({
  auth: authReducer
});
