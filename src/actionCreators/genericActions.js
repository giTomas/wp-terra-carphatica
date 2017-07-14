import {
	_ERROR,
  _RESET,
  _SUCCESS,
  _LOADING,
} from '../actions/';
// import { fetchJson } = '../http/';

const createGenericAction = genericAction => type => payload => ({
	type: `${type}${genericAction}`,
	payload: payload,
});

const createGenericActionWithouPayload = genericAction => type => () => ({
	type: `${type}${genericAction}`,
});

export const createActionLoading 	= createGenericAction(_LOADING);
export const createActionError   	= createGenericAction(_ERROR);
export const createActionSuccess  = createGenericAction(_SUCCESS);
export const createActionReset    = createGenericActionWithouPayload(_RESET);

// https://medium.com/@machadogj/async-action-creators-with-redux-thunk-83af81994250

export function createAsyncAction (type, fn) {
	return (...args) => async (dispatch) => {
		dispatch(createActionError(type)(null));
		dispatch(createActionLoading(type)(true));
		try {
			const data = await fn(...args);
			dispatch(createActionSuccess(type)(data));
			dispatch(createActionLoading(type)(false));
		}
		catch (error) {
			dispatch(createActionLoading(type)(false));
			dispatch(createActionError(type)(error.message))
		}
	}
}
