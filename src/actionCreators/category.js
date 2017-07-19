import { CATEGORY } from '../actions/';
import {
  createActionReset,
  createAsyncAction,
  createCategoryAsyncAction,
} from './genericActions';
import { fetchCategory } from '../http/';

export const categoryReset    = createActionReset(CATEGORY);
export const categoryLoader   = createAsyncAction(CATEGORY, fetchCategory)
export const catLoader        = createCategoryAsyncAction
