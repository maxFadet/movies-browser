import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export const fetchPeople = async (query) => {
  const options = {
    method: 'GET',
    url: `${API_URL}/search/person`,
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
