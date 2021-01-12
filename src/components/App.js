import React from 'react';
import moviedatabase from '../api/moviedatabase'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import DropdownMenu from './DropdownMenu';

class App extends React.Component {
    state = {movies: [], selectedOption: ''}

    // componentDidMount() {
    //     // this.setState({selectedOption: 'movie'})
    //     this.onSelectedChange()
    //     console.log('the component mounted')
    // }

    onSearchSubmit = async term => {
        const apiKey = process.env.REACT_APP_API_KEY

        const response = await moviedatabase.get(`/search/multi?api_key=${apiKey}&query=${term}`);

        this.setState({movies: response.data.results});
        console.log(response.data.results);
        console.log(this.state);
    }

    onSelectedChange = selected => {
        this.setState({selectedOption: selected});
    }
    
    render() {
        console.log(this.state);
        return (
            <div>
                {/* <DropdownMenu onChange={this.onSelectedChange} /> */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <MovieList movies={this.state.movies} slectedOption={this.state.selectedOption} />
            </div>
        );
    }
}

export default App;