import {  createStore, combineReducers } from 'redux';
import membersReducer from '../reducers/membersReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const reducers = combineReducers({
  membersState: membersReducer,
  categoriesState: categoriesReducer,
});

const store = createStore(reducers);

export default store;
