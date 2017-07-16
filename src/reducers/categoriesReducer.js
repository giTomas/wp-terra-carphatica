import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
  CATEGORIES,
} from '../actions/';
import loaderReducer from './loaderReducer';

const initialCategories = {
  categories: [],
  loaded: false,
  error: false,
}

export const categories = loaderReducer(CATEGORIES)

// function categoriesReducer(state=initialCategories, action) {
//   switch (action.type) {
//     case CATEGORIES_LOADED:
//       return {
//         ...state,
//         categories: action.categories,
//         loaded: true,
//         error: false,
//       };
//     case CATEGORIES_ERROR:
//       return {
//         ...state,
//         error: action.error
//       };
//     default:
//       return state;
//   }
// }

// export default categoriesReducer;
