

const url = 'http://localhost/wp-json/wp/v2'

const makeUrls = (url=url) => {

  return ({
    articles: `${url}/posts?fields=id,slug,author,date,title,excerpt,thumb,acf&per_page=15&page=`,
    post: `${url}/posts?slug=`,
    member: `${url}/members?fields=content,slug,title/`,
    members: `${url}/users?fields=id,slug,acf,description,name,display`,
    category: '',
    categories: '',
    posts: `${url}/posts?fields=id,slug,author,date,title,excerpt,thumb,acf`,
  });
};

const URLS = makeUrls();

export default URLS;
