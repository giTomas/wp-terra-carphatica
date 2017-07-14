import { partial } from 'ramda';
import { fetchJson } from './fetch';
import {
	URL_MEMBERS,
	URL_SECTIONS,
	URL_CATEGORIES,
	URL_MEMBERS_PER_PAGE,
	URL_CATEGORY,
} from './urls';


export const fetchMembers     = partial(fetchJson, [URL_MEMBERS]);
export const fetchSections    = partial(fetchJson, [URL_SECTIONS]);
export const fetchCategories  = partial(fetchJson, [URL_CATEGORIES]);
export const fetchWithHeaders = partial(fetchJson, [URL_MEMBERS_PER_PAGE]);
export const fetchCategory    = partial(fetchJson, [URL_CATEGORY]);
