import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/550?api_key=d365291e67ea42f41020bc3060bd087b";

const ACCESS_TOKEN = "d365291e67ea42f41020bc3060bd087b";

const options = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("trending/movie/day", options);
  return data.results;
};

export const fetchMovie = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}`, options);
  return data;
};

export const fetchCast = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, options);
  return data.cast;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, options);
  return data.results;
};

export const fetchMovieByQuery = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}`, options);
  return data.results;
};