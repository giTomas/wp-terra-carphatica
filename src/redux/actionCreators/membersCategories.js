import { MEMBERS, CATEGORIES }            from '../actions/';
import { createAsyncAction }           from './genericActions';
import { fetchMembers } from '../../http/';

export const membersCategoriesLoader = createAsyncAction(MEMBERS, fetchMembers);
