import React, { Component } from 'react';
import ToDoList from '../todo-list';
import SearchInput from '../search-input';
import ItemAddForm from '../item-add-form';
import AppHeader from '../app-header';
import './app.css';

export default class App extends Component {
  state = {
    searchInputValue: '',
    todoData: [
      this.createTodoItem('Intro to React', 1),
      this.createTodoItem('Make First React To-Do app', 2),
      this.createTodoItem('Refactor To-Do app...', 3)
    ]
  };

  createTodoItem(label = 'Some new Todo Item', idx = false) {
    return {
      id: false === idx ? this.getNextMaxId() : idx,
      label: label,
      important: false,
      completed: false,
      visible: true
    };
  }

  getNextMaxId() {
    if (
      undefined === this.state ||
      undefined === this.state.todoData ||
      this.state.todoData.length < 1
    ) {
      return 1;
    }
    let maxId = Math.max.apply(
      Math,
      this.state.todoData.map(function (o) {
        return o.id;
      })
    );
    maxId++;
    return maxId++;
  }

  getItemIndex(id) {
    if (
      undefined === this.state ||
      undefined === this.state.todoData ||
      this.state.todoData.length < 1
    ) {
      return null;
    }
    return this.state.todoData.findIndex(el => el.id === id);
  }

  getItemByIndex(id) {
    const idx = this.getItemIndex(id);
    if (null === idx) {
      return null;
    }
    const item = this.state.todoData.filter(item => {
      return this.getItemIndex(item.id) === idx;
    })[0];
    return item;
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = this.getItemIndex(id);
      const filteredTodoData = todoData
        .slice(0, idx)
        .concat(todoData.slice(idx + 1, todoData.length));
      return {
        todoData: filteredTodoData
      };
    });
  };

  addItem = itemLabel => {
    if (itemLabel && itemLabel.length > 0) {
      this.setState(({ todoData }) => {
        return {
          todoData: [...todoData, this.createTodoItem(itemLabel)]
        };
      });
    }
  };

  invertItemProperty(id, propertyName) {
    const todoData = this.state.todoData;
    if (propertyName !== 'important' && propertyName !== 'completed') {
      return [...todoData];
    }
    const idx = this.getItemIndex(id);
    let item = this.getItemByIndex(id);
    item[propertyName] = !item[propertyName];
    const newItems = [
      ...todoData.slice(0, idx),
      item,
      ...todoData.slice(idx + 1)
    ];
    return newItems;
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const newItems = this.invertItemProperty(id, 'important');
      return {
        todoData: newItems
      };
    });
  };

  onToggleCompleted = id => {
    this.setState(({ todoData }) => {
      const newItems = this.invertItemProperty(id, 'completed');
      return {
        todoData: newItems
      };
    });
  };

  onSearch = event => {
    const searchingValue = event.target.value;
    this.setState({
      searchInputValue: searchingValue.toLowerCase()
    });
    this.setState(({ todoData }) => {
      const newItems = [];
      todoData.forEach(function (item) {
        item.visible = item.label
          .toLowerCase()
          .includes(searchingValue.toLowerCase());
        newItems.push(item);
      });
      return {
        todoData: newItems
      };
    });
  };

  render() {
    const { searchInputValue, todoData } = this.state;
    const completedCount = todoData.filter(item => true === item.completed)
      .length;
    const toDoCount = todoData.filter(item => false === item.completed).length;
    const allItemsCount = todoData.length;
    return (
      <div>
        <AppHeader
          toDo={toDoCount}
          completed={completedCount}
          allItemsCount={allItemsCount}
        />

        <SearchInput
          onSearch={event => this.onSearch(event)}
          searchInputValue={searchInputValue}
        />

        <ToDoList
          todos={todoData}
          onDeleted={id => this.deleteItem(id)}
          onToggleImportant={id => this.onToggleImportant(id)}
          onToggleCompleted={id => this.onToggleCompleted(id)}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
