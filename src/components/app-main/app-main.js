import React from 'react'
import { connect } from '@cerebral/react'
import AppHeader from '../app-header';

import ToDoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import SearchInput from '../search-input';

const AppMain = connect({},
  function App() {
    return <div>
      <AppHeader />
      <SearchInput />
      <ToDoList />
      <ItemAddForm />
    </div>;
  }
)

export default AppMain
