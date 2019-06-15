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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: ''
  };

  createTodoItem(label) {
    return (
      {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    );
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
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      let newArray = [...todoData];
      return {todoData: [newItem, ...newArray]};
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el)=> el.id === id);
    //1. update object
    const oldItem = arr[idx];
    const newItem = { ...oldItem,
    [propName]: !oldItem[propName]};

    //2. construct new array
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  resetFilter = () => {
    console.log('resetFilter')
  }

  activeFilter = () => {
    console.log('activeFilter')
  }
  
  doneFilter = () => {
    console.log('doneFilter')
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  render () {
    const { todoData, term } = this.state;
    const doneCount = todoData.filter((el)=> el.done).length;
    const todoCount = todoData.length - doneCount;
    const filteredItems = this.search(todoData, term);
    
    return (

      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter 
            resetFilter={this.resetFilter}
            activeFilter={this.activeFilter}
            doneFilter={this.doneFilter}
          />
        </div>

        <TodoList 
          todos={filteredItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <div>
          <ItemAddForm 
          adding={this.addItem} />
        </div>
      </div>
    );
  }
};