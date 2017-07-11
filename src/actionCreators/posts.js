import {
  POSTS_LIST_LOADED,
  POSTS_LIST_ERROR,
  // SET_POST_ID,
  POSTS_LIST_RESET,
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

// export function setPostId(slug) {
//   return {
//     type: SET_POST_ID,
//     payload: slug,
//   }
// }

export function postsListReset() {
  return {
    type: POSTS_LIST_RESET,
  }
}
