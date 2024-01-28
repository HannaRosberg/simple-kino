import fetch from "node-fetch";

const apiUrl = 'https://plankton-app-xhkom.ondigitalocean.app/api';

async function makeApiRequest(endpoint) {
  try {
    const res = await fetch(apiUrl + endpoint);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export async function loadMovies() {
  const { data } = await makeApiRequest('/movies');
  return data.map(({ id, attributes }) => ({ id, ...attributes }));
}

export async function loadMovie(id) {
  const { data } = await makeApiRequest(`/movies/${id}`);
  const { id: movieId, attributes } = data;
  return { id: movieId, ...attributes };
}