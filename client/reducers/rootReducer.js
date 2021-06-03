import { combineReducers } from "redux";
import postsReducer from "./posts";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
});
export default rootReducer;
