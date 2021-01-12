import React from 'react';

class DropdownMenu extends React.Component {
    state = {selectorOption: ''};

    componentDidMount() {
        this.setState({selectorOption: 'movie'})
    }

    // onOptionSelect = e => {
    //     this.setState({ selectorOption: e.target.value });
    //     this.props.onChange(this.state.selectorOption);
    // }

    render() {
        console.log(this.props)
        return (
          <div className="menu">
            <select
              className="content-selector-dropdown"
              // onChange={this.onSelectorChange}
              onChange={this.onOptionSelect}
            >
              <option className="content-selector-option" value="movie">
                Movie
              </option>
              <option className="content-selector-option" value="tvshow">
                TV Show
              </option>
              <option className="content-selector-option" value="actor/actress">
                Actor/Actress
              </option>
              <option className="content-selector-option" value="director">
                Director
              </option>
            </select>
          </div>
        );
    }
}

export default DropdownMenu;