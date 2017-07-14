import { map } from 'ramda';
import {
  CATEGORY
} from '../actions/';
import loaderReducer from './loaderReducer';

const prepareCategories = ({author, id, slug, date, title}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
});
const mapCategories = map(prepareCategories);


const categoryReducer = loaderReducer(CATEGORY, mapCategories);

export default categoryReducer;

// export default loaderReducer;
