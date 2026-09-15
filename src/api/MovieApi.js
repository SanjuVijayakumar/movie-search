import axios from "axios";

const API_KEY = import.meta.env.VITE_WATCHMODE_API_KEY;

const BASE_URL = "https://api.watchmode.com/v1/";

export const searchMovies = async (search) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        search_field: "name",
        search_value: search,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Movie API Error:", error);
    throw error;
  }
};

// Get movie details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}title/${movieId}/details/`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Movie Details API Error:", error);
    throw error;
  }
};

// Get latest movies
export const getLatestMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}list-titles/`, {
      params: {
        apiKey: API_KEY,
        types: "movie",
        sort_by: "release_date_desc",
        page: 1,
        limit: 8,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Latest Movies API Error:", error);
    throw error;
  }
};