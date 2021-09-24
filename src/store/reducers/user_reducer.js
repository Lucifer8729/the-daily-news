import types from "../types";

const INITIAL_STATE = {
  newsletter: false,
  email: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_NEWSLETTER:
      return {
        ...state,
        ...action.payload,
      };

    case types.CLEAR_NEWSLETTER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
