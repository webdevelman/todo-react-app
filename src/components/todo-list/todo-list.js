import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';
import ToDoActions from '../../actions/todo-actions';


const TodoList = ({
  todos,
}) => {
  const items = todos.map(({ id, ...itemProps }) => {
    let classNames = 'list-group-item';
    if (false === itemProps.visible) {
      classNames += ' non-visible';
    }
    return (
      <li className={classNames} key={id}>
        <TodoListItem
          id={id}
          label={itemProps.label}
          important={itemProps.important}
          completed={itemProps.completed}
          visible={itemProps.visible}
          onCompletedItem={() => ToDoActions.completeItem(id)}
          onMarkImportant={() => ToDoActions.markImportant(id)}
          onDeleteItem={() => ToDoActions.deleteItem(id)}
        />
      </li>
    );
  });

  return <ul className="list-group">{items}</ul>;
};

export default TodoList;
