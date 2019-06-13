import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import './App.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      let newArray = [...todoData];
      newArray.splice(idx, 1)
      return {todoData: newArray};
    });
  };

  addItem = (text) => {

    const newItem = {
        label: text,
        important: false,
        id: this.maxId++
    }
    this.setState(({todoData}) => {
      let newArray = [...todoData];
      return {todoData: [newItem, ...newArray]}
    })
  }

  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList 
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />

        <div>
          <ItemAddForm 
          adding={this.addItem} />
        </div>

        
      </div>
    );
  }
  
};