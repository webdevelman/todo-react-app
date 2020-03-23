import React from 'react';
import { state, sequences } from 'cerebral'
import { connect } from '@cerebral/react'
import './search-input.css';

const SearchInput = connect(
  {
    searchTodoItemValue: state`searchTodoItemValue`,
    onSearch: sequences`onSearch`,
    isNewTodoItemFormVisible: state`isNewTodoItemFormVisible`
  },
  (
    { searchTodoItemValue, onSearch }
  ) => {

    return (
      <div className="form-group" >
        <input
          type="text"
          className="form-control"
          placeholder="searching (in lower case chars)..."
          value={searchTodoItemValue}
          onChange={(e) => onSearch({ searchVal: e.target.value })}
        />
      </div >
    );
  }
);

export default SearchInput;
