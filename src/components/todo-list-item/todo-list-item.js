import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ id, important, completed,
  label, visible, onCompletedItem, onMarkImportant, onDeleteItem }) => {

  let classNames = 'todo-item';

  if (true === completed) {
    classNames += ' completed';
  }

  if (true === important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span
        onClick={onCompletedItem}
        title="click to mark item as Completed"
      >
        {label}
      </span>


      <button type="button"
        className="btn btn-outline-info"
        title="Make Item Important"
        onClick={onMarkImportant}
      >
        <i className="fa fa-flag"></i>
      </button>

      <button type="button"
        className="btn btn-outline-danger"
        onClick={onDeleteItem}
      >
        <i className="fa fa-trash-o"></i>
      </button>

    </span>
  );
};

export default TodoListItem;
