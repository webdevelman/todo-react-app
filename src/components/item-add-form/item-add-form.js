import React from 'react';
import { state, sequences } from 'cerebral'
import { connect } from '@cerebral/react'
import './item-add-form.css';

const ItemAddForm = connect(
  {
    addTextValue: state`newTodoItemLabel`,
    onInputNewItemLabel: sequences`onInputAddItemLabelSeq`,
    onSubmitNewItem: sequences`onSubmitNewItemSeq`,
    isNewTodoItemFormVisible: state`isNewTodoItemFormVisible`
  },
  ({
    addTextValue,
    onInputNewItemLabel,
    onSubmitNewItem,
    isNewTodoItemFormVisible
  }) => {

    let classNames = 'form-item-add-form input-group';
    if (false === isNewTodoItemFormVisible) {
      classNames += ' non-visible';
    }


    return (
      <form className={classNames} onSubmit={(e) => { e.preventDefault(); onSubmitNewItem(); }} >
        <input
          type="text"
          className="form-control"
          value={addTextValue}
          placeholder="New To-Do-item label"
          onChange={(event) => onInputNewItemLabel({ newValue: event.target.value })}
        />

        <span className="input-group-btn">
          <button className="btn btn-outline-primary">Add Item</button>
        </span>
      </form >
    );
  }
);

export default ItemAddForm
