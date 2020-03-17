import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, completed, allItemsCount }) => {
  return (
    <div>
      <h1>My To-Do list </h1>
      <p className="text-right text-muted">
        (to do: {toDo}, completed: {completed}... from: {allItemsCount} items)
    </p>
    </div>
  );
};

export default AppHeader;
