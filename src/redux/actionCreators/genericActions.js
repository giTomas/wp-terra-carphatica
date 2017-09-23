import {
	_ERROR,
  _RESET,
  _SUCCESS,
  _LOADING,
} from '../actions/';
import { fetchCategory } from '../../http/'

const createAction = genericAction => type => payload => ({
	type: `${type}${genericAction}`,
	payload: payload,
});

const createActionWithouPayload = genericAction => type => () => ({
	type: `${type}${genericAction}`,
});

export const createActionLoading 	= createAction(_LOADING);
export const createActionError   	= createAction(_ERROR);
export const createActionSuccess  = createAction(_SUCCESS);
export const createActionReset    = createActionWithouPayload(_RESET);

// https://medium.com/@machadogj/async-action-creators-with-redux-thunk-83af81994250

export function createAsyncAction (type, fn) {
	return (...args) => async (dispatch) => {
		dispatch(createActionError(type)(false));
		dispatch(createActionLoading(type)(true));
		try {
			const data = await fn(...args);
			dispatch(createActionSuccess(type)(data));
		}
		catch (error) {
			dispatch(createActionLoading(type)(false));
			dispatch(createActionError(type)(error.message))
		}
	}
}

// export function createCategoryAsyncAction (type, id) {
//
// 	return async (dispatch) => {
//
// 		dispatch(createActionError(type)(false));
// 		dispatch(createActionLoading(type)(true));
// 		try {
// 			const data = await fetchCategory(id);
// 			dispatch(createActionSuccess(type)(data));
// 		}
// 		catch (error) {
// 			dispatch(createActionLoading(type)(false));
// 			dispatch(createActionError(type)(error.message))
// 		}
// 	}
// }
//
// export function createAsyncActionAll (type1, type2, fn1, fn2) {
// 	return () => async (dispatch) => {
// 		dispatch(createActionError(type1)(false));
// 		dispatch(createActionLoading(type1)(true));
// 		dispatch(createActionError(type2)(false));
// 		dispatch(createActionLoading(type2)(true));
// 		try {
// 			const [data1, data2] = await Promise.all([fn1(), fn2()]);
// 			dispatch(createActionSuccess(type1)(data1));
// 			dispatch(createActionSuccess(type2)(data2));
// 		}
// 		catch (error) {
// 			dispatch(createActionLoading(type1)(false));
// 			dispatch(createActionError(type1)(error.message))
// 			dispatch(createActionLoading(type2)(false));
// 			dispatch(createActionError(type2)(error.message))
// 		}
// 	}
// }
