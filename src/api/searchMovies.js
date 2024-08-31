import axios from 'axios';
import { BASE_URL } from '../common/constants/config';

const API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2MTI2MDcwMmJkZGJiOTg4MmUyZTRhMDJlZDA0ZSIsIm5iZiI6MTcyMzY2MTY0My45NDk0MjksInN1YiI6IjY2YWI4MjEwNGZlNDIxMzEwY2QyY2FlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9nMPyeWUKdhaUTVPfltvi473upjSJlz1iKauLIeuXpQ`;


export const fetchMovies = async (query, page = 1) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}/search/movie`,
        params: { query, include_adult: 'false', language: 'en-US', page: page },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};