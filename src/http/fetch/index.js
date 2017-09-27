
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

const handleResponse = (response) => {

  if (!response.ok) {
    throw Error(response.statusText);
  }

  if (!response.headers.get('content-type').includes('application/json')) {
    throw Error('Content-type is not JSON.')
  }

  return response.json();
};

const fetchJson = async (url, endpoint='', init=GETJson) => {

  const response = await fetch(
    url+endpoint,
    init,
  );

  const data = handleResponse(response);

  return data;
}

export default fetchJson;
