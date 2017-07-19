import { ARTICLE } from '../actions/';
import {
  createActionReset,
  createAsyncAction
} from './genericActions';
import { fetchArticle } from '../http/';

export const articleReset    = createActionReset(ARTICLE);
export const articleLoader   = createAsyncAction(ARTICLE, fetchArticle)
