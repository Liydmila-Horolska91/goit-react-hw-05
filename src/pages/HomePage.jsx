// src/pages/HomePage/HomePage.jsx
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../Api/Api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
