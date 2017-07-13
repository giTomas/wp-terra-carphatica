import { createSelector } from 'reselect';
import { reduce } from 'ramda';

const addSlugId = (acc, obj) => ({
  ...acc,
  [obj.slug]: { id: obj.id, name: obj.name }
})

const addIdName = (acc, obj) => ({
  ...acc,
  [obj.id]: obj.name,
})
// state
// const reduceCategories = state => reduce(addKeyProp, {}, state)
const reduceList = reduce(addSlugId, {});
const reduceMembers = reduce(addIdName, {});

export const getSlugId = createSelector(
  [reduceList],
  (id) => id
);

export const getIdAuthor = createSelector(
  [reduceMembers],
  (author) => author
);
