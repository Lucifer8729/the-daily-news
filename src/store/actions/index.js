import * as api from "../../api";
import types from "../types";

export const getPosts = (...args) => ({
  type: types.GET_POSTS,
  payload: api.getPosts(...args),
});

export const addNewsLetter = (data) => ({
  type: types.ADD_NEWSLETTER,
  payload: api.addNewsLetter(data),
});

export const clearNewsLetter = () => ({
  type: types.CLEAR_NEWSLETTER,
});
