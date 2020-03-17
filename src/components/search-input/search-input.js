import React, { Component } from 'react';
import './search-input.css';
import ToDoActions from '../../actions/todo-actions';

export default class SearchInput extends Component {

  state = {
    searchInputValue: ''
  };

  handleChange = event => {
    const val = event.target.value.toLowerCase();
    ToDoActions.searchItem(val);
    this.setState({
      searchInputValue: val
    });
  };

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="searching (in lower case chars)..."
          value={this.state.searchInputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
