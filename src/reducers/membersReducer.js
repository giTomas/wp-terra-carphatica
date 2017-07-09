import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
} from '../actions/actions';

const initialMembers = {
  members: [],
  loaded: false,
  error: false,
};

function membersReducer(state=initialMembers, action) {
  switch (action.type) {
    case MEMBERS_LOADED:
      return {
        ...state,
        members: action.members,
        loaded: true,
        error: false,
      };
    case MEMBERS_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default membersReducer;
