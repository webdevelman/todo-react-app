import { dispatch, register } from '../dispatcher/dispatcher';
import AppConstants from '../constants/todo-action-types';
import { EventEmitter } from 'events';
import ToDoItemAPI from '../data/todo-item-api';
const CHANGE_EVENT = 'change';

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getToDoData() {
    return ToDoItemAPI.toDoData;
  },
  dispatcherIndex: register(function (action) {
    switch (action.type) {
      case AppConstants.ADD_ITEM:
        ToDoItemAPI.addItem(action.text);
        break;
      case AppConstants.COMPLETE_ITEM:
        ToDoItemAPI.completeItem(action.id);
        break;
      case AppConstants.MARK_ITEM_IMPORTANT:
        ToDoItemAPI.markItemImportant(action.id);
        break;
      case AppConstants.DELETE_ITEM:
        ToDoItemAPI.deleteItem(action.id);
        break;
      case AppConstants.SEARCH_ITEM:
        ToDoItemAPI.searchItem(action.text);
        break;
    }

    AppStore.emitChange();

  })
});

export default AppStore;
