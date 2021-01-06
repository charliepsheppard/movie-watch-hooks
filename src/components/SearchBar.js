import React from 'react';

class SearchBar extends React.Component {
    state = {term: '', selectorOption: 'movie'};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    onSelectorChange = e => {
        this.setState({selectorOption: e.target.value});

        // console.log(this.state.selectorOption);
    }

    render() {
        console.log(this.state.selectorOption);
        return (
          <div className="search--form">
            <form onSubmit={this.onFormSubmit} className="search--form__field">
              <label>Search Movies</label>
              <select
                className="content-selector-dropdown"
                onChange={this.onSelectorChange}
              >
                <option
                  className="content-selector-option"
                  value="movie"
                //   onClick={this.onSelectorChange}
                >
                  Movie
                </option>
                <option
                  className="content-selector-option"
                  value="tvshow"
                //   onClick={this.onSelectorChange}
                >
                  TV Show
                </option>
                <option
                  className="content-selector-option"
                  value="actor/actress"
                //   onClick={this.onSelectorChange}
                >
                  Actor/Actress
                </option>
                <option
                  className="content-selector-option"
                  value="director"
                //   onClick={this.onSelectorChange}
                >
                  Director
                </option>
              </select>
              <input
                type="text"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <button onClick={this.onFormSubmit}>Search</button>
            </form>
          </div>
        );
    }
}

export default SearchBar;