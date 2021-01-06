import React from 'react';

const MovieList = (props) => {
    const movies = props.movies.map(movie => {
        const imagePath = `http://image.tmdb.org/t/p/w92/${movie.poster_path}`;

        if (movie.poster_path === null) {
            return <div key={movie.id}>{movie.title}</div>;
        } else {
            return (
              <div key={movie.id}>
                {movie.title}
                <img src={imagePath} alt={movie.overview} />
              </div>
            );
        }
    })

    return <div>{movies}</div>
}

export default MovieList;