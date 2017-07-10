import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
  CATEGORY_ID,
} from '../actions/actions';
import { find, propEq } from 'ramda';

const initialCategories = {
  categories: [],
  loaded: false,
  error: false,
  categoryToLoad: null,
}

function categoriesReducer(state=initialCategories, action) {
  switch (action.type) {
    case CATEGORIES_LOADED:
      return {
        ...state,
        categories: action.categories,
        loaded: true,
        error: false,
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.error
      };
    case CATEGORY_ID:
    console.log('reducer: ' + action.slug);
    console.log(find(propEq('slug', action.slug))(state.categories));
      return {
        ...state,
        categoryToLoad: find(propEq('slug', action.slug))(state.categories),
      }
    default:
      return state;
  }
}

export default categoriesReducer;
