import { CATEGORIES, CATEGORIES_LOADED } from '../actions/';
import {
  createActionLoading,
  createActionError,
  createActionSuccess,
  createAsyncAction,
} from './genericActions';
import { fetchCategories } from '../http/';


export const categoriesLoading = createActionLoading(CATEGORIES);
export const categoriesError   = createActionError(CATEGORIES);
export const categoriesSucces  = createActionSuccess(CATEGORIES);
export const categoriesLoader  = createAsyncAction(CATEGORIES, fetchCategories);

export function categoriesLoaded(categories) {
  return {
    type: CATEGORIES_LOADED,
    categories:  categories,
  }
};
