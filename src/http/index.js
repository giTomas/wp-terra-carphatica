import { partial } from 'ramda';
import fetchJson from './fetch/';
import URLS from './urls/';

export const fetchMembers     = partial(fetchJson, [URLS.members]);
export const fetchArticle     = partial(fetchJson, [URLS.post]);
export const fetchMember      = partial(fetchJson, [URLS.member]);
export const fetchBlogPosts   = partial(fetchJson, [URLS.posts])
