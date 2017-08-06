import { partial } from 'ramda';
import { fetchJson } from './fetch';
import {
	URL_MEMBERS,
	URL_MEMBER,
	URL_SECTIONS,
	URL_CATEGORIES,
	URL_CATEGORY,
	URL_ARTICLE,
	url,
} from './urls';

export const fetchMembers     = partial(fetchJson, [URL_MEMBERS]);
export const fetchSections    = partial(fetchJson, [URL_SECTIONS]);
export const fetchCategories  = partial(fetchJson, [URL_CATEGORIES]);
export const fetchCategory    = partial(fetchJson, [URL_CATEGORY]);
export const fetchArticle     = partial(fetchJson, [URL_ARTICLE]);
export const fetchMember      = partial(fetchJson, [URL_MEMBER]);
export const fetchBlogPosts   = partial(fetchJson, [url.posts])
