import React, { Component } from 'react';
import ToDoActions from '../../actions/todo-actions';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    addTextValue: ''
  };

  handleChange = event => {
    this.setState({
      addTextValue: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    ToDoActions.addItem(this.state.addTextValue);
    this.setState({
      addTextValue: ''
    });
  };

  render() {
    return (
      <form className="item-add-form input-group" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          value={this.state.addTextValue}
          placeholder="New To-Do-item label"
          onChange={this.handleChange}
        />

        <span className="input-group-btn">
          <button className="btn btn-outline-primary">Add Item</button>
        </span>
      </form>
    );
  }
}
