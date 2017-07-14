import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
  MEMBERS_LOADING,
  MEMBERS_LOADING,
} from '../actions/';

export function membersLoaded(users) {
  return {
    type: MEMBERS_LOADED,
    members: users,
  }
};

export function membersError(errorMsg) {
  return {
    type: MEMBERS_ERROR,
    error: errorMsg,
  }
};

export const membersLoading = bool => ({
  type: MEMBERS_LOADING,
  payload: bool,
});

export const membersSuccess = data => ({
  type: MEMBERS_SUCCESS,
  payload: data,
});
