import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
} from '../actions/';

export function categoriesLoaded(categories) {
  return {
    type: CATEGORIES_LOADED,
    categories:  flattenCategories(categories),
  }
};

export function categoriesError(errorMsg) {
  return {
    type: CATEGORIES_ERROR,
    error: errorMsg,
  }
};

export const categoriesLoading = bool => ({
  type: CATEGORIES_LOADING,
  payload: bool,
});

export const categoriesSuccess = data => ({
  type: CATEGORIES_SUCCESS,
  payload: data,
});
