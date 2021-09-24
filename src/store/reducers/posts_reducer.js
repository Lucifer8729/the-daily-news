import types from "../types";

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        ...action.payload,
      };

    case types.GET_POSTS_BY_ID:
      return {
        ...state,
        postById: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
