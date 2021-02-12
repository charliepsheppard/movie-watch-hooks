import { useState, useEffect } from 'react';
import moviedatabase from '../api/moviedatabase';

const useMovies = (defaultSearchTerm) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    // const apiKey = process.env.REACT_APP_API_KEY
    const apiKey = '004fe88364bf7b2db8cbedbea28c063c'

    const response = await moviedatabase.get(`/search/multi?api_key=${apiKey}&query=${term}`);

    setMovies(response.data.results)
    // this.setState({ movies: response.data.results, selectedMovie: response.data.results[0] });
    // console.log(response.data.results);
    // console.log(this.state);
  }

  return [movies, search];
};

export default useMovies;