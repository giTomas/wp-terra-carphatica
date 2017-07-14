import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import membersReducer from '../reducers/membersReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import postsList from '../reducers/postsListReducer';

const rootReducer = combineReducers({
  membersState: membersReducer,
  categoriesState: categoriesReducer,
  postsList,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
