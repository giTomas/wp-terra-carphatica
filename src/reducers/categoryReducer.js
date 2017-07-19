import { map } from 'ramda';
import {
  CATEGORY,
  NATURE,
  NATURE_PROTECTION,
  CULTURE,
  HISTORY,
 } from '../actions/';
import loaderReducer from './loaderReducer';

const prepareCategories = ({author, id, slug, date, title}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
});

const mapCategories = map(prepareCategories);

export const nature           = loaderReducer(NATURE, mapCategories)
export const natureProtection = loaderReducer(NATURE_PROTECTION, mapCategories)
export const culture          = loaderReducer(CULTURE, mapCategories)
export const history          = loaderReducer(HISTORY, mapCategories)

const category                = loaderReducer(CATEGORY, mapCategories);

export default category;
