// import { map } from 'ramda';
import { ARTICLE } from '../actions/';
import loaderReducer from './loaderReducer';

const prepareArticle = (data) => {
  const {author, id, slug, date, title, content} = data[0];
  return {
    author, id, slug,
    date: (new Date(date)).toLocaleDateString('sk'),
    title: title.rendered,
    content: content.rendered,
  };
}
const article = loaderReducer(ARTICLE, prepareArticle);

export default article;
