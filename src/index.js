import React from 'react';
import ReactDom from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

const App = () => {
  return (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList items = {['Item 1', 'Item 2']}/>
  </div>
  )
}


ReactDom.render(<App />, document.getElementById('root'));