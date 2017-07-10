import {  createStore, combineReducers } from 'redux';
import membersReducer from '../reducers/membersReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import postsList from '../reducers/postsListReducer';

const reducers = combineReducers({
  membersState: membersReducer,
  categoriesState: categoriesReducer,
  postsList,
});

const store = createStore(reducers);

export default store;
