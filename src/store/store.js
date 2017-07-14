import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import membersReducer from '../reducers/membersReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import postsList from '../reducers/postsListReducer';
import categoryReducer from '../reducers/categoryReducer';

const rootReducer = combineReducers({
  membersState: membersReducer,
  categoriesState: categoriesReducer,
  category: categoryReducer,
  postsList,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
