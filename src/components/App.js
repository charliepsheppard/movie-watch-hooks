import React from 'react';
import moviedatabase from '../api/moviedatabase'
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = async term => {
        const apiKey = '004fe88364bf7b2db8cbedbea28c063c'

        const response = await moviedatabase.get(`/search/multi?api_key=${apiKey}&query=${term}`);

        console.log(response);
    }
    
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;