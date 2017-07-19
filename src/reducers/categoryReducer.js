import { map } from 'ramda';
import {
  // CATEGORY,
  NATURE,
  NATURE_PROTECTION,
  CULTURE,
  HISTORY,
 } from '../actions/';
import loaderReducer from './loaderReducer';

const prepareCategory = ({author, id, slug, date, title}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
});

const mapCategory = map(prepareCategory);

export const priroda  = loaderReducer(NATURE, mapCategory)
export const ochrana  = loaderReducer(NATURE_PROTECTION, mapCategory)
export const kultura  = loaderReducer(CULTURE, mapCategory)
export const historia = loaderReducer(HISTORY, mapCategory)
