
const GETJson = {
    method: 'GET',
    // cors, no-cors(default), same-origin, navigate
    // mode: 'no-cors',
    cache: 'default',
    // cache: 'no-store',
    headers: new Headers({
    'Accept': 'application/json',
  })
};

const fetchJson = async (url, endpoint='', init=GETJson) => {

  const response = await fetch(
    url+endpoint,
    init,
  );

  if (!response.ok) {
    throw Error(response.statusText);
  }

  if (!response.headers.get('content-type').includes('application/json')) {
    throw Error('Content-type is not JSON.')
  }

  const data = await response.json();

  return data;
}

// const handleError = (res) => {
//   if (!res.ok) {
//     throw Error(response.statusText);
//   }
//   if (!response.headers.get('content-type').includes('application/json')) {
//     throw Error('Content-type is not JSON.')
//   }
//   return res;
// }

// const

export default fetchJson;
