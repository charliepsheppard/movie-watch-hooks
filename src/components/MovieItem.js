import './MovieItem.css';
import React from 'react';

const MovieItem = ({movie, onMovieSelect, imgSrc}) => {
    console.log('movie item is here')

    if (movie.media_type === 'person') {
            console.log('this is a person')
            const personArray = movie.known_for.map(personData => {
                const personImagePath = `http://image.tmdb.org/t/p/w92/${personData.poster_path}`;
                return (
                    <div onClick={() => onMovieSelect(personData)} key={personData.id} className="movie-item">
                        <img src={personImagePath} alt={personData.overview} />
                        {personData.title}
                        {personData.vote_average}
                    </div>
                )
            });

            return personArray;
        }

    if (movie.poster_path === null) {
        return <div key={movie.id}>{movie.title}</div>;
    } else {
        return (
          <div onClick={() => onMovieSelect(movie)} className="movie-item">
            <img src={imgSrc} alt={movie.overview} />
            <div>
                <div className="movie-item-details">{movie.title}</div>
                <div className="movie-item-details">Rating: {movie.vote_average}</div>
            </div>
          </div>
        );
    };
}

export default MovieItem;