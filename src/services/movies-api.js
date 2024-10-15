import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzY1MjkxZTY3ZWE0MmY0MTAyMGJjMzA2MGJkMDg3YiIsIm5iZiI6MTcyOTAxNzY3MS40NjE4ODQsInN1YiI6IjY2ZmQ1ZmIwMjViNjFjMzNkYTU5NjBmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dbndDo3OZIjvIYAc-wUtZ3ikZzBWJueEVgDIpFptCx4";

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