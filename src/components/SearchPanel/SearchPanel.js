import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ filterItems }) => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" 
              onChange={filterItems}
              />
  );
};

export default SearchPanel;