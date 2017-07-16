import { CATEGORY } from '../actions/';
import {
  createActionReset,
  createAsyncAction
} from './genericActions';
import { fetchCategory } from '../http/';

export const categoryReset    = createActionReset(CATEGORY);
export const categoryLoader   = createAsyncAction(CATEGORY, fetchCategory)
