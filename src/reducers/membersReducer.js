import {
  MEMBERS_LOADED,
  MEMBERS_ERROR,
} from '../actions/actions';
import { map, filter, compose } from 'ramda';


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
)

const initialMembers = {
  members: [],
  loaded: false,
  error: false,
};

function membersReducer(state=initialMembers, action) {
  switch (action.type) {
    case MEMBERS_LOADED:
      return {
        ...state,
        members: addMembers(action.members),
        loaded: true,
        error: false,
      };
    case MEMBERS_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default membersReducer;
