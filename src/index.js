import React from 'react';
import ReactDom from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder='search' type="text"/>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
      <li></li>
    </ul>
  </div>
)

ReactDom.render(el, document.getElementById('root'));