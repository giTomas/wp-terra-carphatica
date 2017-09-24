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
