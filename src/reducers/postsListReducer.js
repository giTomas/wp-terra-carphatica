import {
  POSTS_LIST_LOADED,
  POSTS_LIST_ERROR,
  POSTS_LIST_RESET,
} from '../actions/';
import { map } from 'ramda';

const initialState = {
  posts: [],
  loaded: false,
  error: false,
  postId: null,
}

const preparePosts = ({author, id, slug, date, title}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
});

function postsList(state=initialState, action) {
  switch (action.type) {
    case POSTS_LIST_LOADED:
      return {
        ...state,
        posts: map(preparePosts, action.payload),
        loaded: true,
        error: false,
      };
    case POSTS_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case POSTS_LIST_RESET:
      return {
        ...state,
        posts: [],
        loaded: false,
        error: false,
      }
    default:
      return state;
  }
}

export default postsList;
