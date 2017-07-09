import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
} from '../actions/actions';
import R from 'ramda';

const flattenMembers = R.map((member) => ({
  id: member.id,
  slug: member.slug,
  thumb: member.acf.user_iamge_thumb,
  content: member.content.rendered,
  name: member.title.rendered,
}));

const checkDisplay = user => user.acf.display;

// const flattenUsers = R.map((user) => ({
//   id: user.id,
//   slug: user.slug,
//   image: user.acf.user_image,
//   thumb: user.acf.user_image_thumbmail,
//   content: user.description,
//   name: user.name,
// }));

const flattenUsers = user => ({
  id: user.id,
  slug: user.slug,
  image: user.acf.user_image,
  thumb: user.acf.user_image_thumbmail,
  content: user.description,
  name: user.name,
});

const addMembers = R.compose(
  R.map(flattenUsers),
  R.filter(checkDisplay)
)

export function membersLoaded(users) {
  return {
    type: MEMBERS_LOADED,
    members:  addMembers(users),
  }
};

export function membersError(errorMsg) {
  return {
    type: MEMBERS_ERROR,
    error: errorMsg,
  }
};
