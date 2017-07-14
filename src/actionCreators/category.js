import {
  // CATEGORY_ERROR,
  // CATEGORY_RESET,
  // CATEGORY_SUCCESS,
  // CATEGORY_LOADING,
  CATEGORY,
} from '../actions/';
import {
  createActionError,
  createActionSuccess,
  createActionLoading,
  createActionReset,
  createAsyncAction
} from '../genericActions';
import { fetchCategory } from '../http/';

export const categoryLoading  = createActionLoadingloading(CATEGORY);
export const categorySucces   = createActionSuccess(CATEGORY);
export const categoryErrror   = createActionError(CATEGORY);
export const categoryReset    = createActionReset(CATEGORY);
export const categoryLoader   = createAsyncAction(CATEGORY, fetchCategory)

// export const categoryLoading = bool => ({
//   type: CATGEORY_LOADING,
//   payload: bool,
// })
//
// export const categoryErrror = errMsg => ({
//   type: CATEGORY_ERROR,
//   payload: errMsg,
// });
//
// export const categorySuccess = data => ({
//   type: CATEGORY_SUCCESS,
//   payload: data,
// })
//
// export const categoryReset = () => ({
//   type: CATEGORY_RESET
// });
