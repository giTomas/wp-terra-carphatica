import { map } from 'ramda';
import {
  POSTS
 } from '../actions/';
import loaderReducer from './loaderReducer';

const preparePosts= ({author, id, slug, date, title, excerpt, acf}) => ({
  author, id, slug,
  date: (new Date(date)).toLocaleDateString('sk'),
  title: title.rendered,
  excerpt: excerpt.rendered,
  thumb: acf.thumb
});

const mapPosts = map(preparePosts);

const posts  = loaderReducer(POSTS, mapPosts);

export default posts;
