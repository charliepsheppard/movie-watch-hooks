import './MovieList.css';
import React from 'react';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({movies, onMovieSelect}) => {
    const renderedMovies = movies.map(movie => {
        const imagePath = `http://image.tmdb.org/t/p/w92/${movie.poster_path}`;
        return <MovieItem key={movie.id} onMovieSelect={onMovieSelect} movie={movie} imgSrc={imagePath} />
    });
    
    return (
        <div className="movie-list-container">
            {renderedMovies}
        </div>
    )
}

export default MovieList;