import {
  CATEGORIES_LOADED,
  CATEGORIES_ERROR,
} from '../actions/';
import { map } from 'ramda';

const flattenCategories = map(({id, slug, name}) => ({
  id,
  slug,
  name,
}));

export function categoriesLoaded(categories) {
  return {
    type: CATEGORIES_LOADED,
    categories:  flattenCategories(categories),
  }
};

export function categoriesError(errorMsg) {
  return {
    type: CATEGORIES_ERROR,
    error: errorMsg,
  }
};
