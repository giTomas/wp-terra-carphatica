import {
  // MEMBERS_LOADED,
  MEMBERS,
  CATEGORIES,
} from '../actions/';
import {
  // createActionLoading,
  // createActionError,
  // createActionSuccess,
  // createAsyncAction,
  createAsyncActionAll,
} from './genericActions';
import {  fetchMembers, fetchCategories } from '../http/';

// export const memebersLoading  = createActionLoading(MEMBERS);
// export const membersError     = createActionError(MEMBERS);
// export const membersSuccess   = createActionSuccess(MEMBERS);

// export function membersLoaded(users) {
//   return {
//     type: MEMBERS_LOADED,
//     members: users,
//   }
// };

// export const membersLoader = createAsyncAction(MEMBERS, fetchMembers);

export const membersCategoriesLoader = createAsyncActionAll(MEMBERS, CATEGORIES, fetchMembers, fetchCategories);
