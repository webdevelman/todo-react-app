import TodoActionTypes from '../constants/todo-action-types.js';
import { dispatch, register } from '../dispatcher/dispatcher.js';

const Actions = {
  addItem(text) {
    dispatch({
      type: TodoActionTypes.ADD_ITEM,
      text,
    });
  },

  markImportant(id) {
    dispatch({
      type: TodoActionTypes.MARK_ITEM_IMPORTANT,
      id,
    });
  },
  deleteItem(id) {
    dispatch({
      type: TodoActionTypes.DELETE_ITEM,
      id,
    });
  },

  completeItem(id) {
    dispatch({
      type: TodoActionTypes.COMPLETE_ITEM,
      id,
    });
  },

  searchItem(text) {
    dispatch({
      type: TodoActionTypes.SEARCH_ITEM,
      text,
    });
  },
};

export default Actions;
