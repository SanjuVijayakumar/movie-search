import axios from "axios";

const API_KEY = import.meta.env.VITE_WATCHMODE_API_KEY;

const BASE_URL = "https://api.watchmode.com/v1/search/";

export const searchMovies = async (search) => {
  try {
    const response = await axios.get(BASE_URL, {
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
      `https://api.watchmode.com/v1/title/${movieId}/details/`,
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