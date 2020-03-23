export const storage = {
  saveTodoData: todoData => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  },
  getTodoData: () => {
    return JSON.parse(localStorage.getItem("todos") || "{}");
  }
};

export const api = {
  createToDoItem(label = 'Some new Todo Item', idx = false) {
    return {
      id: false === idx ? this.getNextMaxId() : idx,
      label: label,
      important: false,
      completed: false,
      visible: true
    };
  },

  getNextMaxId() {
    const todoData = storage.getTodoData();
    if (
      undefined === todoData ||
      todoData.length < 1
    ) {
      return 1;
    }
    let maxId = Math.max.apply(
      Math,
      todoData.map(function (o) {
        return o.id;
      })
    );
    maxId++;
    return maxId++;
  },

  getItemIndex(id) {
    const todoData = storage.getTodoData();
    if (
      undefined === todoData ||
      todoData.length < 1
    ) {
      return null;
    }
    return todoData.findIndex(el => el.id === id);
  },

  getItemByIndex(id) {
    const todoData = storage.getTodoData();
    const idx = this.getItemIndex(id, todoData);
    if (null === idx) {
      return null;
    }
    const item = todoData.filter(item => {
      return this.getItemIndex(item.id, todoData) === idx;
    })[0];
    return item;
  },

  deleteItem(id) {
    const todoData = storage.getTodoData();
    const idx = this.getItemIndex(id);
    const filteredTodoData = todoData
      .slice(0, idx)
      .concat(todoData.slice(idx + 1, todoData.length));
    return filteredTodoData;
  },

  addItem(itemLabel) {
    const todoData = storage.getTodoData();
    let newTodoData = [];
    if (itemLabel && itemLabel.length > 0) {
      newTodoData = [...todoData, this.createToDoItem(itemLabel, this.getNextMaxId())];
    }
    else {
      newTodoData = todoData;
    }
    return newTodoData;
  },

  init() {
    const todoItems = [
      this.createToDoItem('Intro to React', 1),
      this.createToDoItem('Make First React To-Do app', 2),
      this.createToDoItem('Refactor To-Do app...', 3)
    ];

    return todoItems;
  },

  invertItemProperty(id, propertyName) {
    const todoData = storage.getTodoData();
    if (propertyName !== 'important' && propertyName !== 'completed') {
      return [...todoData];
    }
    const idx = this.getItemIndex(id, todoData);
    let item = this.getItemByIndex(id, todoData);

    item[propertyName] = !item[propertyName];
    const newItems = [
      ...todoData.slice(0, idx),
      item,
      ...todoData.slice(idx + 1)
    ];
    return newItems;
  },

  completeItem(id) {
    return this.invertItemProperty(id, 'completed');
  },

  markItemImportant(id) {
    return this.invertItemProperty(id, 'important');
  },

  searchItem(searchingValue) {
    const newItems = [];
    const todoData = storage.getTodoData();
    todoData.forEach(function (item) {
      item.visible = item.label
        .toLowerCase()
        .includes(searchingValue.toLowerCase());
      newItems.push(item);
    });
    return newItems;
  }
};
