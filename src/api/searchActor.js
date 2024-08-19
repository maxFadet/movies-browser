import axios from "axios";
import { BASE_URL } from '../config/BASE_URL';
import { API_KEY } from '../config/API_KEY';

export const fetchPeople = async (query) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/search/person`,
    params: { query, include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching people:", error);
    throw error;
  }
};
