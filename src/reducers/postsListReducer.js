import {
  POSTS_LIST_LOADED,
  POSTS_LIST_ERROR,
  POSTS_LIST_RESET,
  SET_POST_ID,
} from '../actions/actions';
import { map, find, propEq } from 'ramda';

const initialState = {
  posts: [],
  loaded: false,
  error: false,
  postId: null,
}

const flattenPosts = post => ({
  author: post.author,
  id: post.id,
  slug: post.slug,
  date: (new Date(post.date)).toLocaleDateString('sk'),
  title: post.title.rendered,
});

function postsList(state=initialState, action) {
  switch (action.type) {
    case POSTS_LIST_LOADED:
      return {
        ...state,
        posts: map(flattenPosts, action.payload),
        loaded: true,
        error: false,
      };
    case POSTS_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_POST_ID:
      return {
        ...state,
        postID: find(propEq('slug', action.payload))(state.posts),
      }
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
