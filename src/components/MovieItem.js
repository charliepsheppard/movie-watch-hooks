import React from 'react';

const MovieItem = ({movie, onMovieSelect, imgSrc}) => {
    console.log('movie item is here')

    if (movie.media_type === 'person') {
            console.log('this is a person')
            const personArray = movie.known_for.map(personData => {
                const personImagePath = `http://image.tmdb.org/t/p/w92/${personData.poster_path}`;
                return (
                    <div onClick={() => onMovieSelect(movie)} key={personData.id}>
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
          <div onClick={() => onMovieSelect(movie)}>
            {movie.title}
            <img src={imgSrc} alt={movie.overview} />
            {movie.vote_average}
          </div>
        );
    };

    console.log(movie)

    // return (
    //       <div onClick={() => onMovieSelect(movie)}>
    //         {movie.title}
    //         <img src={imgSrc} alt={movie.overview} />
    //         {movie.vote_average}
    //       </div>
    // )
}

export default MovieItem;