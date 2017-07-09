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
  idToLoad: null,
}

function CategoriesReducer(state=initialCategories, action) {
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
      return {
        ...state,
        categoryToLoad: find(propEq('slug', action.slug))(state.categories),
      }
    default:
      return state;
  }
}

export default CategoriesReducer;
