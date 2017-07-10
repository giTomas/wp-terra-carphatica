import R from 'ramda';

const URL = 'http://localhost/wp-json/wp/v2'
const SECTIONS_URL = `${URL}`;
const MEMBERS_URL = `${URL}/users?fields=id,slug,acf,description,name,display`;
const MEMBER_URL = `${URL}/members/`
// const MEMBERS_URL = `${URL}users/`
const PRIRODA_ALL = `${URL}/posts?category=`;
const MEMBERS_PER_PAGE = `${URL}/members?_embed&per_page=2&page=`
const URL_CATEGORIES = `${URL}/categories?fields=id,slug,name`;
const URL_CATEGORY = `${URL}/posts?fields=id,slug,author,date,title&categories=`;
const URL_POST = `${URL}/`;

async function fetchJson(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return data;
}

export async function fetchMember(id) {
  const url = `${MEMBER_URL}${id}`;
  return fetchJson(url);
}

// async function fetchPost(url, id='') {
//   const response = await fetch(url+id);
//   const data = await response.json();
//   const headers = await response.headers;
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return {
//     data,
//     total: headers.get('X-WP-Total'),
//     pages: headers.get('X-WP-TotalPages'),
//   }
// }

async function fetchPost(url, id='') {
  const response = await fetch(url+id);
  const data = await response.json();
  const headers = await response.headers;
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return data;
}

export const fetchMembers     = R.partial(fetchJson, [MEMBERS_URL]);
export const fetchSections    = R.partial(fetchJson, [SECTIONS_URL]);
export const fetchCategories  = R.partial(fetchJson, [URL_CATEGORIES]);
export const fetchWithHeaders = R.partial(fetchPost, [MEMBERS_PER_PAGE]);
export const fetchCategory    = R.partial(fetchPost, [URL_CATEGORY])
