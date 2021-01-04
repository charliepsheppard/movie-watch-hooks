import React from 'react';

const MovieList = (props) => {
    const movies = props.movies.map(movie => {
        return <div>{movie.title}</div>
    })

    console.log(props);
    return <div>{movies}</div>
}

export default MovieList;