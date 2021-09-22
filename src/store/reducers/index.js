import { combineReducers } from "redux";

import posts from "./user_reducer";
import user from "./posts_reducer";

const appReducers = combineReducers({
  user,
  posts,
});

export default appReducers;
