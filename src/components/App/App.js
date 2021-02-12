import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';
import MovieDetail from '../MovieDetail/MovieDetail';
import Footer from '../Footer/Footer';
import useMovies from '../../hooks/useMovies';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movies, search] = useMovies('Star Wars')

  useEffect(() => {
    setSelectedMovie(movies[0]);
  }, [movies]);

  return (
    <div className="component-container">
      <div className="search-bar">
        <SearchBar onSearchSubmit={search} />
      </div>
      <div className="movie-display-container">
        <div className="movie-detail">
          <MovieDetail movie={selectedMovie} />
        </div>
        <div className="movie-list">
          <MovieList
            movies={movies}
            onMovieSelect={selectedMovie}
          />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;