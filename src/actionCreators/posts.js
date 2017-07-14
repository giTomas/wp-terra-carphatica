import {
  POSTS_LIST_LOADED,
  POSTS_LIST_ERROR,
  // SET_POST_ID,
  POSTS_LIST_RESET,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_LOADING.
} from '../actions/';


export function postsListLoaded(posts) {
  return {
    type: POSTS_LIST_LOADED,
    payload:  posts,
  }
};

export function postsListError(errorMsg) {
  return {
    type: POSTS_LIST_ERROR,
    payload: errorMsg,
  }
};

export function postsListReset() {
  return {
    type: POSTS_LIST_RESET,
  }
}

export const postListSuccess = data => ({
  type: POSTS_LIST_SUCCESS,
  payload: data
});
