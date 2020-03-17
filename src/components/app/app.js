import React from 'react';
import AppStore from '../../stores/todo-store';
import StoreWatchMixin from '../../mixins/watch-mixin';
import ToDoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import AppHeader from '../app-header';
import SearchInput from '../search-input';

function getToDoDataItems() {
  return { items: AppStore.getToDoData() };
}

const getItems = (props) => {
  const todoData = props.items;
  const completedCount = todoData.filter(item => true === item.completed).length;
  const toDoCount = todoData.filter(item => false === item.completed).length;
  const allItemsCount = todoData.length;

  return <div>
    <AppHeader
      toDo={toDoCount}
      completed={completedCount}
      allItemsCount={allItemsCount}
    />
    <SearchInput />
    <ToDoList todos={todoData} />
    <ItemAddForm />
  </div>;
}

export default StoreWatchMixin(getItems, getToDoDataItems);
