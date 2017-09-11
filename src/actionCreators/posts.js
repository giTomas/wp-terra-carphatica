import { POSTS} from '../actions/';
import {
  createAsyncAction
} from './genericActions';
import { fetchBlogPosts } from '../http/';

export const postsLoader   = createAsyncAction(POSTS, fetchBlogPosts)
