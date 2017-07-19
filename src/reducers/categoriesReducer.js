import { filter }     from 'ramda';
import { CATEGORIES } from '../actions/';
import loaderReducer  from './loaderReducer';

// remove category 'nezaradene'
const notId    = obj => obj.id !== 1;
const filterId = filter(notId)

const categories = loaderReducer(CATEGORIES, filterId);

export default  categories;
