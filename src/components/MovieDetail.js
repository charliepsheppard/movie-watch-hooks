import React from 'react';

const MovieDetail = ({movie}) => {
    // console.log(movie.poster_path);
    // const imgSrc = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

    if (!movie) {
        return <div>...Loading</div>
    }

    return (
      <div>
        <div>
          <img
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.overview}
          />
        </div>
        <div>
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
    
}

export default MovieDetail;