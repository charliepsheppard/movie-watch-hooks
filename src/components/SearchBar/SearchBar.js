import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
          <div className="search-form">
            <form onSubmit={this.onFormSubmit} className="search-form-field">
              {/* <placeholder>Search Movies</placeholder> */}
              <input
                type="text"
                value={this.state.term}
                placeholder="Search"
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <button onClick={this.onFormSubmit} className="search-button">Find</button>
            </form>
          </div>
        );
    }
}

export default SearchBar;