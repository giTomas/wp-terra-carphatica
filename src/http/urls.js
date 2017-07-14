
const URL = 'http://localhost/wp-json/wp/v2'
export const URL_SECTIONS = `${URL}`;
export const URL_MEMBERS = `${URL}/users?fields=id,slug,acf,description,name,display`;
// const MEMBER_URL = `${URL}/members/`
// const MEMBERS_URL = `${URL}users/`
// const PRIRODA_ALL = `${URL}/posts?category=`;
export const URL_MEMBERS_PER_PAGE = `${URL}/members?_embed&per_page=2&page=`
export const URL_CATEGORIES = `${URL}/categories?fields=id,slug,name`;
export const URL_CATEGORY = `${URL}/posts?fields=id,slug,author,date,title&categories=`;
// const URL_POST = `${URL}/`;
