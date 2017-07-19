import { createSelector } from 'reselect';
import { reduce, find } from 'ramda';

const addIdName = (acc, obj) => ({
  ...acc,
  [obj.id]: obj.name,
})
// state
// const reduceCategories = state => reduce(addKeyProp, {}, state)
const reduceMembers = reduce(addIdName, {});

export const getIdAuthor = createSelector(
  [reduceMembers],
  (author) => author
);

const getCategories   = state => state.categories.data;
const getSlugCategory = (state, props) => props.match.params.sekcia;

export const addData = createSelector(
  [getCategories, getSlugCategory],
  (categories, slug) => {
     const category = find(category => category.slug === slug, categories)
     return {
       id: category.id,
       name: category.name,
     };
  }
);

const getCategory    = state => state.category.data;
const getSlugArticle = (state, props) => props.match.params.clanok;

export const addArticle = createSelector(
  [getCategory, getSlugArticle],
  (category, slug) => {
    const article = find(article => article.slug === slug, category);
    return {
      id: article.id,
      name: article.name,
    }
  }
);

const getMembersSuccess   = state => state.members.success;
const getCategoriesSucces = state => state.categories.success

export const checkSuccess = createSelector(
  [getCategoriesSucces, getMembersSuccess],
  (categories, members) => categories && members
)

export const createAction = createSelector(
  [getSlugCategory],
  (slug) => slug.toUpperCase()
);
