import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {

  const todoData = [
    { label: 'Drink coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false },
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