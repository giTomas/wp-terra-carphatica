import { map } from 'ramda';
import { ARTICLE} from '../actions/';
import loaderReducer from './loaderReducer';

const prepareArticle = ({author, id, slug, date, title, content}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
  content: content.rendered,
});

// const mapCategories = map(prepareArticle);

const article = loaderReducer(ARTICLE, prepareArticle);

export default article;
