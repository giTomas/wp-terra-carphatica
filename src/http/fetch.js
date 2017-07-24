

export async function fetchJson(url, id='') {
  const response = await fetch(url+id);
  const data     = await response.json();

  if (!response.ok) {
    throw Error(response.statusText);
  }
  return data;
}
