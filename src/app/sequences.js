import * as actions from './actions'

export const initalizeTodoList = [
  actions.clearError,
  actions.initalizeTodoListData,
  actions.updateTodoStorage
]

export const onCompletedItem = [
  actions.clearError,
  actions.onCompletedItem,
  actions.updateTodoStorage
]

export const onInputAddItemLabelSeq = [
  actions.clearError,
  actions.storeInputAddItemLabel
]

export const onSubmitNewItemSeq = [
  actions.clearError,
  actions.onSubmitNewItem,
  actions.clearInputAddItemLabel,
  actions.updateTodoStorage
]

export const onMarkImportant = [
  actions.clearError,
  actions.onMarkImportant,
  actions.updateTodoStorage
]

export const onDeleteItem = [
  actions.clearError,
  actions.onDeleteItem,
  actions.updateTodoStorage
]

export const onSearch = [
  actions.clearError,
  actions.searchValueToLow,
  actions.isNewTodoItemFormVisible,
  actions.makeSearch,
  actions.updateTodoStorage
]
