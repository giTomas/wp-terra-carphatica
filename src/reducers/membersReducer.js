import { map, filter, compose } from 'ramda';
import { MEMBERS }              from '../actions/';
import loaderReducer            from './loaderReducer';

const checkDisplay = user => user.acf.display;

const flattenUsers = user => ({
  id: user.id,
  slug: user.slug,
  image: user.acf.user_image,
  thumb: user.acf.user_image_thumbmail,
  content: user.description,
  name: user.name,
});

const addMembers = compose(
  map(flattenUsers),
  filter(checkDisplay)
);

const members = loaderReducer(MEMBERS, addMembers);

export default members;
