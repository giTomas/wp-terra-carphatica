
const URL = 'http://localhost/wp-json/wp/v2'
export const URL_SECTIONS = `${URL}`;
export const URL_MEMBERS = `${URL}/users?fields=id,slug,acf,description,name,display`;
export const URL_MEMBERS_PER_PAGE = `${URL}/members?_embed&per_page=2&page=`
export const URL_CATEGORIES = `${URL}/categories?fields=id,slug,name`;
// nacitat podla id
export const URL_CATEGORY = `${URL}/posts?fields=id,slug,author,date,title&categories=`;
// podla slugu? tot asi nepojde
// export const URL_CATEGORY = `${URL}/posts?fields=id,slug,author,date,title&categories?slug=`;


// need to test this
// export const URL_CATEGORY = `${URL}/posts?fields=id,slug,author,date,title&categories&slug=`;
// export const URL_ARTICLE = `${URL}/posts/`;

export const URL_ARTICLE = `${URL}/posts?slug=`;
