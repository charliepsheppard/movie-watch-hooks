import './MovieDetail.css';
import React from 'react';

const MovieDetail = ({movie}) => {
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
            <h2>{movie.name}</h2>
          </div>
        </div>
      )
    } 

    if (movie.profile_path === 'null' || movie.poster_path === 'null') {
      return <div>No image available</div>
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
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
    
}

export default MovieDetail;