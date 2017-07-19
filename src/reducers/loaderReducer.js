import { identity } from 'ramda';
import {
  _ERROR,
  _SUCCESS,
  _LOADING,
  _RESET,
} from '../actions/';

const initialState = {
  data: [],
  loading: false,
  error: false,
  success: false,
}

function loaderReducer(type, fn=identity) {
  return (state=initialState, action) => {
    switch (action.type) {
      case `${type}${_SUCCESS}`:
        console.log(`action: ${type}${_SUCCESS}`);
        return {
          data: fn(action.payload),
          loading: false,
          error: false,
          success: true
        };
      case `${type}${_LOADING}`:
        return {
          ...state,
          loading: action.payload
        };
      case `${type}${_ERROR}`:
        return {
          ...state,
          error: action.payload
        };
			case `${type}${_RESET}`:
				return initialState;
      default:
        return state;
    }
  }
}

export default loaderReducer;
