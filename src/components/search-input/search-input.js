import React, { Component } from 'react';
import './search-input.css';

export default class SearchInput extends Component {
  render() {
    const { onSearch, searchInputValue } = this.props;
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="searching (in lower case chars)..."
          value={searchInputValue}
          onChange={onSearch}
        />
      </div>
    );
  }
}
