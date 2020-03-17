const ToDoItemAPI = {
  toDoData: [],
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
    if (
      undefined === this.toDoData ||
      this.toDoData.length < 1
    ) {
      return 1;
    }
    let maxId = Math.max.apply(
      Math,
      this.toDoData.map(function (o) {
        return o.id;
      })
    );
    maxId++;
    return maxId++;
  },

  getItemIndex(id) {
    if (
      undefined === this.toDoData ||
      this.toDoData.length < 1
    ) {
      return null;
    }
    return this.toDoData.findIndex(el => el.id === id);
  },

  getItemByIndex(id) {
    const idx = this.getItemIndex(id);
    if (null === idx) {
      return null;
    }
    const item = this.toDoData.filter(item => {
      return this.getItemIndex(item.id) === idx;
    })[0];
    return item;
  },

  deleteItem(id) {
    const toDoData = this.toDoData;
    const idx = this.getItemIndex(id);
    const filteredtoDoData = toDoData
      .slice(0, idx)
      .concat(toDoData.slice(idx + 1, toDoData.length));
    this.toDoData = filteredtoDoData;
  },

  addItem(itemLabel) {
    const toDoData = this.toDoData
    if (itemLabel && itemLabel.length > 0) {
      this.toDoData = [...toDoData, this.createToDoItem(itemLabel)];
    }
  },

  init() {
    this.toDoData = [
      this.createToDoItem('Intro to React', 1),
      this.createToDoItem('Make First React To-Do app', 2),
      this.createToDoItem('Refactor To-Do app...', 3)
    ];
  },

  invertItemProperty(id, propertyName) {
    const todoData = this.toDoData;
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
  },

  completeItem(id) {
    this.toDoData = this.invertItemProperty(id, 'completed');
  },
  markItemImportant(id) {
    this.toDoData = this.invertItemProperty(id, 'important');
  },
  searchItem(searchingValue) {
    const newItems = [];
    const todoData = this.toDoData;
    todoData.forEach(function (item) {
      item.visible = item.label
        .toLowerCase()
        .includes(searchingValue.toLowerCase());
      newItems.push(item);
    });
    this.toDoData = newItems;
  }
};

ToDoItemAPI.init();
export default ToDoItemAPI;
