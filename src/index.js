import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  )
}

const AppHeader = () => {
  return <h1>My Todo List</h1>
}

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  };
  return (
    <input 
    placeholder={searchText}
    style={searchStyle}/>
  )
}

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