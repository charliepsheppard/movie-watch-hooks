import React from 'react';
import moviedatabase from '../api/moviedatabase'
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {
    state = {movies: []}

    onSearchSubmit = async term => {
        const apiKey = '004fe88364bf7b2db8cbedbea28c063c'

        const response = await moviedatabase.get(`/search/multi?api_key=${apiKey}&query=${term}`);

        this.setState({movies: response.data.results});
        console.log(response.data.results);
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default App;