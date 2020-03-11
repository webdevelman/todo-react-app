import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleCompleted,
      important,
      completed
    } = this.props;

    let classNames = 'todo-item';

    if (true === completed) {
      classNames += ' completed';
    }

    if (true === important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span
          onClick={onToggleCompleted}
          title="click to mark item as Completed"
        >
          {label}
        </span>

        <button
          className="btn btn-outline-info"
          onClick={onToggleImportant}
          title="Make Item Important"
        >
          <i className="fa fa-flag "></i>
        </button>

        <button
          className="btn btn-outline-danger"
          onClick={onDeleted}
          title="Delete Item"
        >
          <i className="fa fa-trash-o "></i>
        </button>
      </div>
    );
  }
}
