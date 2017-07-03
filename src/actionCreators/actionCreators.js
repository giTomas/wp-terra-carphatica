import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
} from '../actions/actions';
import R from 'ramda';

const flattenMembers = R.map((member) => ({
  id: member.id,
  slug: member.slug,
  thumb: member.acf.image_thumb,
  content: member.content.rendered,
  name: member.title.rendered,
}));

export function membersLoaded(members) {
  return {
    type: MEMBERS_LOADED,
    members:  flattenMembers(members),
  }
};

export function membersError(errorMsg) {
  return {
    type: MEMBERS_ERROR,
    error: errorMsg,
  }
};
