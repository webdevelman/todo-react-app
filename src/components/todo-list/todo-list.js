import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleCompleted
}) => {
  const items = todos.map(({ id, ...itemProps }) => {
    let classNames = 'list-group-item';
    if (false === itemProps.visible) {
      classNames += ' non-visible';
    }
    return (
      <li className={classNames} key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{items}</ul>;
};

export default TodoList;
