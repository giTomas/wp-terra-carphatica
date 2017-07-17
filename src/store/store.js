import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import members from '../reducers/membersReducer';
import categories from '../reducers/categoriesReducer';
import category from '../reducers/categoryReducer';
import article from '../reducers/articleReducer';

const rootReducer = combineReducers({
  category,
  members,
  categories,
  article,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
