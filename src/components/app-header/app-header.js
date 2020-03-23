import React from 'react';
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import './app-header.css';


const AppHeader = connect(
  {
    todoItems: state`todoItems`,
  },
  ({ todoItems }) => {
    const completedCount = todoItems.filter(item => true === item.completed).length;
    const toDoCount = todoItems.filter(item => false === item.completed).length;
    const allItemsCount = todoItems.length;

    return (
      <div>
        <h1>My To-Do list </h1>
        <p className="text-right text-muted">
          (to do: {toDoCount}, completed: {completedCount}... from: {allItemsCount} items)
      </p>
      </div>
    );
  }
);

export default AppHeader;
