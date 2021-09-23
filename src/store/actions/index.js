import * as api from "../../api";
import types from "../types";

export const getPosts = () => ({
  type: types.GET_POSTS,
  payload: api.getPosts(),
});
