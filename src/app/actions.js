import { state } from 'cerebral'

export const initalizeTodoListData = ({ api, store }) => {
  const todoItems = api.init();
  store.set('todoItems', todoItems);
}

export const updateTodoStorage = ({ storage, get }) => {
  const todoData = get(state`todoItems`);
  storage.saveTodoData(todoData);
}

export const onCompletedItem = ({ api, props, store, get }) => {
  const todoId = props.id;
  const todoItems = api.completeItem(todoId);
  store.set('todoItems', todoItems);
}

export const onMarkImportant = ({ api, props, store, get }) => {
  const todoId = props.id;
  const todoItems = api.markItemImportant(todoId);
  store.set('todoItems', todoItems);
}

export const onDeleteItem = ({ api, props, store, get }) => {
  const todoId = props.id;
  const todoItems = api.deleteItem(todoId);
  store.set('todoItems', todoItems);
}

export const storeInputAddItemLabel = ({ store, props }) => {
  store.set('newTodoItemLabel', props.newValue);
}

export const onSubmitNewItem = ({ api, store, props, get }) => {
  const newTodoItemLabel = get(state`newTodoItemLabel`).trim();
  if (newTodoItemLabel) {
    const todoItems = api.addItem(newTodoItemLabel);
    store.set('todoItems', todoItems);
  }
  else {
    store.set('error', 'New To-Do item label can\'t be empty!');
  }
}

export const clearInputAddItemLabel = ({ store, props }) => {
  store.set('newTodoItemLabel', '');
}

export const clearError = ({ store }) => {
  store.set('error', null);
}

export const searchValueToLow = ({ store, get, props }) => {
  const searchTodoItemValue = props.searchVal;
  store.set('searchTodoItemValue', searchTodoItemValue.toLowerCase().trim());
}

export const isNewTodoItemFormVisible = ({ store, get }) => {
  const searchTodoItemValue = get(state`searchTodoItemValue`).trim();
  if (searchTodoItemValue) {
    store.set('isNewTodoItemFormVisible', false);
  }
  else {
    store.set('isNewTodoItemFormVisible', true);
  }
}

export const makeSearch = ({ store, api, get }) => {
  const todoData = get(state`todoItems`);
  const searchTodoItemValue = get(state`searchTodoItemValue`);
  const todoItems = api.searchItem(searchTodoItemValue, todoData);
  store.set('todoItems', todoItems);
}
