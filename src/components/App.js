import React from 'react';
import moviedatabase from '../api/moviedatabase'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

class App extends React.Component {
    state = {movies: [], selectedMovie: null}

    componentDidMount() {
        this.onSearchSubmit('Star Wars');
    }

    onSearchSubmit = async term => {
        const apiKey = process.env.REACT_APP_API_KEY

        const response = await moviedatabase.get(`/search/multi?api_key=${apiKey}&query=${term}`);

        this.setState({movies: response.data.results, selectedMovie: response.data.results[0]});
        console.log(response.data.results);
        console.log(this.state);
    }

    onMovieSelect = movie => {
        this.setState({selectedMovie: movie});
    }
    
    render() {
        console.log(this.state.movies);
        return (
          <div>
            <div>
              <MovieDetail movie={this.state.selectedMovie} />
            </div>
            <div>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <MovieList
                movies={this.state.movies}
                onMovieSelect={this.onMovieSelect}
              />
            </div>
          </div>
        );
    }
}

export default App;