import {  createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import members from '../reducers/membersReducer';
import categories from '../reducers/categoriesReducer';
import category, {priroda, kultura, historia, ochrana } from '../reducers/categoryReducer';
import article from '../reducers/articleReducer';

const sekcie = combineReducers({
  priroda,
  kultura,
  historia,
  ochrana,
})

const rootReducer = combineReducers({
  members,
  categories,
  article,
  sekcie
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
