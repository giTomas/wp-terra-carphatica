import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import members from '../reducers/membersReducer';
import categories from '../reducers/categoriesReducer';
import category, {nature, culture, history, natureProtection } from '../reducers/categoryReducer';
import article from '../reducers/articleReducer';

const rootReducer = combineReducers({
  category,
  members,
  categories,
  article,
  nature,
  culture,
  history,
  natureProtection,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
