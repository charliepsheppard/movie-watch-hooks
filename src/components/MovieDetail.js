import './MovieDetail.css';
import React from 'react';

const MovieDetail = ({movie}) => {
    // console.log(movie.poster_path);
    // const imgSrc = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

    if (!movie) {
        return <div>...Loading</div>
    }

    if (movie.media_type === 'person') {
      return (
        <div className="detail-container">
          <div className="detail-poster">
            <img
              src={`http://image.tmdb.org/t/p/h632${movie.profile_path}`}
              alt={movie.overview}
            />
          </div>
          <div className="detail-description">
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      )
    } 

    return (
      <div className="detail-container">
        <div className="detail-poster">
          <img
            src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.overview}
          />
        </div>
        <div className="detail-description">
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
    
}

export default MovieDetail;