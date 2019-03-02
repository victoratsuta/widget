import axios from 'axios'

export async function getFeedback(page, limit) {

  const response = await axios(`http://localhost:3001/list?_page=${page}&_limit=${limit}`);

  return response;
}
