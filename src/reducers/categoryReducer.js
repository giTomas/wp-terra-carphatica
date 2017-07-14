import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
} from '../actions/';

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
    default:
      return state;
  }
}

export default categoriesReducer;
