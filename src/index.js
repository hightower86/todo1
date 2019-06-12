import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];
  
  return (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos = { todoData }/>
  </div>
  )
}


ReactDom.render(<App />, document.getElementById('root'));