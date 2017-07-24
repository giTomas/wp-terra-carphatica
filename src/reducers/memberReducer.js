import { MEMBER } from '../actions/';
import loaderReducer from './loaderReducer';

const prepareMember = (data) => {
  const {slug, title, content} = data[0];
  return {
    slug,
    title: title.rendered,
    content: content.rendered,
  };
}
const article = loaderReducer(MEMBER, prepareMember);

export default article;
