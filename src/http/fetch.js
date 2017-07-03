import R from 'ramda';

const URL = 'http://localhost//wp-json/wp/v2/'
const SECTIONS_URL = `${URL}`;
const MEMBERS_URL = `${URL}members?fields=id,slug,title,acf,content`;
const MEMBER_URL = `${URL}members/`

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

export const fetchMembers = R.partial(fetchJson, [MEMBERS_URL])
export const fetchSections = R.partial(fetchJson, [SECTIONS_URL])
