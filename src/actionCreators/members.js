import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
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
