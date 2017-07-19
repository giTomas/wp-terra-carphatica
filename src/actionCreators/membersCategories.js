import { MEMBERS, CATEGORIES }            from '../actions/';
import { createAsyncActionAll }           from './genericActions';
import { fetchMembers, fetchCategories } from '../http/';

export const membersCategoriesLoader = createAsyncActionAll(MEMBERS, CATEGORIES, fetchMembers, fetchCategories);
