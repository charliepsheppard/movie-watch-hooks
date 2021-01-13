import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, onMovieSelect}) => {
    const renderedMovies = movies.map(movie => {
        const imagePath = `http://image.tmdb.org/t/p/w92/${movie.poster_path}`;
        return <MovieItem key={movie.id} onMovieSelect={onMovieSelect} movie={movie} imgSrc={imagePath} />
        console.log('the movie item should work')
    });

    console.log(movies);
    return (
        <div>
            {renderedMovies}
        </div>
    )
}

export default MovieList;