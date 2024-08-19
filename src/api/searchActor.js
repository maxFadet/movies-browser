import axios from "axios";
import { BASE_URL } from '../config/BASE_URL';
// import { API_KEY } from '../config/API_KEY';

const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2MTI2MDcwMmJkZGJiOTg4MmUyZTRhMDJlZDA0ZSIsIm5iZiI6MTcyMzY2MTY0My45NDk0MjksInN1YiI6IjY2YWI4MjEwNGZlNDIxMzEwY2QyY2FlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nMPyeWUKdhaUTVPfltvi473upjSJlz1iKauLIeuXpQ`;


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
