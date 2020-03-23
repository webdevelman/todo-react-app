import React from 'react';
import { connect } from '@cerebral/react'
import { state, sequences } from "cerebral";
import './todo-list.css';

const TodoList = connect(
  {
    todoItems: state`todoItems`,
    onCompletedItem: sequences`onCompletedItem`,
    onMarkImportant: sequences`onMarkImportant`,
    onDeleteItem: sequences`onDeleteItem`
  },
  (
    {
      todoItems,
      onCompletedItem,
      onMarkImportant,
      onDeleteItem
    }
  ) => {

    const listItems = todoItems.map((todoItem) => {
      let classNames = 'list-group-item';
      if (false === todoItem.visible) {
        classNames += ' non-visible';
      }

      let itemClassNames = 'todo-item';

      if (true === todoItem.completed) {
        itemClassNames += ' completed';
      }

      if (true === todoItem.important) {
        itemClassNames += ' important';
      }

      return (
        <li className={classNames} key={todoItem.id}>
          <span className={itemClassNames}>
            <span
              onClick={() => onCompletedItem({ id: todoItem.id })}
              title="click to mark item as Completed"
            >
              {todoItem.label}
            </span>


            <button type="button"
              className="btn btn-outline-info"
              title="Make Item Important"
              onClick={() => onMarkImportant({ id: todoItem.id })}
            >
              <i className="fa fa-flag"></i>
            </button>

            <button type="button"
              className="btn btn-outline-danger"
              onClick={() => onDeleteItem({ id: todoItem.id })}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </span>
        </li>
      );
    });

    return <ul className="list-group">
      {listItems}
    </ul>;
  });

export default TodoList;
