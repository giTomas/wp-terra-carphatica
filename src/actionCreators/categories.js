import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES,
} from '../actions/';
import {
  createActionLoading,
  createActionError,
  createActionSuccess,
} from './genericActions';

export const categoriesLoading = createActionLoading(CATEGORIES);
export const categoriesError   = createActionError(CATEGORIES);
export const categoriesSucces  = createActionSuccess(CATEGORIES);

export function categoriesLoaded(categories) {
  return {
    type: CATEGORIES_LOADED,
    categories:  categories,
  }
};
//
// export function categoriesError(errorMsg) {
//   return {
//     type: CATEGORIES_ERROR,
//     error: errorMsg,
//   }
// };
//
// export const categoriesLoading = bool => ({
//   type: CATEGORIES_LOADING,
//   payload: bool,
// });
//
// export const categoriesSuccess = data => ({
//   type: CATEGORIES_SUCCESS,
//   payload: data,
// });
