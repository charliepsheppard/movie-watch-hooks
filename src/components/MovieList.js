import React from 'react';
import DropdownMenu from './DropdownMenu';

const MovieList = (props) => {
    const movies = props.movies.map(movie => {
        const imagePath = `http://image.tmdb.org/t/p/w92/${movie.poster_path}`;

        if (movie.media_type === 'person') {
            console.log('this is a person')
            const personArray = movie.known_for.map(personData => {
                const personImagePath = `http://image.tmdb.org/t/p/w92/${personData.poster_path}`;
                return (
                    <div key={personData.id}>
                        {personData.title}
                        <img src={personImagePath} alt={personData.overview} />
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
              <div key={movie.id}>
                {movie.title}
                <img src={imagePath} alt={movie.overview} />
                {movie.vote_average}
              </div>
            );
        }
    });


    return (
        <div>
            <DropdownMenu movieResults={props.movies} />
            {movies}
        </div>
    )
}

export default MovieList;