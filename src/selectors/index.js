import { createSelector } from 'reselect';
import { reduce } from 'ramda';

const addKeyProp = (acc, obj) => ({
  ...acc,
  [obj.slug]: { id: obj.id, name: obj.name }
})
// state
// const reduceCategories = state => reduce(addKeyProp, {}, state)
const reduceList = reduce(addKeyProp, {})

export const getSlugId = createSelector(
  [reduceList],
  (id) => id
)
