import { partial } from 'ramda';
import { fetchJson } from './fetch';
import {
	URL_MEMBERS,
	URL_SECTIONS,
	URL_CATEGORIES,
	URL_MEMBERS_PER_PAGE,
	URL_CATEGORY,
} from './urls';


export const fetchMembers     = R.partial(fetchJson, [MEMBERS_URL]);
export const fetchSections    = R.partial(fetchJson, [SECTIONS_URL]);
export const fetchCategories  = R.partial(fetchJson, [URL_CATEGORIES]);
export const fetchWithHeaders = R.partial(fetchJson, [MEMBERS_PER_PAGE]);
export const fetchCategory    = R.partial(fetchJson, [URL_CATEGORY])
