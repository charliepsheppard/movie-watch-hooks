import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onSearchSubmit(term)
  };

  return (
    <div className="search-form">
      <form onSubmit={onSubmit} className="search-form-field">
        <input
          type="text"
          value={term}
          placeholder="Search"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={onSubmit} className="search-button">Find</button>
      </form>
    </div>
  );
};

export default SearchBar;