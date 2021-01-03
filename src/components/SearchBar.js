import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search--form">
                <form onSubmit={this.onFormSubmit} className="search--form__field">
                    <label>Search Movies</label>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;